<script>
	import HomepageHeader from '$lib/components/home_page_sections/HomepageHeader/HomepageHeader.svelte';
	import HomepageLinksAndSearch from '$lib/components/home_page_sections/HomepageLinksAndSearch/HomepageLinksAndSearch.svelte';
	import ServicesAndInfo from '$lib/components/home_page_sections/ServicesAndInfo/ServicesAndInfo.svelte';
	import GovernmentActivity from '$lib/components/home_page_sections/GovernmentActivity/GovernmentActivity.svelte';
	import FeaturedServices from '$lib/components/home_page_sections/FeaturedServices/FeaturedServices.svelte';
	import MoreServices from '$lib/components/home_page_sections/MoreServices/MoreServices.svelte';
	// import PromptContent from '$lib/components/home_page_sections/PromptContent/PromptContent.svelte';
</script>

<main>
	<HomepageHeader />
	<HomepageLinksAndSearch />
	<ServicesAndInfo />
	<GovernmentActivity />
	<FeaturedServices />
	<MoreServices />
	<!-- <PromptContent /> -->
</main>
