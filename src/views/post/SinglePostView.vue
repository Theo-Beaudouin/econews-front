<template>
    <HeaderLayout />
    <SinglePostLayout />
    <FooterLayout />
</template>

<script>
    import HeaderLayout from '@/components/template/HeaderLayout.vue'
    import FooterLayout from '@/components/template/FooterLayout.vue'
    import SinglePostLayout from '@/components/post/SinglePostLayout.vue'

    export default {
        components:
        {
            HeaderLayout,
            FooterLayout,
            SinglePostLayout
        }
    }
</script>