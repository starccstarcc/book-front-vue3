<template>
	<div class="dropdown_menu" @click="hiddenChooseSortMenu">
		<div class="sort">
			Ordenar por...
		</div>
		<div class="arrowdown">
			<Icon icon="material-symbols:keyboard-arrow-down" />
		</div>
		<nav v-if="hideChooseMenu" class="choose_menu">
			<ul>
				<li>A a Z</li>
				<li>Z a A</li>
				<li>Mais antigos</li>
				<li>Mais recentes</li>
			</ul>
		</nav>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from '@iconify/vue';

export default defineComponent({
	name: 'SortResources',
	components: { Icon },
	data() {
		return {
			hideChooseMenu: false,
		}
	},
	methods: {
		hiddenChooseSortMenu(): void {
			this.hideChooseMenu = !this.hideChooseMenu
		}
	}
});
</script>

<style scoped lang="scss">
.dropdown_menu {
	display: flex;
	cursor: pointer;
	position: relative;

	.sort {
		border-top-left-radius: 8px;
		border-bottom-left-radius: 8px;
		padding: 10px;
		background-color: #222636;
	}

	.arrowdown {
		padding: 10px 5px;
		background-color: #4a5b9e;
		border-top-right-radius: 8px;
		border-bottom-right-radius: 8px;
	}
}

.choose_menu {
	background: #222636;
	position: absolute;
	z-index: 1000;
	top: 100%;
	border-radius: 8px;
	filter: drop-shadow(2px -2px 5px #00000080);


	ul {

		li {
			padding: 10px 20px;
		}
	}
}
</style>
