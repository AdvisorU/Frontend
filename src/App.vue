<template>
	<main>
		<RouterView />
	</main>
</template>

<script>
import { RouterView } from 'vue-router';

export default {
	name: 'App',
	components: {
		RouterView,
	},
};
</script>

<style scoped>
main {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
</style>
