<template>
	<div class="pagination">
		<button
			v-if="showPrevious"
			class="item prev"
			@click="changePage(current - 1)"
		>
			&laquo;
		</button>
		<button
			v-for="(page, index) in pages"
			:key="page"
			class="item"
			:class="{ current: page === current }"
			@click="changePage(index)"
		>
			{{ page }}
		</button>
		<button v-if="showNext" class="item next" @click="changePage(current + 1)">
			&raquo;
		</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Pagination",
	props: {
		skip: {
			type: [String, Number],
			default: 1,
		},
		total: {
			type: [String, Number],
			required: true,
		},
		limit: {
			type: [String, Number],
			default: 10,
		},
	},
	computed: {
		showPrevious(): boolean {
			return this.current > 1;
		},
		showNext(): boolean {
			return this.total > this.limit * this.current;
		},
		current(): boolean {
			return this.skip ? this.skip + 1 : 1;
		},
		pages() {
			const quantity = Math.ceil(this.total / this.limit);
			if (quantity <= 1) return [1];
			return Array.from(Array(quantity).keys(), (i) => i + 1);
		},
	},
	methods: {
		changePage(skip: number) {
			this.$emit("change-page", skip);
		},
	},
});
</script>

<style lang="scss" scoped>
$light-grey: #cccccc;
$dark-grey: #333333;
$orange: #f90;
$dark-orange: #f63;
.pagination {
	padding: 30px 0;
	display: flex;
	justify-content: flex-start;
	width: 100%;
	.item {
		padding: 0.5rem 0.75rem;
		border: 1px solid $light-grey;
		cursor: pointer;
		background-color: white;
		&:first-child {
			border-top-left-radius: 3px;
			border-bottom-left-radius: 3px;
		}
		&:last-child {
			border-top-right-radius: 3px;
			border-bottom-right-radius: 3px;
		}
		&:hover {
			background-color: $light-grey;
			border-color: lighten($dark-grey, 50%);
			z-index: 3;
		}
		&.current {
			cursor: default;
			color: white;
			background-color: $orange;
			border-color: $dark-orange;
		}
		+ .item {
			margin-left: -1px;
			margin-right: 0;
		}
	}
}
</style>
