<template>
	<div class="list-container">
		<Icon icon="carbon:close" @click="$emit('hiddenForm')" />
		<h3>Setores disponíveis na sua compania</h3>
		<ul>
			<li v-for="department in departments" :key="department._id">
				{{ department.dept_name }}
			</li>
		</ul>
		<form @submit.prevent="$emit('createNewDept', department)">
			<BaseInput
				v-if="hiddenNewDepartment"
				class="input-styles"
				v-model="department.dept_name"
				placeholder="Insira um novo setor"
			/>
		</form>
		<MainButton
			@click="$emit('eventHandler')"
			:title_btn="eventType"
			class="inactive-button"
			:class="{ alternativeButton: confirm }"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
import MainButton from "../Buttons/MainButton.vue";
import BaseInput from "../Inputs/BaseInput.vue";

export default defineComponent({
	name: "ListDepartment",
	components: { BaseInput, Icon, MainButton },
	emits: ["createNewDept", "hiddenForm", "eventHandler"],
	props: {
		eventType: {
			type: String,
			required: true,
		},
		hiddenNewDepartment: {
			type: Boolean,
		},
		confirm: {
			type: Boolean,
		},
		callDeptInput: {
			type: Function,
		},
	},
	data() {
		return {
			departments: this.$store.state.departmentStore.dept_name,
			department: {
				dept_name: "",
			},
		};
	},

	methods: {
		async listDepartments() {
			await this.$store.dispatch(
				"departmentStore/getAllDepartments",
				this.departments
			);
		},
	},

	mounted() {
		this.listDepartments();
	},
});
</script>

<style lang="scss">
.list-container {
	position: fixed;
	z-index: 2001;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 500px;
	border-radius: 8px;
	background-color: #fff;
	filter: drop-shadow(-2px 2px 10px rgba(0, 0, 0, 0.322));
	padding: 30px;

	svg {
		position: absolute;
		z-index: 2002;
		top: 20px;
		right: 20px;
		font-size: 27px;
	}

	ul {
		list-style: disc;
		margin: 25px 20px 30px;

		li {
			margin: 10px 0;
		}
	}

	.input-styles {
		border: 1px solid #c6c1c1;
		width: 100%;
	}
}
</style>
