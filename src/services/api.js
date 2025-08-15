// Base da URL: https://api.themoviedb.org/3/
//Chave da API: 28fc232cc001c31e8a031f419d0a14ca

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '28fc232cc001c31e8a031f419d0a14ca',
        language: 'pt-BR',
    },
});

export default api;
