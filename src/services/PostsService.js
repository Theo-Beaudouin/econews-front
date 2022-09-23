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
    /*
     * 'findAll()' will get every posts.
     * This is a test method.
     */
    findAll() {
        return apiClient.get(`/posts?_embed`);
    }
}