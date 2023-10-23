import employeeService from "@/services/employeeService";
import jwtDecode from "jwt-decode";

export default {
	async login({ commit }: any, data: object) {
		await employeeService.login(data).then((res) => {
			const validToken = res.data.token;

			if (validToken) {
				localStorage.setItem("token", validToken);
				const decode = jwtDecode(validToken);

				commit("LOGIN", decode);

				location.replace("/app/dashboard");
			}
		});
	},
};
