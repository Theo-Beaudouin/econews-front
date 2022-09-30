<template>
    <main>
        <div class="post">
            <h1 class="post-title">{{ title }}</h1>
            <p class="post-excerpt">{{ excerpt }}</p>
            <div class="post-secondary">
                <div class="post-detail">
                    <i class="fa-regular fa-clock"></i>
                    <p v-html="date"></p>
                </div>
                <div class="post-detail">
                    <i class="fa-regular fa-user"></i>
                    <p v-html="author"></p>
                </div>
            </div>
            <hr>

            <img class="post-img" :src="imgSrc" :alt="imgAlt">
            <p class="post-content" v-html="content"></p>
        </div>
    </main>
</template>

<script>
    export default {
        props: {
            title: String,
            excerpt: String,
            date: String,
            author: String,
            imgSrc: String,
            imgAlt: String,
            content: String
        }
    }

</script>

<style scoped>
    
    .post-title
    {
        font-size: 20px;
        font-weight: 600;
    }

    .post-img
    {
        margin-bottom: 10px;
        max-width: 100%;
        max-height: 100%;
    }

    .post-excerpt
    {
        font-size: 17px;
        margin: 10px 0;
    }

    .post-secondary
    {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .post-detail
    {
        font-size: 17px;
    }
</style>