<template>
  <div class="timeline-container">
    <div class="timeline-header">
      <h3>
        Just 40 More Miles.
      </h3>
    </div>
    <div class="timeline">
      <div class="center-line"
           :style="{
              height: height
           }"></div>
      <div v-for="(item, i) of items"
           class="timeline-item">
        <div class="date">
          {{item.date}}
        </div>
        <div class="timeline-card"
             :class="left(i) ? 'timeline-card-left' : 'timeline-card-right'">
          <font-awesome-icon :icon="left(i) ? faCaretRight: faCaretLeft"
                             :class="left(i) ? 'caret-left' : 'caret-right'"
                             class="caret"/>
          <a :href="item.fbEvent"
              :style="{background: 'none'}">
          <responsive-img :src="item.img"/>
          </a>
          <div class="timeline-words">
            <h4>
              {{item.title}}
            </h4>
            <div class="location">
              <a :href="item.location.map">
                <font-awesome-icon :icon="faLocationArrow"/>
                {{item.location.text}}
              </a>
            </div>
            <div class="fb-event">
              <a :href="item.fbEvent">
                <font-awesome-icon :icon="faFacebook"/>
                Facebook Event
              </a>
            </div>
            <div v-if="item.register"
                 class="register">
              <a :href="item.register">
                <font-awesome-icon :icon="faBicycle"/>
                Register on BikeReg
              </a>
            </div>
            <div>
              {{item.description}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import ResponsiveImg from '../../components/Images/ResponsiveImg'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import faCaretRight from '@fortawesome/fontawesome-free-solid/faCaretRight'
  import faCaretLeft from '@fortawesome/fontawesome-free-solid/faCaretLeft'
  import faLocationArrow from '@fortawesome/fontawesome-free-solid/faLocationArrow'
  import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
  import faBicycle from '@fortawesome/fontawesome-free-solid/faBicycle'

  export default {
    name: 'timeline',
    props: {
      items: {
        type: Array,
        required: true
      },
      height: {
        type: String,
        required: true
      }
    },
    components: {
      ResponsiveImg,
      FontAwesomeIcon
    },
    data() {
      return {
        faLocationArrow: faLocationArrow,
        faFacebook: faFacebook,
        faCaretRight: faCaretRight,
        faCaretLeft: faCaretLeft,
        faBicycle: faBicycle,
        collapsed: false
      }
    },
    created() {
      if (process.browser) {
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('resize', this.handleResize)
      }
    },
    destroyed() {
      if (process.browser) {
        window.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('resize', this.handleResize)
      }
    },
    methods: {
      left(i) {
        if (this.collapsed) {
          return false
        } else {
          return i % 2 === 0
        }
      },
      handleScroll() {
        const timelineStartPosition = 400

        this.items.forEach((item, i, arr) => {
          const itemHeightOffset = (i + 1) * 300

          if (window.scrollY > (timelineStartPosition + itemHeightOffset)) {
            this.$set(this.items[i], 'scrolledIntoView', true)
          }
        })
      },
      handleResize() {
        if (document.body.clientWidth <= 750) {
          this.collapsed = true
        } else {
          this.collapsed = false
        }
      }
    },
  }
</script>
<style scoped>
  .timeline-container {
    /*display: inline-block;*/
  }

  .timeline-header {
    color: white;
    text-align: center;
  }

  .timeline {
    width: 90%;
    margin: auto;
    position: relative;
  }

  .center-line {
    position: absolute;
    width: 5px;
    top: 0;
    left: 50%;
    margin-left: -2px;
    background: #e9720f;
    z-index: 1;
  }

  .date {
    text-align: center;
    font-family: 'MyriadPro-Bold', sans-serif;
    font-size: 1.4rem;
    padding-top: 1rem;
    line-height: 1.3rem;
    font-weight: 800;
    position: absolute;
    top: 0;
    left: 50%;
    width: 62px;
    height: 62px;
    margin-left: -31px;
    color: black;
    border-radius: 100%;
    background: #e9720f;
    z-index: 2;
  }

  .timeline-item {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  .caret {
    color: white;
    font-size: 3.5rem;
  }

  .timeline-card {
    max-width: 42%;
    position: relative;
    width: auto;
    background-color: white;
  }

  .timeline-words {
    padding: 1rem;
  }

  .caret-left {
    position: absolute;
    right: -18px;
  }

  .timeline-card-left {
    float: left;
  }

  .caret-right {
    position: absolute;
    left: -18px;
  }

  .timeline-card-right {
    float: right;
  }

  a {
    text-decoration: underline;
    color: black;
    background: rgba(115, 165, 51, 0.75);
    background-size: 100% 1em;
  }

  a:hover {
    background: rgba(61, 118, 53, 0.8);
    transition: 600ms ease;
  }

  .location, .fb-event, .register {
    font-size: 1.25rem;
  }

  .location svg, .fb-event svg, .register svg {
    font-size: 1.5rem;
    background: none;
  }

  @media (max-width: 750px) {
    .center-line {
      left: 6%;
    }

    .date {
      left: 6%;
    }

    .timeline-card {
      max-width: 81%
    }
  }
</style>