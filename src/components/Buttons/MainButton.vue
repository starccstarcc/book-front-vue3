<template>
	<button @click="$emit('actionEmmiter')" class="btn">
		<slot></slot>
	</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'MainButton',
	emits: ['actionEmmiter'],
});
</script>

<style lang="scss" scoped>
.btn {
	padding: 10px 18px;
	font-size: 1rem;
	border: 1px solid #cfcece;
	border-radius: 16px;
	width: 120px;
	cursor: pointer;
}
</style>
