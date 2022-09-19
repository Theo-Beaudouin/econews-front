<template>
    <main>

        <div class="cat-ctn">
            <hr class="cat-sep">
            <h3 class="cat-title">Category</h3>
            <hr class="cat-sep">
            <ul class="subcat-list">
                <li class="subcat-item">Subcategory</li>
                <li class="subcat-item">Subcategory</li>
                <li class="subcat-item">Subcategory</li>
                <li class="subcat-item">Subcategory</li>
                <li class="subcat-item">Subcategory</li>
            </ul>
        </div>

        <div class="cat-ctn">
            <hr class="cat-sep">
            <h3 class="cat-title">Category</h3>
            <hr class="cat-sep">
            <ul class="subcat-list">
                <li class="subcat-item">Subcategory</li>
                <li class="subcat-item">Subcategory</li>
                <li class="subcat-item">Subcategory</li>
                <li class="subcat-item">Subcategory</li>
                <li class="subcat-item">Subcategory</li>
            </ul>
        </div>

        <div class="cat-ctn">
            <hr class="cat-sep">
            <h3 class="cat-title">Category</h3>
            <hr class="cat-sep">
            <ul class="subcat-list">
                <li class="subcat-item">Subcategory</li>
                <li class="subcat-item">Subcategory</li>
                <li class="subcat-item">Subcategory</li>
                <li class="subcat-item">Subcategory</li>
                <li class="subcat-item">Subcategory</li>
            </ul>
        </div>

        <div class="cat-ctn">
            <hr class="cat-sep">
            <h3 class="cat-title">Category</h3>
            <hr class="cat-sep">
            <ul class="subcat-list">
                <li class="subcat-item">Subcategory</li>
                <li class="subcat-item">Subcategory</li>
                <li class="subcat-item">Subcategory</li>
                <li class="subcat-item">Subcategory</li>
                <li class="subcat-item">Subcategory</li>
            </ul>
        </div>

        <div class="cat-ctn">
            <hr class="cat-sep">
            <h3 class="cat-title">Category</h3>
            <hr class="cat-sep">
            <ul class="subcat-list">
                <li class="subcat-item">Subcategory</li>
                <li class="subcat-item">Subcategory</li>
                <li class="subcat-item">Subcategory</li>
                <li class="subcat-item">Subcategory</li>
                <li class="subcat-item">Subcategory</li>
            </ul>
        </div>

        <div class="cat-ctn">
            <hr class="cat-sep">
            <h3 class="cat-title">Category</h3>
            <hr class="cat-sep">
            <ul class="subcat-list">
                <li class="subcat-item">Subcategory</li>
                <li class="subcat-item">Subcategory</li>
                <li class="subcat-item">Subcategory</li>
                <li class="subcat-item">Subcategory</li>
                <li class="subcat-item">Subcategory</li>
            </ul>
        </div>

    </main>
</template>

<script>

</script>

<style scoped>

    .cat-ctn
    {
        padding: 10px;
    }

    .cat-title
    {
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        margin: 15px 0;
    }

    .cat-sep
    {
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        background-color: #ffde59;
    }

    .subcat-list
    {
        list-style: none;
        text-align: center;
    }

    .subcat-item
    {
        padding: 5px;
    }

    .subcat-item:hover
    {
        color: #ffde59;
        text-shadow: 1px 1px 3px #000;
        font-weight: 700;
        animation: weightzoom 0.2s ease-out;
        text-decoration: underline;
        cursor: pointer;
    }

    @keyframes weightzoom
    {
        from { font-weight: 400; }
        to{ font-weight: 700; }
    }

    @media (max-width: 1024px)
    {
        .subcat-item
        {
            padding: 8px;
        }
    }

    @media (min-width: 768px)
    {
        main
        {
            display: grid;
            grid-template-columns: [col-start] 1fr [coline-1] 1fr [coline-2] 1fr [col-end];
            gap: 50px;
        }
    }
</style>