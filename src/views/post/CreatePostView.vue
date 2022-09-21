<template>
    <HeaderLayout />
    <CreateFormLayout />
    <FooterLayout />
</template>

<script>
    import HeaderLayout from '@/components/template/HeaderLayout.vue'
    import FooterLayout from '@/components/template/FooterLayout.vue'
    import CreateFormLayout from '@/components/post/CreateFormLayout.vue'

    export default
    {
        components:
        {
            HeaderLayout,
            FooterLayout,
            CreateFormLayout
        }
    }

</script>