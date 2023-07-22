<script>
	import SectionHeading from '../../shared/SectionHeading.svelte';
	import WidthContainer from '../../shared/WidthContainer.svelte';
	import FeaturedServicesCard from './FeaturedServicesCard.svelte';
	import carersAllowance from '$lib/assets/carers-allowance.jpg';
	import checkYourContributions from '$lib/assets/check-your-contributions.jpg';
	import costOfLivingNovember from '$lib/assets/cost-of-living-november-2022.jpg';
</script>

<section id="featured-services-section">
	<WidthContainer>
		<SectionHeading title="Featured" />
		<div id="featured-services-container">
			<FeaturedServicesCard imgSrc={carersAllowance} />
			<FeaturedServicesCard imgSrc={checkYourContributions} />
			<FeaturedServicesCard imgSrc={costOfLivingNovember} />
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
