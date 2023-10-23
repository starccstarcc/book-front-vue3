const API_KEY = import.meta.env.VITE_API_KEY;
import { ApiWeather } from "./api";

//tratar dados  para retono dinamico
const lat = -3.895163;
const lng = -38.6856812;
const city = "Fortaleza";
//tentativa de inserir parametro de cidades dinamicamente

export default {
	getWeatherResults: () => {
		return ApiWeather.get(
			`weather?q=${city}&units=metric&appid=${API_KEY}&lang=pt_BR`
		); //lat=${lat}&lon=${lng}&appid=${API_KEY}&lang=pt_BR``);
	},
};
