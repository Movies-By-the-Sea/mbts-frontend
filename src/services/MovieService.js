import axios from 'axios';

axios.defaults.baseURL = "https://moviesbythesea.pythonanywhere.com";
axios.defaults.headers = { 'Auth': 'mbts@admin-42' };

export async function getInternationalFilms() {
    try {
        const response = await axios.get("/foreign");
        return response.data['result']
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function getHorrorFilms() {
    try {
        const response = await axios.get("/horror");
        return response.data['result']
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function getMetaFilms() {
    try {
        const response = await axios.get("/meta");
        return response.data['result']
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function getTrueStoryFilms() {
    try {
        const response = await axios.get("/true-story");
        return response.data['result']
    } catch (error) {
        console.log(error);
        return [];
    }
}