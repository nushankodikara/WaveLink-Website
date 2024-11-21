<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/sections/navbar.svelte';
	import Footer from '$lib/sections/footer.svelte';
</script>

<Navbar />
<slot />
<Footer />