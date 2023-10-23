import userServices from "@/services/userServices";
import jwtDecode from "jwt-decode";

export default {
	async getAllUsers({ commit }: any, data: object) {
		await userServices.getUsers().then((res) => {
			commit("GET_USERS", res.data.user);
		});
	},

	async getAllPaginatedUsers({ commit }: any) {
		await userServices.getPaginatedUsers().then((res) => {
			commit("GET_PAGINATED_USERS", res.data);
		});
	},

	async removeUser({ commit }: any, data: any) {
		await userServices.removeUser(data);
	},

	async login(context: any, data: object) {
		await userServices.login(data).then((res) => {
			const validToken = res.data.token;

			if (validToken) {
				localStorage.setItem("token", validToken);
				const decode = jwtDecode(validToken);

				context.commit("LOGIN", decode);

				location.replace("/app/dashboard");
			}
		});
	},
};
