<template>
    <div>
        <HeaderLayout />
        <PostLayout />
        <FooterLayout />
    </div>
</template>

<script>
    import HeaderLayout from '@/components/template/HeaderLayout.vue'
    import FooterLayout from '@/components/template/FooterLayout.vue'
    import PostLayout from '@/components/PostLayout.vue'

export default {
    components:
    {
        HeaderLayout,
        FooterLayout,
        PostLayout
    }
}
</script>

<style>

</style>