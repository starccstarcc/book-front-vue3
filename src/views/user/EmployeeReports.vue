<template>
	<div class="overview">
		<div class="flex-view">
			<div class="form-emplyoee">
				<FormEmployee
					:onCreateEmployee="createEmployee"
					:onActions="callListDepartments"
				/>
			</div>
			<div class="employee-table">
				<SearchBar
					:search_name="'Busque um colaborador'"
					:hiddenEventBtn="false"
					@search="searchEmployee"
				/>
				<div class="table">
					<ul>
						<CardUserList />
					</ul>
				</div>
			</div>
		</div>
		<ListDepartment
			v-if="hiddenListDept"
			:eventType="eventType"
			:callDeptInput="callDeptInput"
			:confirm="confirm"
			:hiddenNewDepartment="hiddenNewDepartment"
			:onCreateNewDept="createDept"
			:onEventHandler="eventHandler"
			:onHiddenForm="hiddenList"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormEmployee from "@/components/Forms/Employees/index.vue";
import SearchBar from "@/components/SearchBar/index.vue";
import ListDepartment from "@/components/Department/index.vue";
import type { IEmployeeFields } from "@/interfaces/Iemployee";
import departmentService from "@/services/departmentService";
import CardUserList from "@/components/Cards/User/CardUserList.vue";

export default defineComponent({
	name: "EmployeeReports",
	components: { FormEmployee, SearchBar, ListDepartment, CardUserList },
	data() {
		return {
			hiddenListDept: false,
			eventType: "Criar setor",
			hiddenNewDepartment: false,
			confirm: false,
		};
	},
	methods: {
		callListDepartments() {
			this.hiddenListDept = true;
		},

		hiddenList() {
			this.hiddenListDept = false;
		},

		createEmployee(employee: IEmployeeFields) {
			console.log(employee);
		},

		searchEmployee() {
			console.log("teste");
		},

		callDeptInput() {
			this.hiddenNewDepartment = true;
			this.eventType = "Confirmar novo setor";
			this.confirm = true;
		},

		async createDept(department: object): Promise<void> {
			console.log(department);
			await departmentService.createNewDepartment(department).then((res) => {
				if (res.status === 201) {
					console.log("sucesso");
				}
			});
		},

		eventHandler() {
			this.eventType = "Criar setor";
			if (this.hiddenNewDepartment === true) {
				this.hiddenNewDepartment = false;

				this.createDept({ department: "" });
			} else {
				this.callDeptInput();
			}
		},
	},
});
</script>

<style lang="scss" scoped>
.flex-view {
	display: flex;
	height: 100%;

	.form-emplyoee {
		width: 35%;
		background: #fff;
		border-radius: 8px;
	}

	.employee-table {
		width: 65%;
		margin-left: 10px;
	}
}
</style>
