<template>
    <HeaderLayout />
    <CategoryLayout />
    <FooterLayout />
</template>

<script>
    import HeaderLayout from '@/components/template/HeaderLayout.vue'
    import FooterLayout from '@/components/template/FooterLayout.vue'
    import CategoryLayout from '@/components/CategoryLayout.vue'

    export default
    {
        components:
        {
            HeaderLayout,
            FooterLayout,
            CategoryLayout
        }
    }

</script>