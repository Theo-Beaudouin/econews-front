<template>
    <main>
        <h3 class="main-title">Recent</h3>
        <hr class="main-vertsep">

        <div class="main-grid">
            <PostLayout
                v-for="post in posts" :key="post.id"
                :title="post.title.rendered"
                :id="post.id"
                :imgSrc="post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : 'src/assets/placeholder_media.png'"
                :imgAlt="post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].alt_text : 'no thumbnail'"
                :excerpt="post.excerpt.rendered"
                :date="post.formatted_date"
                :author="post._embedded['author'][0].name"
            />
        </div>
    </main>
</template>

<script>
    import PostLayout from '@/components/post/PostLayout.vue'
    /// Import the service created for the posts
    import PostsService from '@/services/PostsService.js'

    export default {
        components: {
            PostLayout
        },
        data() {
            return {
                /// 'posts' will hold the array of objects received from the WP API.
                posts: null
            }
        },
        /// 'created()' is one of the many lifecycle hooks of a Vue instance.
        /// In this case, 'created()' executes after creating the component for render.
        created() {
            /// Calling the service and the method 'findAll()' that was created inside of it.
            PostsService.findAll().then(
                (response) => {
                    /// For dev, this console.log is very useful.
                    /// BUT, in prod, it will have to be deleted !!
                    console.log('Posts', response.data);
                    /// 'posts', that is declared in 'data()', will hold the data's response.
                    
                    /// Side note : The WP API only sends 10 objects by default,
                    /// if it isn't enough, it has to be changed in the back-end.
                    this.posts = response.data;
                }
            )
        }
    }
</script>

<style scoped>

    .main-title
    {
        text-align: center;
        font-size: 25px;
        font-weight: 500;
        margin-bottom: 15px;
    }

    .main-vert-sep
    {
        display: none
    }

    @media (min-width: 768px)
    {
        main
        {
            position: relative;
        }

        .main-vertsep
        {
            display: block !important;
            height: calc(100% - 45px);
            width: 2px;
            left: 0;
            right: 0;
            margin: auto;
            position: absolute;
        }

        .main-grid
        {
            display: grid;
            grid-template-columns: [col-start] 1fr [col1] 1fr [col-end];
        }

        .post
        {
            padding: 0 10px;
        }

        .post-sep-last
        {
            display: none !important;
        }
    }

</style>