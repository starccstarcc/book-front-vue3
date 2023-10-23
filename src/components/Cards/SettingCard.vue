<template>
	<div class="card-setting">
		<Icon icon="carbon:close" @click="$emit('hiddenSettingCard')" />
		<div class="card-rows">
			<div class="header-title">
				<h2>Configuracoes da plataforma</h2>
				<p>Veja as opcoes para customizar a interface</p>
			</div>
			<div class="setting-container">
				<h4>Cores de plano de fundo</h4>
				<div class="color-rule">
					<div class="color-circle" id="default"></div>
					<div class="color-circle" id="orange-bg"></div>
					<div
						class="color-circle"
						id="dark-bg"
						@click="setCustomerDarkColor"
					></div>
					<div class="color-circle" id="green-bg"></div>
					<div class="color-circle" id="darkblue-bg"></div>
					<div class="color-circle" id="red-bg"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Icon } from "@iconify/vue";
import { defineComponent } from "vue";

export default defineComponent({
	name: "SettingCard",
	components: { Icon },
	emits: ["hiddenSettingCard"],
	data() {
		return {
			setCustomerColor: false,
		};
	},

	methods: {
		setCustomerDarkColor() {
			this.setCustomerColor = true;
		},
	},
});
</script>

<style scoped lang="scss">
.card-setting {
	box-shadow: -2px -2px 10px #00000045;
	padding: 25px;
	background-color: #fff;
	position: fixed;
	top: 0;
	right: 0;
	right: -100%;
	z-index: 2005;
	height: 100vh;
	width: 450px;
	transition: right 0.3s ease-in-out;
	cursor: default;

	svg {
		position: absolute;
		top: 20px;
		right: 20px;
		font-size: 25px;
		cursor: pointer;
		z-index: 1000;
	}

	.card-rows {
		height: 100%;
		width: 100%;

		.header-title {
			h2 {
				margin-bottom: 10px;
			}
		}

		.setting-container {
			margin-top: 30px;
		}

		.color-rule {
			padding: 10px 0;
			display: flex;

			.color-circle {
				width: 30px;
				height: 30px;
				border-radius: 100%;
				margin: 0 10px;
				cursor: pointer;
			}
		}
	}
}

#dark-bg {
	background-color: #121212;
}

#orange-bg {
	background-color: #ffa600;
}

#default {
	background-color: #91c3f5;
}

#green-bg {
	background-color: #00ff00;
}

#darkblue-bg {
	background-color: #344767;
}

#red-bg {
	background-color: #df2626;
}

.isActive {
	right: 0;
	//transition: All cubic-bezier(0.68, -0.55, 0.265, 1.55);
	transition: right 0.3s ease-in-out;
}
</style>
