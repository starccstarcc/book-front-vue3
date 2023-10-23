import { ApiService } from "./api";

export default {
	createUser: (data: object) => {
		return ApiService.post("/user/register", data);
	},

	getUsers: () => {
		return ApiService.get("/users");
	},

	getPaginatedUsers: () => {
		return ApiService.get("/users/paginated");
	},

	removeUser: (id: string) => {
		console.log(id);
		return ApiService.delete(`/user/${id}`);
	},

	login: (data: object) => {
		return ApiService.post("/usuariosauth", data);
	},
};
