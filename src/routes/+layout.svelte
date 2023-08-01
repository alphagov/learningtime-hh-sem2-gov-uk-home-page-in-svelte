<script>
	import '../app.css';
	import PageContentWrapper from '$lib/components/layout/PageContentWrapper.svelte';
	import NavBar from '$lib/components/layout/NavBar.svelte';
	import Footer from '$lib/components/layout/Footer/Footer.svelte';
</script>

<PageContentWrapper>
	<NavBar />
	<slot />
	<Footer/>
</PageContentWrapper>
