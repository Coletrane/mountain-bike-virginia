<template>
    <div class="author-container">
        <a :href="author.fbUrl">
            <img class="author-img" :src=author.imgUrl alt="author">
            <div>{{author.name}}</div>
        </a>
    </div>
</template>

<script>
    export default {
      name: 'author',
      props: ['author']
    }
</script>

<style>
    .author-container {
        width: 40%;
        text-align: center;
        float: left;
        padding-top: 1.2rem;
        max-width: 180px;
    }

    .author-img {
        border-radius: 50%;
        width: 50%;
    }

</style>
