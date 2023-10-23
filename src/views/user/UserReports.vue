<template>
	<div class="overview">
		<StatusModal
			:status_message="message"
			:class="{ isModalActive: isActive, hasError: isError }"
		/>
		<SearchBar
			:search_name="'Encontre um usuário'"
			:event_name="'Cadastrar novo usuário'"
			:hiddenEventBtn="true"
			:message_placeholder="'Encontre um usuário'"
			@openForm="openFormCreateUser"
		/>
		<!-- Forms components -->
		<FormUser
			v-if="hiddenFormCreateUser"
			@hiddenForm="closeForm"
			@submitForm="createUser"
		/>
		<div class="table">
			<ul>
				<CardUserList :user_state="users" />
			</ul>
			<Pagination
				v-if="users.length"
				:skip="skip"
				:total="total"
				:limit="limit"
				@change-page="changePage"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchBar from "@/components/SearchBar/index.vue";
import CardUserList from "@/components/Cards/User/CardUserList.vue";
import Pagination from "@/components/Pagination/Pagination.vue";
import FormUser from "@/components/Forms/User/FormUser.vue";
import userServices from "@/services/userServices";
import StatusModal from "@/components/Modals/StatusModal.vue";
import type { UserData } from "@/interfaces/UserInstance";

export default defineComponent({
	name: "UserReports",
	components: {
		SearchBar,
		CardUserList,
		Pagination,
		FormUser,
		StatusModal,
	},

	data() {
		return {
			users: this.$store.state.userStore.Users,
			hiddenFormCreateUser: false,
			skip: 1,
			total: 0,
			limit: 10,
			message: "",
			isActive: false,
			isError: false,
		};
	},

	methods: {
		async getAllUsers() {
			await this.$store.dispatch("userStore/getAllPaginatedUsers", this.users);
		},

		// create new user
		async createUser(user: UserData) {
			await userServices
				.createUser(user)
				.then((res) => {
					if (res.status === 201) {
						const userName = res.data.user.name;

						this.message = `Usuário ${userName} cadastrado com sucesso!`;
						this.isActive = true;
						setTimeout(() => {
							this.isActive = false;
						}, 2000);
					}
					let index = this.users.indexOf(user);
					this.users.push(index, 1);

					this.hiddenFormCreateUser = false;
				})
				.catch((err) => {
					const errorMessage = err.response.data.message;
					console.log(err);

					this.isError = true;
					this.message = errorMessage;
					setTimeout(() => {
						this.isError = false;
					}, 2000);
				});
		},

		openFormCreateUser() {
			this.hiddenFormCreateUser = true;
		},

		closeForm() {
			this.hiddenFormCreateUser = false;
		},
		// criar url paginada
		changePage(value: number) {
			this.skip = value;
			this.getAllUsers();
		},
	},

	mounted() {
		this.getAllUsers();
	},
});
</script>
