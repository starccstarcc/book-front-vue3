<template>
	<div class="options-modal">
		<div class="spacing-icons">
			<span>Editar</span>
			<Icon icon="carbon:edit" />
		</div>
		<div class="spacing-icons" @click="$emit('remove')">
			<span>Excluir</span>
			<Icon icon="carbon:trash-can" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

export default defineComponent({
	name: "OptionModal",
	components: { Icon },
	emits: ["remove"],
});
</script>

<style scoped lang="scss">
.options-modal {
	background: #fff;
	position: absolute;
	right: 3%;
	bottom: -80px;
	z-index: 2003;
	border-radius: 8px;
	filter: drop-shadow(-2px 2px 5px rgba(0, 0, 0, 0.166));

	.spacing-icons {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px 20px;
		height: 50px;
		width: 120px;

		&:hover {
			background: #d5e2fb;
		}

		svg {
			margin-left: 15px;
			font-size: 20px;
		}
	}
}
</style>
