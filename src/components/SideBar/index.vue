<template>
	<div class="sidebar">
		<div class="sidebar--logo-container">
			<router-link :to="{ name: 'Dashboard'}">
				<img
					@click="catchRouterName"
					src="/img/logo-livraria-do-dev-removebg.png"
					alt="logo DevBook"
				/>
			</router-link>
		</div>
		<SideBarLinks />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBarLinks from "./SideBar-plugins/SideBarLinks.vue";

export default defineComponent({
	name: "SideBar",
	components: { SideBarLinks },
	data() {
		return {
			isActive: true,
			isInactive: false
		}
	},
	methods: {
		catchRouterName() {
			return this.$store.state.userStore.routerName = 'Dashboard'
		}
	}
});
</script>

<style lang="scss" scoped>
.sidebar {
	width: 16.5%;
	background-image: linear-gradient(to right, #121212, #2e2e2e);
	border-radius: 12px;
	padding: 20px;
	filter: drop-shadow(-2px 2px 5px rgba(0, 0, 0, 0.8));
	position: fixed;
	height: 98vh;
	margin-bottom: 10px;

	&--logo-container {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px 0 28px;
		border-bottom: 2px solid #333;

		img {
			width: 170px;
			filter: drop-shadow(0 0 1px #fff);
		}
	}
}
</style>
