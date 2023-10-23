<template>
	<div class="card">
		<div class="card__information">
			<p>{{ status }}</p>
			<span class="card--type-font">{{ quantity }}</span>
		</div>
		<div class="card__icon">
			<Icon :icon="`carbon:${ icon_type }`" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

export default defineComponent({
	name: "CardMessure",
	components: { Icon },
	props: {
		status: {
			type: String,
		},
		icon_type: {
			type: String,
		},
		quantity: {
			type: Number,
		}
	}
});
</script>

<style lang="scss" scoped>
.card {
	background-color: #272b3d;
	width: 33.33%;
	margin: 0 5px;
	border-radius: 8px;
	padding: 15px;
	display: flex;

	&__information {
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;

		p {
			font-size: 0.8rem;
			color: #009acc;
			font-weight: 700;
		}
	}

	&--type-font {
		font-weight: 500;
		margin-top: 6px;
		font-size: 20px;
	}

	&__icon {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 60px;
		height: 60px;
		font-size: 25px;
		color: #fff;
		border-radius: 100%;
		background-color: #35406C;
		box-shadow: -2px 2px 5px #00000068;
	}
}
</style>
