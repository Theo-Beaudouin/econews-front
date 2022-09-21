<template>
    <HeaderLayout />

    <h4 class="main-title">User account</h4>

    <SignupFormLayout>
        <!-- <div> will be in the <slot> position declared in the SignupFormLayout component-->
        <div class="btn-ctn">
            <button class="btn">Edit</button>
            <button class="btn btn-delete">Delete account</button>
        </div>
    </SignupFormLayout>

    <hr>

    <PostLayout>
        <!-- <div> will be in the <slot> position declared in the PostLayout component-->
        <div class="btn-ctn">
            <button class="btn">Edit</button>
            <button class="btn btn-delete">Delete</button>
        </div>
    </PostLayout>

    <FooterLayout />
</template>

<script>
    import HeaderLayout from '@/components/template/HeaderLayout.vue'
    import FooterLayout from '@/components/template/FooterLayout.vue'
    import SignupFormLayout from '@/components/access/SignupFormLayout.vue'
    import PostLayout from '@/components/post/PostLayout.vue'

    export default
    {
        components:
        {
            HeaderLayout,
            FooterLayout,
            SignupFormLayout,
            PostLayout
        }
    }
</script>

<style scoped>

    .main-title
    {
        text-align: center;
        font-size: 25px;
        font-weight: 500;
        margin: 15px 0;
    }

    hr
    {
        border: 1px solid grey;
        width: 1024px;
        margin: 30px auto 15px auto;
    }

</style>