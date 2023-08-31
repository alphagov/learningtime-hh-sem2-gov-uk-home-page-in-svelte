<script>
	import SectionHeading from '../../shared/SectionHeading.svelte';
	import WidthContainer from '../../shared/WidthContainer.svelte';
	import FeaturedServicesCard from './FeaturedServicesCard.svelte';

	/**
	 * @type {any}
	 */
	 export let featuredServicesData;
</script>

<section class="featured-services">
	<WidthContainer>
		<SectionHeading title="Featured" />
		<div class="featured-services-wrapper">
			{#each featuredServicesData.items.services as servicesData}
				<FeaturedServicesCard {servicesData} />
			{/each}
		</div>
		<hr>
	</WidthContainer>
</section>

<style>

	.featured-services {
		padding-top: 15px;
	}

	.featured-services-wrapper {
		padding-top: 10px;
		display: grid;
		grid-template-columns: 1fr;
		place-items: center;
		margin-bottom: 20px;
	}

	@media screen and (min-width: 600px) {
		.featured-services-wrapper {
			display: grid;
			column-gap: 15px;
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
