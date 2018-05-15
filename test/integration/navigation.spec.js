module.exports = (browser) => {
  const weatherIds = require('../../assets/weather').weatherIds

  const global = require(`./global.${browser}.spec`)
  const By = require('selenium-webdriver').By
  const until = require('selenium-webdriver').until

  let navLinks = [
    'trails',
    'results',
    'facebook',
    'instagram'
  ]

  describe('<navigation> tests', () => {
    let testUrl
    let driver
    let expect

    before(async () => {
      testUrl = await global.testUrl
      driver = await global.driver
      expect = await global.expect
    })

    it('has the MTBVA logo', async () => {
      let logo = await driver.findElement(
        By.id('mtbva-logo'))

      expect(await logo.getAttribute('alt'))
        .to.equal('Mountain Bike Virginia')
      expect(await logo.isDisplayed())
        .to.be.true
    })

    it('has the XXCVA logo', async () => {
      let logo = await driver.findElement(
        By.id('xxcva-logo'))

      expect(await logo.getAttribute('alt'))
        .to.equal('XXCVA Series. Just 40 more miles.')
      expect(await logo.isDisplayed())
        .to.be.true
    })

    describe('weather info tests', () => {
      let weatherElements

      before(async () => {
        weatherElements = await driver.findElements(
          By.className('weather'))
      })

      it('should have 3 weather elements', async () => {
        expect(await weatherElements.length)
          .to.equal(3)
      })

      Object.keys(weatherIds).forEach((city, i, arr) => {
        it(`should have weather for ${city}`, async () => {
          expect(await weatherElements[i].findElement(
            By.className('city-name')))
            .not.to.be.undefined

          expect(await weatherElements[i].findElement(
            By.className('temperature')))
            .not.to.be.undefined

          expect(await weatherElements[i].findElement(
            By.css('img')))
            .not.to.be.undefined
        })
      })
    })

    it('has the hamburger menu icon', async () => {
      let icon = await driver.findElement(
        By.id('mtbva-menu-link'))

      expect(await icon.isDisplayed())
        .to.be.true
    })

    describe('side menu tests', () => {
      let icon
      let menu
      let overlay

      before(async () => {
        icon = await driver.findElement(
          By.id('mtbva-menu-link'))

        await icon.click()
        // lol Safari
        await driver.sleep(3000)

        menu = await driver.findElement(
          By.className('mtbva-menu'))

        overlay = await driver.findElement(
          By.className('overlay'))
      })

      it('should show the menu', async () => {
        expect(await menu.isDisplayed())
          .to.be.true
      })

      it('should show the overlay', async () => {
        expect(await overlay.isDisplayed())
          .to.be.true
      })

      // TODO figure out if this is possible
      xit('should not be able to scroll with the menu open', async () => {
        let scrollScript = 'return window.pageYOffset'

        expect(await driver.executeScript(scrollScript))
          .to.equal(0)
      })

      describe('navlinks test', () => {
        navLinks.forEach(link => {
          it(`should have a ${link} link`, async () => {
            let navLink = await menu.findElement(
              By.id(`${link}-nav-link`))

            expect(await navLink.isDisplayed())
              .to.be.true

            let linkText = await navLink.getText()
            expect(await linkText.toLowerCase().includes(link))
              .to.be.true
          })
        })
      })

      describe('menu closing tests', () => {
        let xIcon

        before(async () => {
          xIcon = await menu.findElement(
            By.id('close-menu-link'))
        })

        it('should have the X icon', async () => {
          expect(await xIcon.isDisplayed())
            .to.be.true
        })

        it('should close when clicking on X icon', async () => {
          await driver.executeScript('document.getElementById(\'close-menu-link\').click();')

          await driver.sleep(500)

          try {
            await driver.findElement(
              By.className('mtbva-menu'))
          } catch (err) {
            expect(err)
              .not.to.be.undefined
          }
        })

        it('should close when clicking on the overlay', async () => {
          await await driver.executeScript('document.getElementById(\'mtbva-menu-link\').click();')
          await driver.sleep(500)

          await driver.executeScript('document.getElementById(\'mtbva-overlay\').click();')
          await driver.sleep(500)

          try {
            await driver.findElement(
              By.className('mtbva-menu'))
          } catch (err) {
            expect(err)
              .not.to.be.undefined
          }
        })
      })
    })
  })
}