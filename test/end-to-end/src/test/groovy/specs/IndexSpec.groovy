package specs

import geb.error.RequiredPageContentNotPresent
import geb.spock.GebSpec
import pages.IndexPage
import util.Posts

class IndexSpec extends GebSpec {
    // Geb hooks
    def setupSpec() {
        to IndexPage
        scrollAllPosts()
    }

    def setup() {
        at IndexPage
    }

    // Tests
    def "should have the same number of promo cards as JSON files in /posts"() {
        expect:
        promoCards.size() == Posts.posts.size()
    }

    def "post card metadata test"() {
        expect:
        promoCards.each { card ->
            try {
                then: "headline"
                assert card.headline.isDisplayed()

                and: "subheading"
                assert card.subheading.isDisplayed()

                and: "date"
                assert card.date.isDisplayed()

                and: "location"
                assert card.location.isDisplayed()
            } catch (RequiredPageContentNotPresent e) {
                print ("${e} ${card.attr("postroute")}")
                assert false
            }
        }
    }

    // Helpers
    def scrollAllPosts() {
        js.exec("window.scroll(0,${Posts.pages.size() * 20000});")
        $("img").allElements().each() { img ->
            waitFor { img.isDisplayed() }
        }
    }
}
