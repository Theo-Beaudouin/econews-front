<template>
    <HeaderLayout />
    <PostListLayout />
    <FooterLayout />
</template>

<script>
    import HeaderLayout from '@/components/template/HeaderLayout.vue'
    import FooterLayout from '@/components/template/FooterLayout.vue'
    import PostListLayout from '@/components/post/PostListLayout.vue'

    export default {
        components:
        {
            HeaderLayout,
            FooterLayout,
            PostListLayout
        }
    }
</script>