<script>
	import '../app.css';
	import PageContentWrapper from '$lib/components/layout/PageContentWrapper.svelte';
	import NavBar from '$lib/components/layout/NavBar.svelte';
</script>

<PageContentWrapper>
	<NavBar />
	<slot />
</PageContentWrapper>
