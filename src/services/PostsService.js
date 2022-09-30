/* Axios documentation : https://github.com/axios/axios#axios-api */

import axios from 'axios'

/*
    'baseURL' = Url of the server that will be re-used for every request
    of the posts service, with relative paths.
    ---
    'timeout' = Time after which the request times out.
    ---
    'headers' = Custom headers.
*/

const apiClient = axios.create({
    baseURL: 'http://econews.local/index.php/wp-json/wp/v2',
    timeout: 10000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {

    // ADDITIONNAL INFORMATIONS :
    // - '?_embed' = Necessary to get embedded ressources that do not show without.
    // - The first global parameter (or meta-parameter) in an url of a Wordpress app always has '?' before it.
    //   If, there is more then 1 parameter, then the subsequent parameters will be declared with '&' before them.

    /*
     * 'findAll()' will get every posts.
     * The Wordpress API will only fetch 10 objects (can be changed on the back-end)
     */
    findAll() {
        return apiClient.get(`/posts?_embed`);
    },

    /*
     * 'find()' will get a post with an id.
     * 'id' is the post id.
     */
    find(postId) {
        return apiClient.get(`/posts/${postId}?_embed`);
    },

    /*
     * 'findByCategory()' will get posts based on their categories.
     * 'id' is the category's id.
     */
    findByCategory(id) {
        return apiClient.get(`/posts?category=${id}&_embed`);
    },
}