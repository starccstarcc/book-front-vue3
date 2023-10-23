import { ApiService } from "./api";

export default {
	getAuthors: () => {
		return ApiService.get(`/authors`);
	},
};
