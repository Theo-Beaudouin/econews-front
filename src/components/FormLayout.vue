<template>
    <main>
        <div class="main-tab">
            <p class="tab-options" @click="isTabActive('login')"  :class="{ tabActive: loginState }">
                <i class="fa-solid fa-arrow-right-to-bracket"></i>
                Log in
            </p>
            <p class="tab-options" @click="isTabActive('signup')" :class="{ tabActive: signupState }">
                <i class="fa-solid fa-user-plus"></i>
                Sign up
            </p>
        </div>

        <form class="main-form" method="get" name="login" v-if="loginState">
            <label for="username">Username</label>
            <input type="text" id="username" name="username">

            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="*****">
            <p class="form-forgot">Forgotten password ?</p>

            <button class="btn">Log in</button>
        </form>

        <form class="main-form" method="get" name="signup" v-if="signupState">
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

            <button class="btn">Sign up</button>
        </form>
    </main>
</template>

<script>

    export default
    {
        data()
        {
            return {
                loginState: true,
                signupState: false
            }
        },
        methods:
        {
            isTabActive(tab) {
                if(tab == 'login') {
                    this.loginState = true
                    this.signupState = false
                }
                else if (tab == 'signup')  {
                    this.loginState = false
                    this.signupState = true
                }
            }
        }
    }

</script>

<style scoped>
    main
    {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .main-tab
    {
        align-self: flex-start;
    }

    .tab-options
    {
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 20px;
        padding-left: 10px;
    }

    .tab-options:hover
    {
        cursor: pointer;
        text-decoration: underline #ffde59;
        border-left: #ffde59 solid 3px;
    }

    .tabActive
    {
        color: #ffde59;
        border-left: #ffde59 solid 3px;
    }

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