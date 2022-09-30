<template>
    <main>
        <div class="post">
            <h1 class="post-title">{{ title }}</h1>
            <p class="post-excerpt">{{ excerpt }}</p>
<!--             <div class="post-secondary">
                <div class="post-detail">
                    <i class="fa-regular fa-clock"></i>
                    <p v-html="date"></p>
                </div>
                <div class="post-detail">
                    <i class="fa-regular fa-user"></i>
                    <p v-html="author"></p>
                </div>
            </div> -->
            <PostDetailsLayout :date="date" :author="author" />
            <hr>

            <img class="post-img" :src="imgSrc" :alt="imgAlt">
            <p class="post-content" v-html="content"></p>
        </div>
    </main>
</template>

<script>
    import PostDetailsLayout from '@/components/post/PostDetailsLayout.vue'

    import PostsService from '@/services/PostsService.js'

    export default {
        data() {
            return {
                title: null,
                excerpt: null,
                date: null,
                author: null,
                imgSrc: null,
                imgAlt: null,
                content: null
            }
        },
        mounted() {
            PostsService.find(this.$route.params.postId).then(
                (response) => {
                    console.log(`Single Post - ${this.$route.params.postId}`, response.data);
                    this.title = response.data.title.rendered;
                    this.excerpt = response.data.excerpt.rendered;
                    this.date = response.data.formatted_date;
                    this.author = response.data._embedded['author'][0].name;
                    if(!response.data._embedded['wp:featuredmedia']) {
                        this.imgSrc = '/src/assets/placeholder_media.png';
                        this.imgAlt = 'no thumbnail'
                    } else {
                        this.imgSrc = response._embedded['wp:featuredmedia'][0].source_url;
                        this.imgAlt = response.data._embedded['wp:featuredmedia'][0].alt_text;
                    }
                    this.content = response.data.content.rendered;
                }
            );
        },
        components: {
            PostDetailsLayout
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
</style>