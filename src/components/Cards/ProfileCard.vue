<template>
	<div class="card-profile">
		<Icon icon="carbon:close" @click="$emit('hiddenProfileCard')" />
		<div>
			<strong>clique aqui para recolher o menu</strong>
			Card do perfil do usuario"
			<div @click="handleLogout">Sair</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

export default defineComponent({
	name: "CardProfile",
	components: { Icon },
	emits: ["hiddenProfileCard"],
	methods: {
		handleLogout() {
			localStorage.clear();
			this.$router.push("/login");
		},
	},
});
</script>
