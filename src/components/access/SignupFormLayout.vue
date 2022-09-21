<template>

    <form class="main-form" method="post" name="signup">
        <label for="email">Email</label>
        <input type="email" id="email" name="email">

        <label for="username">Username</label>
        <input type="text" id="username" name="username">

        <label for="fname">First name</label>
        <input type="text" id="fname" name="fname">

        <label for="lname">Last name</label>
        <input type="text" id="lname" name="lname">

        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="*****">

        <label for="c-password">Confirm Password</label>
        <input type="password" id="c-password" name="c-password" placeholder="*****">

        <!--
            <slot> will allow to put, at this specific location,
            anything we want when calling the component.
        -->
        <slot></slot>
    </form>
</template>

<script></script>

<style scoped>

    .main-form
    {
        background-color: #043419;
        color: #fff;
        padding: 10px;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 500px;
        border-radius: 5px;
        align-self: center;
    }

    .main-form > input
    {
        background-color: #fff;
        border-radius: 5px;
        height: 35px;
        padding: 5px;
        border: solid 1px grey;
        margin: 5px 0;
        width: 100%;
        align-self: flex-start;
    }

    .main-form > label
    {
        align-self: flex-start;
        font-size: 17px;
    }

</style>