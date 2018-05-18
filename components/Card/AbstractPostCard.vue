<template>
  <card>
    <div slot="content"
         class="abstract-post-card">
      <div class="row">
        <div class="col-10
                      col-sm-9
                      col-md-9
                      col-lg-9
                      col-xl-9">
          <slot name="header"/>
        </div>
        <social-actions :post="post"
                        class="col-2
                                 col-sm-3
                                 col-md-3
                                 col-lg-3
                                 col-xl-3
                                 social-right"/>
        <div class="after-header">
          <slot name="after-header"/>
        </div>
      </div>
    </div>
  </card>
</template>
<script>
  import Card from './Card'
  import SocialActions from './SocialActions'

  export default {
    name: 'abstract-post-card',
    props: {
      post: {
        type: Object,
        required: true
      }
    },
    components: {
      Card,
      SocialActions
    }
  }
</script>
<style>
  .words {
    padding: 1rem;
    font-size: 1.2rem;
  }
  .after-header a {
    text-decoration: underline;
    color: black;
    background: rgba(115, 165, 51, 0.75);
    background-size: 100% 1em;
  }
  .after-header a:hover {
    background: rgba(61, 118, 53, 0.8);
    transition: 600ms ease;
  }
  .after-header svg {
    font-size: 1.2rem;
  }

</style>
<style scoped>
  .social-right {
    text-align: right;
    padding-left: 0;
  }

  img {
    width: 100%;
  }

  .row {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .abstract-post-card {
    padding-top: 1rem;
  }

  .after-header {
    width: 100%
  }


</style>