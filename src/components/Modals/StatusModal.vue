<template>
	<div class="status-modal">
		<p>{{ status_message }}</p>
		<div id="baseline"></div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "StatusModal",
	props: {
		status_message: {
			type: String,
			required: true,
		},
	},
});
</script>

<style scoped lang="scss">
.status-modal {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-weight: 500;
	position: fixed;
	bottom: 35px;
	right: -100%;
	z-index: 2006;
	min-height: 80px;
	color: #fff;
	padding: 0 20px;
}

.isModalActive {
	right: 0;
	transition: right 0.3s ease-in-out;
	background: rgb(88, 219, 6);
	color: #060a84d8;

	#baseline {
		position: absolute;
		bottom: 0;
		height: 7px;
		width: 100%;
		background-color: green;
		animation: slide 2s ease-in-out;
		transition: right 0.3s ease-in-out;

		@keyframes slide {
			from {
				transform: translateX(0);
			}
			to {
				transform: translateX(100%);
			}
		}
	}
}

.hasError {
	right: 0;
	background-color: red;
	transition: right 0.3s ease-in-out;

	#baseline {
		position: absolute;
		bottom: 0;
		height: 7px;
		width: 100%;
		background-color: rgb(103, 0, 0);
		animation: slide 2s ease-in-out;
		transition: right 0.3s ease-in-out;

		@keyframes slide {
			from {
				transform: translateX(0);
			}
			to {
				transform: translateX(100%);
			}
		}
	}
}
</style>
