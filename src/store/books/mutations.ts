export default {
	GET_PAGINATED_BOOKS(state: any, payload: any) {
		state.Books = payload.findBooksQuery;
		state.countBooks = payload.count;
	},

	SET_SUCCESS_MESSAGE(state: any, payload: any) {
		state.successMessage = payload;
	},

	CREATE_BOOK(state: any, payload: any) {
		state.Books = payload;
	},
};
