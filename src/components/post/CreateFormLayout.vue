<template>
    <main>
        <h4 class="main-title">Create a post</h4>

        <form class="main-form" method="post" name="post-create">
            <label for="title">Title</label>
            <input type="text" id="title" name="title">

            <label for="snippet">Snippet</label>
            <textarea id="snippet" name="snippet"></textarea>
            <p class="snippet-limit">255 characters max</p>

            <label for="content">Content</label>
            <textarea id="content" name="content"></textarea>

            <label for="category">Category</label>
            <select name="category" id="category">
                <option value="category1">Category1</option>
                <option value="category2">Category2</option>
                <option value="category3">Category3</option>
                <option value="category4">Category4</option>
                <option value="category5">Category5</option>
                <option value="category6">Category6</option>
            </select>

            <label for="subcategory">Subcategory</label>
            <select name="subcategory" id="subcategory">
                <option value="subcategory1">Subcategory1</option>
                <option value="subcategory2">Subcategory2</option>
                <option value="subcategory3">Subcategory3</option>
                <option value="subcategory4">Subcategory4</option>
                <option value="subcategory5">Subcategory5</option>
                <option value="subcategory6">Subcategory6</option>
            </select>

            <label for="thumbnail">Thumbnail</label>
            <input type="file" id="thumbnail" name="thumbnail">

            <label for="status">Status</label>
            <select name="status" id="status">
                <option value="published">Published</option>
                <option value="draft">Draft</option>
                <option value="privated">Private</option>
            </select>

            <button class="form-btn">Create</button>
        </form>
    </main>
</template>

<script>

</script>

<style scoped>
    main
    {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .main-title
    {
        text-align: center;
        font-size: 20px;
        font-weight: 500;
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

    .main-form > input,select,textarea
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

    .main-form > textarea
    {
        height: 100px;
        resize: vertical;
    }

    .snippet-limit
    {
        font-size: 15px;
        color: #ffde59;
        align-self: flex-end;
    }

    #thumbnail
    {
        background-color: #043419;
        border: none !important;
        padding: 5px 0;
    }

    .main-form > label
    {
        align-self: flex-start;
        font-size: 17px;
    }

    .form-btn
    {
        background-color: #fff;
        color: #000;
        padding: 15px;
        border-radius: 5px;
        margin: 10px 0 0 0;
        display: block;
        align-self: center;
    }

    .form-btn:hover
    {
        background-color: #ffde59;
        cursor: pointer;
    }

</style>