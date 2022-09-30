<template>
    <div class="post-secondary">
        <div class="post-detail">
            <i class="fa-regular fa-clock"></i>
            <p v-html="date"></p>
        </div>
        <div class="post-detail">
            <i class="fa-regular fa-user"></i>
            <p v-html="author"></p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            date: String,
            author: String
        }
    }
</script>

<style scoped>

    .post-secondary
    {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .post-detail
    {
        font-size: 15px;
        display: inline-flex;
        gap: 5px;
        align-items: center;
    }

</style>