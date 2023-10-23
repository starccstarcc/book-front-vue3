<template>
	<div class="input-container">
		<input
			v-bind="$attrs"
			v-model="inputValue"
			:type="inputType"
			v-if="!hiddenRevellingPassword ? (inputType = 'text') : 'password'"
			@blur="handleValue"
		/>
		<PasswordRevelling
			@toggle="togglePassword"
			v-if="hiddenRevellingPassword"
			:isPassword="isPasswordVisible"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PasswordRevelling from "../Icons/PasswordRevelling.vue";

export default defineComponent({
	name: "BaseInput",
	components: { PasswordRevelling },
	emits: ["handleValue"],
	props: {
		currentValue: {
			type: String,
		},
		hiddenRevellingPassword: {
			type: Boolean,
		},
	},
	data() {
		return {
			inputType: "password",
			inputValue: "",
		};
	},
	computed: {
		isPasswordVisible(): boolean {
			return this.inputType === "text";
		},
	},
	methods: {
		handleValue(newValue: FocusEvent): void {
			this.$emit("handleValue", newValue);
		},

		togglePassword(): string {
			return (this.inputType = this.isPasswordVisible ? "password" : "text");
		},
	},
});
</script>

<style scoped lang="scss">
.input-container {
	width: 480px;
	height: 40px;
	border-radius: 8px;
	padding: 0 12px;
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;

	input {
		width: 95%;
		height: 100%;
		font-size: 1rem;
		outline: none;
		border: none;
	}
}
</style>
