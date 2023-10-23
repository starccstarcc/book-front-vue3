<template>
	<header class="header">
		<div class="header__infos">
			<div class="header--gretting">
				Seja bem vindo(a)
				<strong>{{
					$store.state.employeeStore.employeeName
						.split(" ")
						.slice(0, 2)
						.toString()
						.replace(",", " ")
				}}</strong>
			</div>
			<div>
				<strong>{{ $store.state.employeeStore.routerName }}</strong>
			</div>
		</div>
		<div class="header__infos--commands">
			<div @click="isCardProfileActive" :title="user_message" ref="profileCard">
				<span>{{
					$store.state.employeeStore.employeeName.substring(0, 1)
				}}</span>
			</div>
			<div class="setting-ui" @click="isCardSettingActive">
				<Icon icon="majesticons:settings-cog" />
			</div>
			<ProfileCard
				@hiddenProfileCard="hiddenProfileCard"
				:class="{ isActive: setProfileCard }"
			/>
			<SettingCard
				@hiddenSettingCard="hiddenSettingCard"
				:class="{ isActive: setSettingCard }"
			/>
		</div>
	</header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ProfileCard from "@/components/Cards/ProfileCard.vue";
import { Icon } from "@iconify/vue";
import SettingCard from "../Cards/SettingCard.vue";

export default defineComponent({
	name: "Header",
	components: { ProfileCard, Icon, SettingCard },
	data() {
		return {
			user_message: `Clique aqui para acessar suas configuracoes`,
			setProfileCard: false,
			setSettingCard: false,
		};
	},
	methods: {
		isCardProfileActive() {
			this.setProfileCard = true;
		},

		hiddenProfileCard() {
			this.setProfileCard = false;
		},

		isCardSettingActive() {
			this.setSettingCard = true;
		},

		hiddenSettingCard() {
			this.setSettingCard = false;
		},
	},

	mounted() {
		const self: any = this.$refs.profileCard;
		document.addEventListener("click", (e: Event) => {
			if (self !== undefined && self.contains(e.target) === false) {
				this.setProfileCard = false;
			}
		});
	},
});
</script>

<style scoped lang="scss">
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	margin-bottom: 10px;
	background-color: #fff;
	border-radius: 8px;

	&--gretting {
		margin-bottom: 5px;
	}

	&__infos--commands {
		border-radius: 100%;
		border: none;
		cursor: pointer;
		display: flex;

		> div {
			display: flex;
			justify-content: space-between;
			align-items: center;

			span {
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 100%;
				color: #fff;
				font-size: 20px;
				width: 40px;
				height: 40px;
				background-color: rgb(247, 72, 72);
				cursor: pointer;
			}
		}

		.setting-ui {
			margin-left: 20px;

			svg {
				font-size: 35px;
			}
		}
	}
}
</style>
