<template>
    <HeaderLayout />
    <ListLayout />
    <FooterLayout />
</template>

<script>
    import HeaderLayout from '@/components/template/HeaderLayout.vue'
    import FooterLayout from '@/components/template/FooterLayout.vue'
    import ListLayout from '@/components/post/ListLayout.vue'

    export default {
        components:
        {
            HeaderLayout,
            FooterLayout,
            ListLayout
        }
    }
</script>