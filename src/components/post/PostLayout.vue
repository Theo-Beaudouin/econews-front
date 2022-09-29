<template>
        <div class="post">
            <h2 class="post-title" v-html="title"></h2>
            <hr class="post-insep">
            <img class="post-img" :src="imgSrc" :alt="imgAlt">
            <p class="post-excerpt" v-html="excerpt"></p>
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
            
            <!--
                <slot> will allow to put at this specific location,
                anything we want when calling the component.
            -->
            <slot></slot>

            <hr>
        </div>
</template>

<script>
    export default {
        /// Props are a way to make a Vue App more modular.
        /// They are data that can be passed from a child compoment to his parent.
        /// In my case, I want to use the PostLayout component throughout the App,
        /// if I were to not use props and put all the logic to insert the data received from the API,
        /// I would have to create a new component that would do a similar task as this one.
        /// Props allows me to have a lighter App, helps to sustain it and makes developmnent easier and faster.
        props: {
            title: String,
            imgSrc: String,
            imgAlt: String,
            excerpt: String,
            date: String,
            author: String
        }
    }
</script>

<style scoped>

    .post-title
    {
        font-size: 20px;
    }

    .post-insep
    {
        width: 20%;
        margin-left: auto;
        margin-right: auto;
        background-color: #ffde59;
    }

    .post-img
    {
        margin-bottom: 10px;
        max-width: 100%;
        max-height: 100%;
    }

    .post-excerpt
    {
        font-size: 15px;
        margin-bottom: 10px;
    }

    .post-secondary
    {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .post-detail
    {
        font-size: 15px;
        display: inline-flex;
        gap: 5px;
        align-items: center;
    }
</style>