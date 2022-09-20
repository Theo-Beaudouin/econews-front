<template>
    <HeaderLayout />
    <PostLayout />
    <FooterLayout />
</template>

<script>
    import HeaderLayout from '@/components/template/HeaderLayout.vue'
    import FooterLayout from '@/components/template/FooterLayout.vue'
    import PostLayout from '@/components/post/PostLayout.vue'

    export default {
        components:
        {
            HeaderLayout,
            FooterLayout,
            PostLayout
        }
    }
</script>