<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">

		<div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
				<span class="material-icons">keyboard_double_arrow_right</span>
			</button>
		</div>
		<h3>Menu</h3>
		<div class="menu">
			<router-link to="/user" class="button">
				<span class="material-icons">group</span>
				<span class="text">Usuários</span>
			</router-link>
	
				<!-- <router-link to="/" class="button">
					<span class="material-icons">home</span>
					<span class="text">Home</span>
				</router-link>
						<router-link to="/list" class="button">
				<span class="material-icons">description</span>
				<span class="text">List</span>
			</router-link>
			<router-link to="/contact" class="button">
				<span class="material-icons">email</span>
				<span class="text">Contact</span>
			</router-link>
			-->
		</div>

		<div class="flex"></div>

	</aside>
</template>

<script setup>
import {ref} from 'vue'
const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = ()=> {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
}

</script>

<style scoped>
aside {
	display: flex;
	flex-direction: column;
	background-color: var(--dark);
	color: var(--light);
	width: calc(2rem + 32px);
	min-height: 100vh;
	padding: 1rem;
	transition: 0.2s ease-in-out;
}
.menu-toggle-wrap {
	display: flex;
	justify-content: flex-end;
	margin-bottom: 1rem;
	position: relative;
	top: 0;
	transition: 0.2s ease-out;
}
.menu-toggle {
	transition: 0.2s ease-out
}
.material-icons {
	font-size: 2rem;
	color: var(--light);
	transition: 0.2s ease-out;
	margin-right: 10px;
}
h3, .button .text {
	opacity: 0;
	transition: 0.3s ease-out;
}

.is-expanded{
	width: var(--sidebar-width);
}
.is-expanded .button .text{
	opacity: 1;
}
.is-expanded h3 {
	opacity: 1;
}
.is-expanded .menu-toggle {
	transform: rotate(-180deg);
}
.material-icons:hover {
		color: var(--primary);
		transform: translateX(0.5rem);
}		
.menu {
	margin: 0 -1rem;
}
.button {
	display:  flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	transition: 0.2s ease-out;
}
.text {
	color: var(--light);
		transition: 0.2s ease-out;
}
.button:hover {
	background-color: var(--dark-alt);
}
.material-icons:hover , .text:hover{
	color: var(--primary);
}
.is-expanded .button {
	margin-right: 1rem;
}
</style>