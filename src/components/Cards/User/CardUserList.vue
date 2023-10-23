<template>
	<li v-for="user in user_state" :key="user._id">
		<!--testar a implementacao de avatar para o usuario-->
		<div class="table-list-informations">
			<div class="avatar-table">
				<span>L</span>
				<!--<span>{{ (substring_letter = `${user.name.substring(0, 1)}`) }}</span>-->
			</div>
			<div class="table-size">
				<h3>{{ user.name }}</h3>
			</div>
			<div class="table-size">
				<span>{{ user.email }}</span>
			</div>
			<div class="table-size">
				<p>
					Usuário criado em:
					{{ new Date(user.createdAt).toLocaleString().slice(0, 10) }}
				</p>
			</div>
			<DetailsMenu :title="message" @action="openCardUser(user._id)" />
			<CardUser
				:user_email="user.email"
				:user_name="user.name"
				:user_id="user._id"
				v-if="hiddenCardUser && userId === user._id"
				@hiddenCard="closeCardUser"
			/>
		</div>
	</li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DetailsMenu from "@/components/Icons/DetailsMenu.vue";
import CardUser from "./CardUser.vue";

export default defineComponent({
	name: "CardUserList",
	components: { DetailsMenu, CardUser },
	data() {
		return {
			message: "Clique aqui para ver detalhes do usuário",
			userId: "",
			substring_letter: "",
			hiddenCardUser: false,
		};
	},
	props: {
		user_state: {
			type: Object,
		},
	},
	methods: {
		openCardUser(id: string) {
			this.userId = id;

			this.hiddenCardUser = !this.hiddenCardUser;
		},

		closeCardUser() {
			this.hiddenCardUser = false;
		},
	},
});
</script>

<style scoped lang="scss">
.avatar-table {
	width: 10%;
	margin-left: 15px;

	span {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 100%;
		color: #fff;
		font-size: 22px;
		width: 50px;
		height: 50px;
		background-color: rgb(247, 72, 72);
		cursor: pointer;
	}
}
</style>
