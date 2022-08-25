<template>
	<div class="app">	
		<Sidebar />	
    <main>
		<router-view />
    </main>
	</div>
</template>
<script>
import Sidebar from './components/Sidebar.vue'

export default {
  name: "App",
  components: {
    Sidebar
  }
}

</script>
<style>
:root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 200px;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
}
body {
	background: var(--light);
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
}
main {
  flex: 1 1 0;
	padding: 2rem;
}

</style>
