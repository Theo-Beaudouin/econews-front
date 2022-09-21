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

        <LoginFormLayout v-if="loginState"/>

        <SignupFormLayout v-if="signupState">
            <!-- <button> will be in the <slot> position declared in the SignupFormLayout component-->
            <button class="btn">Sign up</button>
        </SignupFormLayout>
    </main>
</template>

<script>
    import LoginFormLayout from '@/components/access/LoginFormLayout.vue'
    import SignupFormLayout from '@/components/access/SignupFormLayout.vue'

    export default
    {
        data()
        {
            return {
                loginState: true,
                signupState: false
            }
        },
        components:
        {
            LoginFormLayout,
            SignupFormLayout
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
</style>