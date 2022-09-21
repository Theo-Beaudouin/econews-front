<template>
    <HeaderLayout />
    <FormLayout />
    <FooterLayout />
</template>

<script>
    import HeaderLayout from '@/components/template/HeaderLayout.vue'
    import FooterLayout from '@/components/template/FooterLayout.vue'
    import FormLayout from '@/components/access/FormLayout.vue'

    export default
    {
        components:
        {
            HeaderLayout,
            FooterLayout,
            FormLayout
        }
    }

</script>

<style scoped>

</style>