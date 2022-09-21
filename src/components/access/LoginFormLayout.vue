<template>
    <form class="main-form" method="get" name="login">
        <label for="username">Username</label>
        <input type="text" id="username" name="username">

        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="*****">
        <p class="form-forgot">Forgotten password ?</p>

        <button class="btn">Log in</button>
    </form>
</template>

<script></script>

<style scoped>

    .form-forgot
    {
        font-size: 17px;
        color: #ffde59;
        cursor: pointer;
        align-self: flex-end;
    }

    .form-forgot:hover
    {
        text-decoration: underline;
    }

</style>