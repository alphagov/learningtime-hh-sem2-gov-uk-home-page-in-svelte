<script>
	import WidthContainer from '../../shared/WidthContainer.svelte';
	import ChevronCardItem from '../../shared/ChevronCardItem.svelte';
	import SectionHeading from '../../shared/SectionHeading.svelte';
	import ChevronCardList from '../../shared/ChevronCardList.svelte';

	/**
	 * @type {{ items: any; }}
	 */
	 export let servicesAndInfoData;
</script>

<section class="services-and-info">
	<WidthContainer>
		<SectionHeading title="Topics" />
		<ChevronCardList>
			{#each servicesAndInfoData.items.chevrons as chevronData}
			<ChevronCardItem chevronData={chevronData}/>
			{/each}
		</ChevronCardList>
	</WidthContainer>
</section>

<style>

	.services-and-info {
		padding-top: 30px;
	}

</style>