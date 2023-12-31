import axios from "axios";
import { LOCAL_STORAGE_USER_KEY } from "shared/constants/localStorage";


export const $api = axios.create({
	baseURL: __API__,
	headers: {
		Authorization: localStorage.getItem(LOCAL_STORAGE_USER_KEY)
	}
});