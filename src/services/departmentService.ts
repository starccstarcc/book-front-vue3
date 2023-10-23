import { ApiService } from "./api";

export default {
	getDepartments: (id: string) => {
		const paramenter = id ? { id } : {};
		return ApiService.get(`/departments`, { params: paramenter });
	},

	createNewDepartment: (data: object) => {
		return ApiService.post(`/department/create`, data);
	},
};
