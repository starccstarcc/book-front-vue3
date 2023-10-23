<template>
	<div class="search-bar">
		<div>
			<BaseInput
				class="input-styles"
				v-model="search_data"
				:placeholder="message_placeholder"
			/>
		</div>
		<div class="btn-container">
			<form @submit.prevent="$emit('search', search_data)">
				<MainButton type="submit" :title_btn="search_name" />
			</form>
			<MainButton
				v-if="hiddenEventBtn"
				@click="$emit('openForm')"
				:title_btn="event_name"
			/>
		</div>
		<SortResources />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseInput from "../Inputs/BaseInput.vue";
import MainButton from "@/components/Buttons/MainButton.vue";
import SortResources from '@/components/SortResources/index.vue';

export default defineComponent({
	name: "SearchBar",
	components: { BaseInput, MainButton, SortResources },
	emits: ["search", "openForm"],
	props: {
		message_placeholder: {
			type: String,
			required: true,
		},
		search_name: {
			type: String,
			required: true,
		},
		event_name: {
			type: String,
		},
		hiddenEventBtn: {
			type: Boolean,
		},
	},
	data() {
		return {
			search_data: "",
		};
	},
});
</script>

<style scoped lang="scss">
.search-bar {
	background-color: #272B3D;
	padding: 20px;
	display: flex;
	align-items: center;
	border-radius: 8px;

	.input-styles {
		border: 1px solid #d3d2d2;
		margin-right: 10px;
	}

	.btn-container {
		display: flex;

		button {
			margin-right: 10px;
			background-image: linear-gradient(#343a63, #1f233b);
			color: #fff;

			&:hover {
				background: #343a63;
			}

			&:active:focus {
				background: #1f233b;
			}
		}
	}
}
</style>
