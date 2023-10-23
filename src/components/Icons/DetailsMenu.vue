<template>
	<div class="icon-menu" @click="$emit('action')">
		<Icon icon="carbon:overflow-menu-vertical" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

export default defineComponent({
	name: "DetailsMenu",
	components: { Icon },
	emits: ["action"],
});
</script>

<style scoped lang="scss">
.icon-menu {
	background: rgb(206, 206, 206);
	padding: 10px 8px;
	border-radius: 8px;
	font-size: 30px;
	transition: 0.3s ease-in-out;

	&:hover {
		background: rgb(152, 152, 152);
	}
}
</style>
