<template>
	<transition name="fade">
		<RouterView />
	</transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Content",
});
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
