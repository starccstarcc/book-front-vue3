import { ApiService } from "./api";

export default {
	createBook: (data: object) => {
		return ApiService.post(`/book/create`, data);
	},

	getPaginatedBooks: () => {
		return ApiService.get("/books/paginated");
	},

	removeBook: (id: string) => {
		return ApiService.delete(`/books/${id}`);
	},
};
