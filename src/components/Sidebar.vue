
<script setup>
	import { ref } from 'vue'
	import logoURL from '../assets/images/logo.svg'

	const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
</script>

<template>
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">
		<router-link to="/" class="logo">
				<img :src="logoURL" alt="Vue" /> 
		</router-link>

		<div class="menu">
			<router-link to="/customers" class="button">
				<span class="text">CUSTOMERS</span>
			</router-link>
			<router-link to="/products" class="button">
				<span class="text">PRODUCTS</span>
			</router-link>
			<router-link to="/users" class="button">
				<span class="text">USERS</span>
			</router-link>
		</div>
		<div class="flex"></div>
		
	</aside>
</template>

<style lang="scss" scoped>
*{
	font-family: 'OpenSans-Bold';
}

aside {
	display: flex;
	z-index: 99;
	flex-direction: column;
	background-color: #e9ecee;;
	position: fixed;
	overflow: hidden;
	height: 100%;
	transition: 0.2s ease-in-out;

	.flex{
		flex-grow: 1;
	
	}

	.button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	.menu {
		
		.button {
			display: flex;
			align-items: center;
			text-decoration: none;
			transition: 0.2s ease-in-out;
			flex-grow: 1;
			top: 0%;
			bottom: 0%;
		
			.text {
				color: #000000;
				transition: 0.2s ease-in-out;
			}

			&:hover {
				.text {
					color: #006bfD;
				}
			}

		}
	}


	&.is-expanded {
		width: var(--sidebar-width);

		.button .text {
			opacity: 1;
		}
	}

	
}

/* media */
@media (max-width: 2000px) {
	

	img {
		width: 3rem;
		margin-left: 1.5rem;
		margin-top: 1rem;
	}
	.menu{
		.button{
			padding: 1rem;
			margin: 0.5rem;
			font-size: medium;
		}

	}
	
	
}
@media (max-width: 1024px) {

	img {
		margin: 0.5rem;
		width: 2.5rem;
	}
	
	.menu{
		.button{
			padding: 0.5rem;
			margin: 0rem;
			font-size: small;
		}
	}
}
</style>