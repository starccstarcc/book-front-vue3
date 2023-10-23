<template>
	<div class="overview">
		<div class="table overview_table">
			<div class="inner_informations">
				<div class="inner_user_card">
					<header>
						Seja bem vindo(a) ao DevBooks!<br/> <strong>{{ truncate(user.name) }}</strong>
					</header>
					<span class="user_avatar">P</span>
					<div class="inner_infos_user">
						<p>E-mail: <span>{{  user.email  }}</span></p>
						<p>Cargo: <span>{{  user.roles  }}</span></p><br/>
						<MainButton
							:title_btn="'Ver perfil'"
							class="alternativeButton"
						/>
					</div>
				</div>
				<div class="book-card">
					<!--fazer tratativa de container com imagem vazia-->
					<div class="cover">
						<!--melhorar essa logica para renderizar imagens vazias-->
						<img
							v-if="
								bookIndex[0].poster?.image_cover === ''
									? empty.poster
									: bookIndex[0].poster?.image_cover
							"
							:src="
								`${imagePath}/${bookIndex[0].poster?.image_cover}` ||
								empty.poster
							"
							:alt="bookIndex[0].title"
						/>
					</div>
					<div class="info-book">
						<h2>Ultimo livro adicionado ao DevBooks</h2>
						<h3>
							{{ bookIndex[0].title }}
						</h3>
						<p>
							{{ bookIndex[0].plot }}
						</p>
						<span>Ver mais <Icon icon="carbon:arrow-right" /></span>
					</div>
				</div>
				<WeatherWidget style="max-width: 98%;"/>
			</div>
			<section>
				<header class="monitoring_status">
					<CardMessure
						:icon_type="'user-multiple'"
						:status="'Total de usuário'"
						:quantity="quantityUser"
					/>
					<CardMessure
						:icon_type="'book'"
						:status="'Total de livros'"
						:quantity="quantityBooks"
					/>
					<CardMessure
						:icon_type="'add-comment'"
						:status="'Total de comentários'"
						:quantity="quantityComments"
					/>
				</header>
				<div class="size-container">
					<div class="board-info">
						<div class="introduction">
							<span>Plaraforma de gerenciamento de recursos</span>
							<h1>Gerenciador DevBooks</h1>
							<p>
								<strong>Conhece a DevBooks?</strong>
								O DevBooks é uma plataforma / rede social voltada para o público
								bibliófilo. E por aqui é possível conhecer outros usuários,
								indicar livros, comentar e até mesmo salvar na sua estante.
								Legal não é mesmo? Então junte-se a nós!
							</p>
						</div>
					</div>
				</div>
				<div class="size-container"><!--ver uma estilização exclusiva que possa ser compartilhada link do clone do projeto https://adminlte.io/blog/asp-net-templates/-->
					aqui ficará a parte de livros mais comentados, ou avaliado, ou mais acessados... ainda vou ver
				</div>
			</section>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
import { truncate } from "@/helpers/truncate";
import CardMessure from "@/components/DashboardComponents/CardMessure.vue";
import WeatherWidget from "@/components/Widget/WeatherWidget.vue";
import MainButton from "@/components/Buttons/MainButton.vue";
const HOST_URI = import.meta.env.VITE_HOST_URI;

export default defineComponent({
	name: "Overview",
	components: { CardMessure, Icon, WeatherWidget, MainButton },
	data() {
		return {
			truncate,
			imagePath: HOST_URI,
			empty: {
				poster: "img/empty-cover.png",
			},
			user: {
				name: this.$store.state.employeeStore.employeeName,
				email: this.$store.state.employeeStore.employeeEmail,
				roles: this.$store.state.employeeStore.employeeRoles,
			},
			quantityUser: this.$store.state.userStore.countUsers,
			quantityBooks: this.$store.state.bookStore.countBooks,
			bookIndex: this.$store.state.bookStore.Books,
			quantityComments: 851,
		};
	},
	mounted() {
		console.log(this.$store.state);
	},
});
</script>

<style lang="scss" scoped>
.overview {

	.overview_table {
		display: flex;

		.inner_informations {
			width: 40%;
			height: 100%;

			// estilos do card de introdução do usuário
			.inner_user_card {
				background-color: #272B3D;
				height: 250px;
				margin: 0 12px 12px 0;
				border-radius: 8px;
				position: relative;

				header {
					height: 40%;
					padding: 20px 0 20px 30%;
					border-top-right-radius: 8px;
					border-top-left-radius: 8px;
					background: #35406C;

					strong {
						letter-spacing: 1px;
					}
				}

				.user_avatar {
					height: 80px;
					width: 80px;
					background-color: #F74848;
					border-radius: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #fff;
					font-size: 30px;
					position: absolute;
					top: 50%;
					left: 5%;
					transform: translateY(-80%);
				}

				.inner_infos_user {
					padding: 20px 0 20px 30%;
				}
			}

			.book-card {
				margin:0 12px 12px 0;
				border: none;
				position: relative;
				filter: drop-shadow(-2px 2px 5px rgba(0, 0, 0, 0.168));

				.cover {
					border-radius: 8px;
					height: 100%;
					width: 100%;
					overflow: hidden;
					display: flex;
					justify-content: center;
					align-items: center;
					position: absolute;

					img {
						height: 270%;
						width: 100%;
						border: 1px solid;
						animation: jump 0.6s ease-in-out;

						@keyframes jump {
							0% {
								transform: translateY(-20px);
								opacity: 0;
							}
							100% {
								transform: translateY(0px);
								opacity: 1;
							}
						}
					}
				}

				.info-book {
					padding: 25px;
					display: flex;
					justify-content: center;
					align-items: flex-start;
					flex-direction: column;
					background-image: linear-gradient(
						rgba(0, 0, 0, 0.516),
						rgba(0, 0, 0, 0.1)
					);
					height: 100%;
					border-radius: 8px;
					color: #fff;
					text-shadow: -2px 2px 5px rgba(0, 44, 83, 0.68);

					h2 {
						font-weight: 500;
						margin-bottom: 30px;
					}

					h3 {
						font-size: 20px;
						font-weight: 500;
						margin-bottom: 20px;
					}

					p {
						margin-bottom: 20px;
						line-height: 1.3;
						font-size: 14px;
					}

					span {
						cursor: pointer;
						display: flex;
						transition: 0.2s ease-in-out;

						&:hover {
							background-color: #363a63;
							padding: 5px 15px;
							border-radius: 8px;
							filter: drop-shadow(-2px 2px 5px rgba(0, 0, 0, 0.128));
						}

						svg {
							font-size: 18px;
							margin-left: 10px;
						}
					}
				}
			}
		}

		section {
			width: 60%;

			.monitoring_status {
				display: flex;
				width: 100%;
				margin-bottom: 15px;
			}

			.size-container {
				border-radius: 8px;
				height: 200px;
				background-color: #272B3D;
				margin: 0 5px 15px 5px;

				.board-info {
					padding: 20px;
					border-radius: 8px;
					display: flex;
					height: 100%;

					.introduction {

						span {
							font-weight: 500;
						}

						h1 {
							margin: 15px 0 30px;
						}
					}
				}
			}
		}
	}
}
</style>
