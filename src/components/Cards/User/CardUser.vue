<template>
	<div class="card">
		<Icon icon="carbon:close" @click="$emit('hiddenCard')" />
		<div>
			<div class="title-container">
				<div class="user-avatar">
					<span>{{ user_name.substring(0, 1) }}</span>
				</div>
				<div>
					<h2>{{ user_name }}</h2>
					<p>{{ user_email }}</p>
				</div>
			</div>
			<div>
				<MainButton :title_btn="'Editar Usuário'" />
				<MainButton
					:title_btn="'Remover Usuário'"
					@click="removeUser(user_id)"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
import MainButton from "@/components/Buttons/MainButton.vue";
import userServices from "@/services/userServices";

export default defineComponent({
	name: "CardUser",
	components: { Icon, MainButton },
	emits: ["hiddenCard"],
	props: {
		user_name: {
			type: String,
			required: true,
		},
		user_email: {
			type: String,
			required: true,
		},
		user_id: {
			type: String,
		},
	},
	data() {
		return {
			id: this.user_id,
		};
	},

	methods: {
		async removeUser(id: string | undefined) {
			await this.$store.dispatch("userStore/removeUser", id).then(() => {
				console.log("resposta");
			});
		},
	},
});
</script>

<style scoped lang="scss">
.card {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 2005;
	padding: 30px;
	height: 700px;
	width: 600px;
	border-radius: 8px;
	filter: drop-shadow(-2px 2px 3px rgba(0, 0, 0, 0.166));

	svg {
		position: absolute;
		z-index: 2002;
		top: 20px;
		right: 20px;
		font-size: 27px;
	}

	.title-container {
		display: flex;
		margin-top: 10px;
		.user-avatar {
			width: 100px;
			height: 100px;
			margin-right: 30px;

			span {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 100%;
				font-size: 30px;
				color: #fff;
				border-radius: 100%;
				background-color: rgb(247, 72, 72);
			}
		}
	}
}
</style>
