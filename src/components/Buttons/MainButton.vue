<template>
	<button @click="$emit('actionEmmiter')" class="btn">
		{{ title_btn }}
	</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'MainButton',
	emits: ['actionEmmiter'],
	props: {
		title_btn: {
			type: String,
		},
	},
})
</script>
