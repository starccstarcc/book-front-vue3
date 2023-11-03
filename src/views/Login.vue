<template>
	<div class="container-login">
		<StatusModal
			:status_message="message"
			:class="{ isModalActive: isActive, hasError: isError }"
		/>
		<header>
			<img class="logo" :src="logo" alt="Logo bookhub">
		</header>
		<main>
			<div class="size-content banner">
				<div class="cta-banner">
					<h1>Descubra um cantinho para chamar de seu Hub!</h1>
					<p>O Bookhub é a melhor rede social para leitores do Brasil. O lugar perfeito para conhecer e compartilhar e opniar sobre um bom livro, fazer amizades e contribuir com o seu amor pela leitura.</p>
				</div>
			</div>
			<div class="size-content">
				<h3>Sistema de gestão de plataforma</h3>
				<p>Acesse seu ambiente de gestão da plataforma Bookhub</p>
				<FormLogin @handleSubmit="submitLogin" />
			</div>
		</main>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormLogin from "@/components/Forms/FormLogin.vue";
import StatusModal from "@/components/Modals/StatusModal.vue";
import logo from "/img/bookhub-logo.png";

export default defineComponent({
	name: "Login",
	components: { FormLogin, StatusModal },
	data() {
		return {
			logo,
			message: "",
			isActive: false,
			isError: false,
		};
	},
	methods: {
		submitLogin(employee: object) {
			console.log(employee)
			// this.$store
			// 	.dispatch("employeeStore/login", employee)
			// 	.catch((err: any) => {
			// 		let errorMessage = err.response.data.message;

			// 		this.isError = true;
			// 		this.message = errorMessage;
			// 		setTimeout(() => {
			// 			this.isError = false;
			// 		}, 2000);
			// 	});
		},
	},
});
</script>

<style lang="scss" scoped>
.container-login {
	background-color: #fff;
	min-height: 100vh;

	header {
		padding: 10px 100px;
		border-bottom: 1px solid transparent;
		box-shadow: 0 0 10px #00000017;

		.logo {
			width: 130px;
		}
	}

	main {
		display: flex;
		padding: 0 200px;
		min-height: 80vh;
		margin-top: 40px;

		.size-content {
			padding: 20px 20px 0;
			width: 50%;
			&.banner {
				background-image: url("/img/banner.png");
				background-repeat: no-repeat;
				background-size: contain;
				margin: 20px 20px 0;
				position: relative;

				.cta-banner {
					position: absolute;
					bottom: 0;
					left: 0%;

					h1 {
						line-height: 35px;
						font-size: 2rem;
						font-weight: 600;
						margin-bottom: 15px;
					}
				}
			}

			&:last-child {
				border-left: 1px solid #c0c0c0;
			}
		}

	}
}
</style>
<!--https://demos.creative-tim.com/soft-ui-dashboard/pages/dashboard.html-->
