<template>
	<form @submit.prevent="$emit('createEmployee', employee)">
		<div class="header-form-employee">
			<Icon icon="carbon:user-data" />
			<h2>Criar novo colaborador</h2>
		</div>
		<div class="form-fields">
			<div class="inputs-fields">
				<div>
					<p>Preencha as informacoes de acordo com o solicatado nos campos</p>
					<p>Informacoes gerais</p>
					<div class="m-bottom">
						<BaseInput
							class="input-styles"
							v-model="employee.register"
							placeholder="Insira a matricula do colaborador"
						/>
					</div>
					<div class="m-bottom">
						<BaseInput
							class="input-styles"
							v-model="employee.employee_name"
							placeholder="Nome completo"
						/>
					</div>
					<div class="m-bottom">
						<BaseInput
							class="input-styles"
							v-model="employee.employee_email"
							placeholder="E-mail do colaborador"
						/>
					</div>
					<div class="m-bottom">
						<BaseInput
							class="input-styles"
							v-model="employee.roles"
							placeholder="Funcao do colaborador"
						/>
					</div>
					<div class="m-bottom slide-select">
						<div class="alternative-select-style">
							<select name="department" v-model="employee.department">
								<option value="-- Selecione um setor --" disabled selected>
									-- Selecione um setor --
								</option>
								<option
									v-for="dept in departments"
									:key="dept._id"
									:value="dept._id"
								>
									{{ dept.dept_name }}
								</option>
							</select>
						</div>
						<div
							@click="$emit('actions')"
							class="info-btn"
							:title="'Listar todos os setores'"
						>
							<span>
								<Icon icon="carbon:information" />
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="m-top">
			<MainButton
				type="submit"
				class="alternativeButton"
				:title_btn="'Cadastrar'"
			/>
		</div>
	</form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
import type { IEmployeeFields } from "@/interfaces/Iemployee";
import BaseInput from "@/components/Inputs/BaseInput.vue";
import MainButton from "@/components/Buttons/MainButton.vue";

export default defineComponent({
	name: "FormEmployee",
	components: { Icon, BaseInput, MainButton },
	emits: ["createEmployee", "actions"],
	data() {
		return {
			employee: {} as IEmployeeFields,
			departments: this.$store.state.departmentStore.dept_name,
		};
	},
	methods: {},
});
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/mixins/default-styles/mixins";
form {
	padding: 30px;
	.header-form-employee {
		text-align: center;
		cursor: default;

		svg {
			font-size: 100px;
			width: 100%;
		}

		h2 {
			margin: 20px 0 30px;
		}
	}

	.inputs-fields {
		p {
			margin: 20px 0 10px 0;
		}

		.m-bottom {
			margin-bottom: 7px;

			.input-styles {
				border: 1px solid #c6c1c1;
				width: 100%;
			}

			.alternative-select-style {
				@include alternative-style(40px);

				select {
					font-size: 16px;
					width: 100%;
					height: 100%;
					border: none;
				}
			}

			.info-btn {
				border-radius: 8px;
				background-image: linear-gradient(#cecece, #e4e4e4);
				width: 10%;
				margin-left: 7px;
				box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3);
				span {
					width: 100%;
					height: 100%;
					display: flex;
					justify-content: center;
					align-items: center;

					svg {
						font-size: 20px;
						font-weight: 700;
					}
				}

				&:active {
					background-image: linear-gradient(#e4e4e4, #cecece);
				}
			}
		}

		.slide-select {
			display: flex;
		}
	}
}
</style>
