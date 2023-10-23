<template>
	<div class="overview">
		<!-- Definir um escopo de click out target para fechar o form -->
		<StatusModal
			:status_message="message"
			:class="{ isModalActive: isActive, hasError: isError }"
		/>
		<div ref="formCreateBook">
			<SearchBar
				:search_name="'Encontre um livro'"
				:event_name="'Adicionar novo livro'"
				:hiddenEventBtn="true"
				:message_placeholder="'Faca sua busca por código, ano, título, autor ou editora'"
				@search="searchBook"
				@open-form="openForm"
			/>
			<!-- Forms components -->
			<FormBook
				v-if="hiddenFormCreate"
				@hiddenForm="closeForm"
				@submitForm="createBook"
				:imageRender="imageRender"
			/>
			<div class="table centralize" v-if="books.length === 0">
				<img :src="isEmpty" alt="Robo vazio" />
			</div>
			<ul class="table" v-else>
				<CardBooksList :book_state="books" @removeBookItem="removeBook" />
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import type { IBookFields } from "@/interfaces/Ibooks";
//import type { PropType } from 'vue'
import SearchBar from "@/components/SearchBar/index.vue";
import StatusModal from "@/components/Modals/StatusModal.vue";
import FormBook from "@/components/Forms/Books/FormBook.vue";
import OptionsModal from "@/components/Modals/OptionsModal.vue";
import QuestionModal from "@/components/Modals/QuestionModal.vue";
import DetailsMenu from "@/components/Icons/DetailsMenu.vue";
import CardBooksList from "@/components/Cards/Book/CardBooksList.vue";

const empty_robot = "/img/empty-robot.jpg";

export default defineComponent({
	name: "BooksReports",
	components: {
		SearchBar,
		FormBook,
		OptionsModal,
		QuestionModal,
		StatusModal,
		DetailsMenu,
		CardBooksList,
	},
	data() {
		return {
			books: this.$store.state.bookStore.Books,
			uploadedImagePath: this.$store.state.bookStore.uploadedFile,
			hiddenFormCreate: false,
			isActive: false,
			isError: false,
			message: "",
			imageRender: "",
			idImageRender: "",
			idBook: "",
			isEmpty: empty_robot,
		};
	},

	watch: {
		"books/getSuccessMessage"(data) {
			console.log(data);
		},
		/*["books/getSuccessMessage"](message) {
			if (message === true) {
				console.log(message);
				this.message = "Livro excluído com sucesso!";
				this.isActive = true;
				setTimeout(() => {
					this.isActive = false;
				}, 2000);
			}
		},*/
	},

	computed: {
		...mapGetters(["books/getSuccessMessage"]),
	},

	methods: {
		async createBook(book: IBookFields) {
			const { ...data } = book;

			const bookData = {
				...data,
				cod: Number(data.cod),
				pages_number: Number(data.pages_number),
				year: Number(data.year),
				poster: (data.poster = `${localStorage.getItem("image_id")}`),
			};

			// verificar se é possível salvar todos os dados digitados até entao na storage para que nao se perca
			await this.$store.dispatch("bookStore/createNewBook", bookData);
		},

		//metodos de requisicao
		async getAllBooks() {
			await this.$store.dispatch("bookStore/getPaginatedBooks", this.books);
		},

		//remove book
		async removeBook(id: string, book: object) {
			await this.$store.dispatch("bookStore/removeBookItem", id);

			// let index = this.books.indexOf(book);
			// this.books.splice(index, 1);
			// console.log(this.books, book);

			console.log(id, book);
		},

		searchBook(data: string) {
			console.log(data);
		},

		openForm() {
			this.hiddenFormCreate = true;
		},

		closeForm() {
			this.hiddenFormCreate = false;
		},
	},
	mounted() {
		console.log(this.$store.state.bookStore.successMessage);
		this.getAllBooks();

		const self: any = this.$refs.formCreateBook;
		document.addEventListener("click", (e: Event) => {
			if (self !== undefined && self.contains(e.target) === false) {
				this.hiddenFormCreate = false;
			}
		});
	},
});
</script>

<style lang="scss" scoped>
.centralize {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		border-radius: 12px;
		width: 30%;
	}
}
</style>
