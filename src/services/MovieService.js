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

export async function getAnimatedFilms() {
    try {
        const response = await axios.get("/animated");
        return response.data['result']
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function getRomanticFilms() {
    try {
        const response = await axios.get("/romance");
        return response.data['result']
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function getSciFiFilms() {
    try {
        const response = await axios.get("/sci-fi");
        return response.data['result']
    } catch (error) {
        console.log(error);
        return [];
    }
}