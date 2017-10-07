<template>
  <div id="creature-2017-blog" class="post-container">
    <div class="blog">
      <div class="columns">
        <div class="column">
          <div class="title">
            <router-link to="creature2017">
              Virginia's Blue Ridge Creature from Carvins Cove
            </router-link>
          </div>
          <div class="subtitle">Oct 1st, 2017</div>
          <p>
            Once again Virginia's Blue Ridge Creature from Carvins Cove was a resounding success. Special thanks to
            Debbie Inman, Renee Powers, Chris Lee, and all the wonderful staff who helped make the Creature come alive.
          </p>
          <p>
            <router-link to="results">View the results.</router-link>
          </p>

        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="ytWrapperWrapper">
            <div class="ytWrapper">
              <iframe width="100%"
                      src="https://www.youtube.com/embed/uO44Tt0woT8"
                      frameborder="0" allowfullscreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'creature-2017-blog'
  }
</script>