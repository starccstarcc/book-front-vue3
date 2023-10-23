import { ApiService } from "./api";

export default {
	login: (data: object) => {
		return ApiService.post("/login", data);
	},
};
