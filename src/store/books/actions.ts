import bookService from "@/services/bookService";

export default {
	async createNewBook({ commit }: any, data: object) {
		await bookService.createBook(data).then((res) => {
			if (res.status === 201) {
				localStorage.removeItem("image_id");

				//realizar a implementacao de um getter para watch mode e disparar modal
			}

			commit("CREATE_BOOK", res.data);
		});
	},

	async getPaginatedBooks({ commit }: any): Promise<void> {
		await bookService.getPaginatedBooks().then((res) => {
			commit("GET_PAGINATED_BOOKS", res.data);
		});
	},

	async removeBookItem({ commit }: any, data: string): Promise<void> {
		await bookService.removeBook(data).then((res) => {
			console.log(res);
			commit("SET_SUCCESS_MESSAGE", res.status);
		});
	},
};
