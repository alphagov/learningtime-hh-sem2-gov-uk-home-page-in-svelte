<script>
	import '../app.css';
	import NavBar from '$lib/components/layout/NavBar.svelte';
	import Footer from '$lib/components/layout/Footer/Footer.svelte';

	export let data;
</script>

<NavBar />
<slot />
<Footer footerData={data.data.footer}/>
