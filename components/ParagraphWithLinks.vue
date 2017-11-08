<template>
    <div class="paragraph-with-links">
    <span v-for="words in paragraph">
      <a v-if="words.url" :href="words.url">
        {{words.words}}
      </a>
      <span v-else>
        {{words.words}}
      </span>
    </span>
    </div>
</template>

<script>
  export default {
    name: 'paragraph-with-links',
    props: ['paragraph']
  }
</script>
