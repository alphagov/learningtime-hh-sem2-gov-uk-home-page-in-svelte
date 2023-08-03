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

<section id="services-and-info-section">
	<WidthContainer>
		<SectionHeading title="Topics" />
		<ChevronCardContainer>
			{#each servicesAndInfoData.items as chevronData}
			<ChevronCard chevronData={chevronData}/>
			{/each}
		</ChevronCardContainer>
	</WidthContainer>
</section>
