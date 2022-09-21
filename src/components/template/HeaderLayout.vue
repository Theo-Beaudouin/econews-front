<template>
    <header>
        <div class="header-ctn">
            <i class="fa-solid fa-magnifying-glass"></i>
            <img class="header-logo" src="@/assets/logo.png" alt="Circular econews logo depicting a golden tree with a green background">
            <p class="header-menu">
                Username
                <i class="fa-solid fa-circle-arrow-up"></i>
            </p>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
    header
    {
        background-color: #043419;
        color: #fff;
        position: relative;
    }

    .header-ctn
    {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        padding: 0 10px 0 10px;
    }

    .header-logo
    {
        position: absolute;
        width: 40px;
        left: 0;
        right: 0;
        margin: auto;
    }

    .header-menu
    {
        font-weight: 500;
        font-size: 15px;
    }

    @media (min-width: 320px) and (max-width: 767px)
    {
        header
        {
            position: fixed !important;
            bottom: 0;
            width: 100%;
        }
    }

    @media (min-width: 1024px)
    {
        .header-ctn
        {
            width: 1024px;
            margin: auto;
        }  
    }
</style>