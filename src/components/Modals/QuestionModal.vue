<template>
	<div class="box-modal">
		<div class="icon-modal" v-if="use_icon">
			<Icon icon="carbon:close-outline" />
		</div>
		<p>{{ text_field }}</p>
		<div class="box-btn">
			<MainButton :title_btn="'Sim'" @click="$emit('action')" />
			<MainButton :title_btn="'Não'" @click="$emit('closeModal')" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
import MainButton from "../Buttons/MainButton.vue";

export default defineComponent({
	name: "QuestionModal",
	emits: ["action", "closeModal"],
	components: { MainButton, Icon },
	props: {
		text_field: {
			type: String,
			required: true,
		},
		use_icon: {
			type: Boolean,
		},
	},
});
</script>

<style scoped lang="scss">
.box-modal {
	position: fixed;
	top: 50%;
	left: 50%;
	z-index: 2002;
	transform: translate(-50%, -80%);
	filter: drop-shadow(-2px 2px 1px rgba(0, 0, 0, 0.173));
	background-color: #fff;
	border-radius: 8px;
	min-width: 400px;
	padding: 50px;
	text-align: center;

	.icon-modal {
		display: flex;
		justify-content: center;
		padding-bottom: 20px;

		svg {
			font-size: 100px;
			color: #ff0000;
		}
	}

	p {
		font-weight: 600;
		font-size: 1.2rem;
		margin-bottom: 30px;
	}

	.box-btn {
		display: flex;
		justify-content: center;

		button {
			width: 120px;
			margin: 0 3px;
			border: none;

			&:first-child {
				background: rgb(216, 50, 50);
				color: #fff;
			}

			&:last-child {
				background: #b6b6b6;
				color: #fff;
			}
		}
	}
}
</style>
