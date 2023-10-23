<template>
	<div class="main-banner">
		<main>
			<StatusModal
				:status_message="message"
				:class="{ isModalActive: isActive, hasError: isError }"
			/>
			<div class="box-content">
				<div class="form-container">
					<div class="image-container">
						<img
							src="/img/logo-livraria-do-dev-removebg.png"
							alt="logo principal livraria do dev"
						/>
					</div>
					<div class="title-content">
						<h1>Gerenciador de plataforma</h1>
						<p>Acesse seu ambiente de gestão da plataforma DevBooks</p>
					</div>
					<FormLogin @handleSubmit="submitLogin" />
				</div>
			</div>
		</main>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormLogin from "@/components/Forms/FormLogin.vue";
import StatusModal from "@/components/Modals/StatusModal.vue";

export default defineComponent({
	name: "Login",
	components: { FormLogin, StatusModal },
	data() {
		return {
			message: "",
			isActive: false,
			isError: false,
		};
	},
	methods: {
		submitLogin(employee: object) {
			this.$store
				.dispatch("employeeStore/login", employee)
				.catch((err: any) => {
					let errorMessage = err.response.data.message;

					this.isError = true;
					this.message = errorMessage;
					setTimeout(() => {
						this.isError = false;
					}, 2000);
				});
		},
	},
});
</script>

<!--https://demos.creative-tim.com/soft-ui-dashboard/pages/dashboard.html-->
