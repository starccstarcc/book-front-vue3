import departmentService from "@/services/departmentService";

export default {
	async getAllDepartments({ commit }: any, data: string) {
		await departmentService.getDepartments(data).then((res) => {
			console.log(res.data);

			commit("GET_DEPARTMENTS", res.data);
		});
	},
};
