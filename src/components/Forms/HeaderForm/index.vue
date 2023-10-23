<template>
	<header class="title-form">
		<h3>{{ title_header }}</h3>
		<p>Preencha os campos inserindo os dados conforme solicitados nas labels</p>
	</header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "HeaderForm",
	props: {
		title_header: {
			type: String,
			required: true,
		},
	},
});
</script>

<style scoped lang="scss">
.title-form {
	margin-bottom: 20px;

	h3 {
		margin-bottom: 5px;
	}
}
</style>
