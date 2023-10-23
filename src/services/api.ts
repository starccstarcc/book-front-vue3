import axios from "axios";
import type { AxiosInstance } from "axios";
// environments
const API_URL = import.meta.env.VITE_API_URL;
const API_EXTERNAL_URL = import.meta.env.VITE_API_EXT_URI;

export const ApiService: AxiosInstance = axios.create({
	baseURL: API_URL,
	headers: {
		Authorization: `Bearer ${localStorage.getItem("token")}`,
		"Content-Type": "application/json",
	},
});

export const ApiWeather: AxiosInstance = axios.create({
	baseURL: API_EXTERNAL_URL,
});
