<template>
	<form @submit.prevent="$emit('handleSubmit', employee)">
		<label for="email">E-mail</label>
		<div class="input-style">
			<BaseInput
				id="email"
				v-model="employee.employee_email"
				placeholder="meuemail@devbooks.com"
			/>
		</div>
		<label for="password">Senha</label>
		<div class="input-style">
			<BaseInput
				id="password"
				v-model="employee.password"
				:hiddenRevellingPassword="true"
				placeholder="**********"
			/>
		</div>
		<MainButton type="submit" :title_btn="'Login'" class="btn-style-success" />
	</form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainButton from "../Buttons/MainButton.vue";
import BaseInput from "../Inputs/BaseInput.vue";

export default defineComponent({
	name: "FormLogin",
	components: { MainButton, BaseInput },
	emits: ["handleSubmit"],
	data() {
		return {
			inputType: "password",
			employee: {
				employee_email: "",
				password: "",
			},
		};
	},
});
</script>
