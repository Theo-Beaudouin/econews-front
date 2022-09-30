<template>
    <header>
        <div class="header-ctn">
            <i class="fa-solid fa-magnifying-glass"></i>
            <img class="header-logo" src="@/assets/logo.png" alt="Circular econews logo depicting a golden tree with a green background">
            <div class="header-menu">
                <p class="menu-title" @click="menuVisible = true">
                    Menu
                    <i class="fa-solid fa-circle-arrow-right"></i>
                </p>
            </div>
        </div>

        <div class="menu-ctn" v-if="menuVisible == true">
            <div class="menu-options-list">
                <router-link :to="{ name: 'userAccount' }" class="options-item">
                    Account
                </router-link>
                <router-link :to="{ name: 'category' }" class="options-item">
                    Categories
                </router-link>
                <router-link :to="{ name: 'createPost' }" class="options-item">
                    Create a post
                </router-link>
                <router-link :to="{ name: 'home' }" class="options-item logout">
                    Log out
                </router-link>
                <i class="fa-regular fa-circle-xmark" @click="menuVisible = false"></i>
            </div>
        </div>
    </header>
</template>

<script>
    export default
    {
        data()
        {
            return {
                menuVisible: false
            }
        }
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

/* ---------- Burger menu ---------- */

    .menu-title
    {
        font-weight: 500;
        font-size: 15px;
        animation: rotate-off 0.5s ease-in;
    }

    .menu-title:hover
    {
        color: #ffde59;
        text-decoration: underline;
        cursor: pointer;
    }

    /*
        .menu-options-list is here to counter the background-color of the <header>.
        I do not want a css attribute of "display: absolute",
        the menu is part of the header, his 100% width and green background color.
        This is why the only reason this class exist
        is for having a white background on the sides of the menu.
    */

    .menu-ctn
    {
        background-color: #fff;
    }

    .options-item
    {
        color: #fff;
        font-weight: 500;
        font-size: 17px;
        text-decoration: none;
    }

    .options-item:hover
    {
        color: #ffde59;
        text-decoration: underline;
    }

    .logout:hover
    {
        color: #fe4646;
    }

    .fa-circle-xmark
    {
        color: #ffde59;
        font-size: 25px;
    }

    .fa-circle-xmark:hover
    {
        color: #fe4646;
        font-size: 25px;
        cursor: pointer;
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

        .menu-options-list
        {
            border-top: solid 1px #ffde59;
            background-color: #043419;
            width: 1024px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 20px;
            margin: auto;
            padding: 10px;
            border-radius: 0 0 10px 10px;
        }
    }
</style>