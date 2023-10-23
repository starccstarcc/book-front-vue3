<template>
	<header>
		<div class="main_header">
			<div class="header_search">
				<BaseInput placeholder="Teste" />
				<Icon icon="carbon:search" />
			</div>
			<div class="info_commands">
				<div @click="isCardProfileActive" :title="user_message" ref="profileCard">
					<span>{{ dataUser.name.substring(0, 1) }}</span>
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
		</div>
		<div class="router_domain">
			<strong>{{ $store.state.userStore.routerName }}</strong>
		</div>
	</header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { Icon } from "@iconify/vue";
import ProfileCard from "@/components/Cards/ProfileCard.vue";
import SettingCard from "@/components/Cards/SettingCard.vue";
import BaseInput from "../Inputs/BaseInput.vue";

export default defineComponent({
	name: "MainHeader",
	components: { ProfileCard, Icon, SettingCard, BaseInput },
	data() {
		return {
			dataUser: {
				name: this.$store.state.employeeStore.employeeName,
			},
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
.main_header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	margin-bottom: 10px;
	background-color: #272B3D;
	border-radius: 8px;

	.header_search {
		display: flex;
		align-items: center;
		font-size: 25px;

		svg {
			margin-left: 5px;
		}
	}

	.info_commands {
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
				color: #4a5b9e;
				font-size: 35px;
			}
		}
	}

}

.router_domain {
	padding: 10px;
}
</style>
