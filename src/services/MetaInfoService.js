import axios from 'axios';

axios.defaults.baseURL = "https://moviesbythesea.pythonanywhere.com";
axios.defaults.headers = { 'Auth': 'mbts@admin-42' };

export async function getLatestFilm() {
    try {
        const response = await axios.get("/latest")
        return response.data
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function getTop30Films() {
    try {
        const response = await axios.get("/top30")
        return response.data
    } catch (error) {
        console.log(error);
        return [];
    }
}
