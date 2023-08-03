<script>
	import HomepageHeader from '$lib/components/home_page_sections/HomepageHeader/HomepageHeader.svelte';
	import HomepageLinksAndSearch from '$lib/components/home_page_sections/HomepageLinksAndSearch/HomepageLinksAndSearch.svelte';
	import ServicesAndInfo from '$lib/components/home_page_sections/ServicesAndInfo/ServicesAndInfo.svelte';
	import GovernmentActivity from '$lib/components/home_page_sections/GovernmentActivity/GovernmentActivity.svelte';
	import FeaturedServices from '$lib/components/home_page_sections/FeaturedServices/FeaturedServices.svelte';
	import MoreServices from '$lib/components/home_page_sections/MoreServices/MoreServices.svelte';
	import PromptContent from '$lib/components/home_page_sections/PromptContent/PromptContent.svelte';

	export let data;

</script>

<main>
	<HomepageHeader />
	<HomepageLinksAndSearch homepageLinksAndSearchData={data.data.homepage_links_and_search}/>
	<ServicesAndInfo servicesAndInfoData={data.data.services_and_info}/>
	<GovernmentActivity governmentActivityData={data.data.government_activity}/>
	<FeaturedServices featuredServicesData={data.data.featured_services}/>
	<MoreServices />
	<PromptContent />
</main>
