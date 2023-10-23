<template>
	<div class="links">
		<nav>
			<ul class="links__navigation">
				<li v-for="link in dataLinks" :key="link.id">
					<router-link
						:to="{ path: `${link.router}`}"
						@click="defineRouterName(link.description)"
						:class="{
							isActiveRouter:
								$store.state.userStore.routerName === link.description
									? isActive
									: isInactive,
						}"
					>
						<Icon :icon="`carbon:${link.icon}`" />
						<p>{{ link.description }}</p>
					</router-link>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

import routerLinks from "@/router/router-links"
import { mapGetters } from "vuex";

export default defineComponent({
	name: "SideBarLinks",
	components: { Icon },
	data() {
		return {
			dataLinks: routerLinks,
			isActive: true,
			isInactive: false,
			defaultRouter: "/app/dashboard",
		};
	},

	computed: {
		...mapGetters(["userStore/setDefaultRouter"]),
	},

	watch: {
		["userStore/setDefaultRouter"](data) {
			console.log(data);
			//this.$store.state.userStore.routerName = this.defaultRouter;
		},
	},

	methods: {
		defineRouterName(data: string) {
			console.log(data);

			this.$store.state.userStore.routerName = data;
		},
	},

	mounted() {
		this.defineRouterName(
			(this.$store.state.userStore.routerName = "Dashboard")
		);

		window.addEventListener('keypress', (e) => {
			if(e.keyCode === 116) {
				alert('OOOia!')
			}
		})
		/*this.defaultRouter;

		console.log(this.defaultRouter);*/
	},
});
</script>
