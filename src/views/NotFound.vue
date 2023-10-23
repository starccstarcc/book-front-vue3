<template>
	<div class="error-page">
		<div>
			<img src="/img/robot-error-removebg.png" alt="robo error" />
		</div>
		<div class="align-text">
			<h2>Página não encontrada</h2>
			<p>
				Desculpe, não conseguimos encontrar a página que voce está procurando.
				<span>Sugerimos que retorne para a página anterior.</span>
			</p>

			<a @click="historyRouter">Voltar</a>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "NotFoundPage",
	data() {
		return {
			backRouter: "" as any,
		};
	},

	methods: {
		historyRouter() {
			this.backRouter = this.$router.go(-1);
		},
	},
});
</script>
<style scoped lang="scss">
.error-page {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;

	img {
		filter: drop-shadow(-2px 2px 3px #00445a91);
	}
	.align-text {
		text-align: center;

		h2 {
			font-size: 35px;
			font-weight: 500;
			margin-bottom: 20px;
		}

		span {
			display: block;
			margin-bottom: 20px;
		}
	}

	a {
		cursor: pointer;
		transition: 0.2s ease-in-out;

		&:hover {
			padding: 10px 20px;
			border: 2px solid #363a63;
			border-radius: 10px;
		}
	}
}
</style>
