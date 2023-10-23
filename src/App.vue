<template>
	<RouterView />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SocketModule } from "./socket";

export default defineComponent({
	name: "App",
	setup() {
		return {
			socketService: SocketModule.connect(),
		};
	},
	mounted() {
		this.socketService.registerListener("connection", "connection", () => {
			console.log("conectou");
		});
	},
});
</script>

<style lang="scss">
.customerDarkColor {
	background-color: #121212;
}
</style>
