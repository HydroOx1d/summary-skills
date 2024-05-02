import axios from "axios";
import { LOCAL_STORAGE_USER_KEY } from "shared/constants/localStorage";


export const $api = axios.create({
	baseURL: __API__
});

$api.interceptors.request.use((config) => {
	config.headers.Authorization = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
	return config;
});