<script>
	import BigNumberContainer from './BigNumberContainer.svelte';
	import ChevronCard from '../../shared/ChevronCard.svelte';
	import ChevronCardContainer from '../../shared/ChevronCardContainer.svelte';
	import SectionHeading from '../../shared/SectionHeading.svelte';
	import WidthContainer from '../../shared/WidthContainer.svelte';
	import UnorderedListContainer from '$lib/components/shared/UnorderedListContainer.svelte';

	/**
	 * @type {any}
	 */
	export let governmentActivityData;
	const num_ministerial_depts = governmentActivityData.items.depts_and_orgs.num_ministerial_depts;
	const num_other_agencies = governmentActivityData.items.depts_and_orgs.num_other_agencies;
</script>

<section id="government-activity-section">
	<WidthContainer>
		<UnorderedListContainer>
			<div id="government-activity-two-thirds">
				<div id="government-activity-header-container">
					<SectionHeading title="Government Activity" />
					<p>Find out what the government is doing</p>
				</div>
				<ChevronCardContainer>
					{#each governmentActivityData.items.chevrons as chevronData}
						<ChevronCard {chevronData} />
					{/each}
				</ChevronCardContainer>
			</div>
			<div id="government-activity-one-third">
				<div id="government-activity-header-container">
					<SectionHeading title="Departments and organisations" />
					<p>Find out what the government is doing</p>
					<BigNumberContainer num={num_ministerial_depts} title="Ministerial Departments" />
					<BigNumberContainer num={num_other_agencies} title="Other agencies and public bodies" />
				</div>
			</div>
		</UnorderedListContainer>
	</WidthContainer>
</section>
