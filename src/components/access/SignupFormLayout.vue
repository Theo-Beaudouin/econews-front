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