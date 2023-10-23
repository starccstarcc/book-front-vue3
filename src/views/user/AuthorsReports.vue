<template>
	<div>
		<ul>
			<li v-for="author in authors" :key="author._id">
				<div>{{ author.name }}</div>
				<div>{{ author.biography }}</div>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "AuthorsReports",
	data() {
		return {
			authors: this.$store.state.authorStore.authors,
		};
	},

	methods: {
		async getAllAuthors() {
			await this.$store.dispatch("authorStore/getAuthors", this.authors);
		},
	},

	mounted() {
		this.getAllAuthors();
	},
});
</script>
