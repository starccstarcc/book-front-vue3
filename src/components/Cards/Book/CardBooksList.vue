<template>
	<li v-for="book in book_state" :key="book._id" class="card-book">
		<div class="title-book-infomations">
			<div style="width: 100%" @click="hiddenCardBook(book._id)">
				<h3>{{ book.title }}</h3>
				<p>{{ book.plot }}</p>
			</div>
			<DetailsMenu @action="callOptionsModal(book._id)" />
			<OptionsModal
				v-if="hiddenOptionsModal && idBook === book._id"
				@remove="callQuestionModal(book._id)"
			/>
			<QuestionModal
				v-if="hiddenQuestionModal && idBook === book._id"
				:use_icon="true"
				:text_field="`Tem certeza de que deseja remover o livro ${book.title}?`"
				@closeModal="closeQuestionModal"
				@action="$emit('removeBookItem', book._id, book)"
			/>
		</div>
		<div
			class="card-book-infomations"
			v-if="hiddenCardBookInformations && idBook === book._id"
		>
			<div class="poster-container">
				<!--tratar erro de imagem vazia-->
				<img
					v-if="book.poster === '' ? empty.poster : book.poster"
					:src="`${imagePath}/${book.poster?.image_cover}` || empty.poster"
					:alt="book.title"
				/>
			</div>
			<div class="book-informations">
				<h5>Sinópse</h5>
				<p>{{ book.full_plot }}</p>
				<div class="book-technical-informations">
					<div class="technics-dispatches">
						<h5>Informações Tecnicas</h5>
						<p>Autor: {{ book.author.name }}</p>
						<p>Genero: {{ book.genres }}</p>
						<p>Idioma: {{ book.language }}</p>
						<p>Ano de lancamento: {{ book.year }}</p>
						<p>Número de páginas: {{ book.pages_number }}</p>
					</div>
					<!--<div class="technics-dispatches">
						<h5>Informações dos críticos</h5>
						<p>Nota por avaliacao: {{ book.technical.rating }}</p>
						<p>Leitores: {{ book.technical.readers }}</p>
						<p>Votantes: {{ book.technical.votes }}</p>
					</div>-->
					<div class="technics-dispatches">
						<p>
							O registro desse exemplar foi criado em:
							{{ new Date(book.createdAt).toLocaleString().slice(0, 10) }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DetailsMenu from "@/components/Icons/DetailsMenu.vue";
import OptionsModal from "@/components/Modals/OptionsModal.vue";
import QuestionModal from "@/components/Modals/QuestionModal.vue";
const HOST_URI = import.meta.env.VITE_HOST_URI;

export default defineComponent({
	name: "CardBooksList",
	components: { DetailsMenu, OptionsModal, QuestionModal },
	emits: ["removeBookItem"],
	props: {
		book_state: {
			type: Object,
		},
	},
	data() {
		return {
			empty: {
				poster: "img/empty-cover.png",
			},
			imagePath: HOST_URI,
			hiddenOptionsModal: false,
			hiddenQuestionModal: false,
			hiddenCardBookInformations: false,
			hiddenCardMessage: "Recolher card",
			hiddenCard: false,
			isActive: false,
			isError: false,
			idBook: "",
			message: "",
			books: this.book_state as Record<string, any>,
		};
	},

	methods: {
		callOptionsModal(id: string) {
			this.idBook = id;

			this.hiddenOptionsModal = !this.hiddenOptionsModal;
		},

		callQuestionModal(id: string) {
			this.idBook = id;

			this.hiddenQuestionModal = true;
			this.hiddenOptionsModal = false;
		},

		closeQuestionModal() {
			this.hiddenQuestionModal = false;
		},

		hiddenCardBook(id: string) {
			this.hiddenCardBookInformations = !this.hiddenCardBookInformations;
			this.idBook = id;
		},
	},
});
</script>

<style lang="scss" scoped>
.card-book {
	background-color: #d5e2fb;
	padding: 25px 20px 20px 20px;
	margin-bottom: 5px;
	border-radius: 8px;

	.title-book-infomations {
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		align-items: center;

		h3 {
			margin-bottom: 5px;
		}

		p {
			font-size: 14px;
		}
	}

	.card-book-infomations {
		background-color: #fff;
		padding: 10px;
		margin-top: 25px;
		border-radius: 8px;
		display: flex;

		.poster-container {
			width: 20%;

			img {
				width: 100%;
			}
		}

		.book-informations {
			width: 80%;
			padding: 0 20% 0 30px;

			h5 {
				font-size: 20px;
				margin-bottom: 15px;
			}

			.book-technical-informations {
				display: flex;
				margin-top: 30px;

				.technics-dispatches {
					width: 33.3%;

					> p {
						margin-bottom: 5px;
					}
				}
			}
		}
	}
}
</style>
