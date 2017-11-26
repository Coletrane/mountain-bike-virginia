<template>
    <div class="author-container"
         :class="inline ? '' : 'float'">
        <a :href="author.fbUrl">
            <img class="author-img" :src=author.imgUrl alt="author">
            <div>{{author.name}}</div>
        </a>
    </div>
</template>

<script>
    export default {
      name: 'author',
      props: [
        'author',
        'inline'
      ]
    }
</script>

<style>
    .author-container {
        width: 40%;
        text-align: center;
        padding-top: 1.2rem;
        max-width: 180px;
    }

    .float {
        float: left;
    }

    .author-img {
        border-radius: 50%;
        width: 50%;
    }

</style>
