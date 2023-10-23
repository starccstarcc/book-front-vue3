export default {
	GET_USERS(state: any, payload: any) {
		state.Users = payload;
	},

	GET_PAGINATED_USERS(state: any, payload: any) {
		state.Users = payload.findUserQuery;
		state.countUsers = payload.count;
	},

	REMOVE_USER(state: any, payload: any) {
		state.Users = payload;
	},

	LOGIN(state: any, payload: any) {
		state.userName = payload.name;
		state.userEmail = payload.email;
		state.userId = payload.id;
	},
};
