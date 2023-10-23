export default {
	LOGIN(state: any, payload: any) {
		state.employeeName = payload.employee_name;
		state.employeeEmail = payload.employee_email;
		state.employeeRoles = payload.roles;
		state.employeeId = payload.id;
	},
};
