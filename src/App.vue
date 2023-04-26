<script setup>
	
	import AppLoader from './components/AppLoader.vue'
	import { onMounted , ref } from 'vue'
	

	function closeLoader(){
		isAppLoading.value = false;
	}
	onMounted(() => {

		setTimeout(closeLoader, 3000);
	})

	const isAppLoading = ref(true);

</script>

<template>
	<div class="app">
		<!--App Loading Screen-->
		<AppLoader v-if='isAppLoading' /> 
		<!-- Sidebar -->
		<Sidebar v-if="!isAppLoading" />
		
		<router-view v-if="!isAppLoading"/>
	</div>
</template>


<style lang="scss">

:root {
	--white: #ffffff;
    --black: #000000;
    --blue: #006bfD;
    --lightblue: #4a96ff;
    --grey: #e9ecee;
    --red: #d32f2f;
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

/* fonts */
@font-face{
    font-family: 'OpenSans-Bold';
    src:url(assets/fonts/OpenSans/OpenSans-Bold.ttf)
}
@font-face{
    font-family: 'OpenSans-SemiBold';
    src:url(assets/fonts/OpenSans/OpenSans-SemiBold.ttf)
}
@font-face {
    font-family: 'OpenSans-Regular';
    src: url(assets/fonts/OpenSans/OpenSans-Regular.ttf);
}
@font-face {
    font-family: 'OpenSans-Medium';
    src: url(assets/fonts/OpenSans/OpenSans-Medium.ttf);
}
@font-face {
    font-family: 'OpenSans-ExtraBold';
    src: url(assets/fonts/OpenSans/OpenSans-ExtraBold.ttf);
}
 
body {
	background: var(--white)
}
button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}
.app {
	display: flex;
	main {
		flex: 1 1 0;
		padding-right: 0%;
		margin-right: 0%;
	
	}
}
</style>