<template>
	<div class="wrapper">
		<div class="sidebar-container">
			<SideBar />
			<div class="sidebar-full-width">
			</div>
		</div>
		<div class="main-painel">
			<MainHeader />
			<main>
				<Content />
			</main>
			<Footer />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import SideBar from "@/components/SideBar/index.vue";
import MainHeader from "@/components/MainHeader/index.vue";
import Content from "./Content.vue";
import Footer from "@/components/Footer/index.vue";

export default defineComponent({
	name: "DashboardLayout",
	components: { SideBar, MainHeader, Content, Footer },
});
</script>

<style scoped lang="scss">
// fade effect for transitions between pages
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

// template styles
.wrapper {
	display: flex;
	max-width: 1920px;
	margin: 0 auto;
	height: 100vh;

	.sidebar-container {
		width: 18%;
		padding: 10px;
		overflow: hidden;
	}

	.main-painel {
		width: 85%;
		padding: 10px;
		overflow-y: auto;
	}
}
</style>
