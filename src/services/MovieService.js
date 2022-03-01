import axios from 'axios';

axios.defaults.baseURL = "https://moviesbythesea.pythonanywhere.com";
axios.defaults.headers = { 'Auth': 'mbts@admin-42' };

export async function callAPI(endpoint) {
    try {
        const response = await axios.get(`/${endpoint}`);
        return response.data['result']
    } catch (error) {
        console.log(error);
        return [];
    }
}