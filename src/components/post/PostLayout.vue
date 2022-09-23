<template>
    <main>
        <h3 class="main-title">Recent</h3>
        <hr class="main-vertsep">

        <div class="main-grid">
            <div class="post">
                <h2 class="post-title">Post title</h2>
                <hr class="post-insep">
                <img class="post-img" src="@/assets/placeholder_media.png" alt="placeholder media">
                <p class="post-excerpt">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Odit commodi delectus accusamus eius perferendis ducimus cumque iure vel!
                    Exercitationem quis tenetur quas corporis necessitatibus itaque dolores reiciendis modi, fuga molestiae.
                </p>
                <div class="post-secondary">
                    <p class="post-detail">
                        <i class="fa-regular fa-clock"></i>
                        03/25/2020
                    </p>
                    <p class="post-detail">
                        <i class="fa-regular fa-user"></i>
                        Username
                    </p>
                </div>
                
                <!--
                    <slot> will allow to put, at this specific location,
                    anything we want when calling the component.
                -->
                <slot></slot>

                <hr>
            </div>
        </div>

    </main>
</template>

<script>
    /// Import the service created for the posts
    import PostsService from '@/services/PostsService.js'

    export default {
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
                    /// The data from the response is slice to only receive 10 objects
                    
                    /// Side note : The WP API only sends 10 objects by default,
                    /// if it isn't enough, it has to be changed in the back-end.
                    this.posts = response.data.slice(0, 10);
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