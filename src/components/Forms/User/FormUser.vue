<template>
	<div class="form-container">
		<Icon icon="carbon:close" @click="$emit('hiddenForm')" />
		<HeaderForm :title_header="'Cadastre aqui um novo usuário'" />
		<div class="forms">
			<form @submit.prevent="$emit('submitForm', user)">
				<div class="form-setup">
					<div class="input-fields">
						<div>
							<p>Informacoes do usuário</p>
							<div class="m-bottom">
								<BaseInput
									class="input-styles"
									v-model="user.name"
									placeholder="Nome do usuário"
								/>
							</div>
							<div class="m-bottom">
								<BaseInput
									class="input-styles"
									v-model="user.email"
									placeholder="Insira o e-mail do usuário"
								/>
							</div>
							<div class="m-bottom">
								<!--Aqui vai ser um select option-->
								<BaseInput
									class="input-styles"
									v-model="user.gen"
									placeholder="Defina o genero do usuário"
								/>
							</div>
							<p>Insira o endereco do usuário</p>
							<div class="m-bottom">
								<BaseInput
									class="input-styles"
									v-model="user.location.address.street"
									placeholder="Rua"
								/>
							</div>
							<div class="m-bottom">
								<BaseInput
									class="input-styles"
									v-model="user.location.address.city"
									placeholder="Cidade"
								/>
							</div>
							<div class="m-bottom">
								<BaseInput
									class="input-styles"
									v-model="user.location.address.state"
									placeholder="Estado"
								/>
							</div>
							<div class="m-bottom">
								<BaseInput
									:hiddenRevellingPassword="true"
									class="input-styles"
									v-model="user.password"
									placeholder="Senha"
								/>
							</div>
						</div>
					</div>
				</div>
				<MainButton class="alternativeButton" :title_btn="'Cadastrar'" />
			</form>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
//ver tratamento com classe para armazenar dados do usuario
import { UserData } from "@/interfaces/UserInstance";
import { Icon } from "@iconify/vue";
import HeaderForm from "@/components/Forms/HeaderForm/index.vue";
import MainButton from "@/components/Buttons/MainButton.vue";
import BaseInput from "@/components/Inputs/BaseInput.vue";

export default defineComponent({
	name: "FormUser",
	components: { HeaderForm, Icon, MainButton, BaseInput },
	emits: ["submitForm", "hiddenForm"],
	setup() {
		return {
			//bug implementar retorno dos inputs como argumentos da classe
			user: new UserData(
				"Nome do usuário",
				"E-mail do usuário",
				"Senha",
				"Genero",
				{
					address: {
						street: "Nome da rua",
						city: "Cidade",
						state: "Estado",
					},
				}
			),
		};
	},
});
</script>

<style scoped lang="scss">
.form-container {
	position: fixed;
	z-index: 2001;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 8px;
	background-color: #fff;
	filter: drop-shadow(-2px 2px 10px rgba(0, 0, 0, 0.322));
	padding: 30px;

	svg {
		position: absolute;
		z-index: 2002;
		top: 20px;
		right: 20px;
		font-size: 27px;
	}

	.forms {
		width: 100%;

		.form-setup {
			display: flex;
			width: 100%;

			.input-fields {
				width: 100%;

				p {
					margin: 20px 0 10px 0;
				}

				.m-bottom {
					margin-bottom: 7px;

					.input-styles {
						border: 1px solid #c6c1c1;
						width: 100%;
					}
				}
			}
		}
	}
}
</style>
