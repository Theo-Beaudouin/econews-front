<template>
    <footer>
        
        <div class="footer-ctn">
            <div class="footer-input">
                <label for="searchbar"></label>
                <input type="text" id="searchbar" name="searchbar" placeholder="Search"  />
            </div>
            <hr>

            <div class="footer-input">
                <label for="newsletter">Subscribe to our newsletters</label>
                <input type="text" id="newsletter" name="newsletter" placeholder="Email" />
            </div>
            <hr>

            <div class="footer-links">
                <ul class="links-list">
                    <li class="links-item">
                        <a class="links-anc" href="#">Terms of use</a>
                    </li>
                    <li class="links-item">
                        <a class="links-anc" href="#">Privacy Policy</a>
                    </li>
                    <li class="links-item">
                        <a class="links-anc" href="#">Sitemap</a>
                    </li>
                    <li class="links-item">
                        <a class="links-anc" href="#">About us</a>
                    </li>
                    <li class="links-item">
                        <a class="links-anc" href="#">Manage Cookies</a>
                    </li>
                </ul>
            </div>
        </div>

    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
    footer
    {
        background-color: #043419;
        color: #fff;
        border-top: solid 2px #ffde59;
        border-bottom: solid 2px #ffde59;
        padding: 20px;
    }

    .footer-input
    {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .footer-input > input
    {
        background-color: #fff;
        border-radius: 2px;
        height: 35px;
        padding: 5px;
        width: 95%;
    }

    .footer-input > label
    {
        margin-bottom: 5px;
    }

    .footer-links
    {
        width: 95%;
    }

    .links-list
    {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
        list-style-type: none;
        
    }

    .links-anc:hover
    {
        color: #ffde59;
    }

    .links-anc
    {
        color: #fff;
        text-decoration: none;
        font-size: 17px;
    }

    footer > hr
    {
        margin: 20px 0 20px 0 !important;
    }

    @media (min-width: 320px) and (max-width: 767px)
    {
        footer
        {
            margin-bottom: 50px;
        }
    }

    @media (min-width: 1024px)
    {
        .footer-ctn
        {
            width: 1024px;
            margin: auto;
        }  
    }
</style>