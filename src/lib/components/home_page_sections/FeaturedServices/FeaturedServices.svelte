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
		<hr>
	</WidthContainer>
</section>

<style>

	#featured-services-section {
		padding-top: 15px;
	}

	#featured-services-container {
		padding-top: 10px;
		display: grid;
		grid-template-columns: 1fr;
		place-items: center;
		margin-bottom: 20px;
	}

	@media screen and (min-width: 600px) {
		#featured-services-container {
			display: grid;
			column-gap: 15px;
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
