<script>
	import SectionHeading from '../../shared/SectionHeading.svelte';
	import WidthContainer from '../../shared/WidthContainer.svelte';
	import FeaturedServicesCard from './FeaturedServicesCard.svelte';

	/**
	 * @type {any}
	 */
	 export let featuredServicesData;
</script>

<section id="featured-services-section">
	<WidthContainer>
		<SectionHeading title="Featured" />
		<div id="featured-services-container">
			{#each featuredServicesData.items.services as servicesData}
				<FeaturedServicesCard {servicesData} />
			{/each}
		</div>
	</WidthContainer>
</section>

<style>
	#featured-services-container {
		display: grid;
		grid-template-columns: 1fr;
		place-items: center;
	}

	@media screen and (min-width: 600px) {
		#featured-services-container {
			display: grid;
			column-gap: 15px;
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
