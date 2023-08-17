<script>
	import WidthContainer from '../../shared/WidthContainer.svelte';
	import ChevronCard from '../../shared/ChevronCard.svelte';
	import SectionHeading from '../../shared/SectionHeading.svelte';
	import ChevronCardContainer from '../../shared/ChevronCardContainer.svelte';

	/**
	 * @type {{ items: any; }}
	 */
	 export let servicesAndInfoData;
</script>

<section class="services-and-info">
	<WidthContainer>
		<SectionHeading title="Topics" />
		<ChevronCardContainer>
			{#each servicesAndInfoData.items.chevrons as chevronData}
			<ChevronCard chevronData={chevronData}/>
			{/each}
		</ChevronCardContainer>
	</WidthContainer>
</section>

<style>

	.services-and-info {
		padding-top: 30px;
	}

</style>