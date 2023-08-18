<script>
	import BigNumberContainer from './BigNumberContainer.svelte';
	import ChevronCardItem from '../../shared/ChevronCardItem.svelte';
	import ChevronCardList from '../../shared/ChevronCardList.svelte';
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
				<ChevronCardList>
					{#each governmentActivityData.items.chevrons as chevronData}
						<ChevronCardItem {chevronData} />
					{/each}
				</ChevronCardList>
			</div>
			<div id="government-activity-one-third">
				<div>
					<h2>Departments and organisations</h2>
					<BigNumberContainer num={num_ministerial_depts} title="Ministerial Departments" />
					<BigNumberContainer num={num_other_agencies} title="Other agencies and public bodies" />
				</div>
			</div>
		</UnorderedListContainer>
		<hr />
	</WidthContainer>
</section>

<style>
	#government-activity-two-thirds,
	#government-activity-one-third {
		border-top-style: solid;
		border-top-width: 2px;
		border-top-color: var(--govuk_black);
		padding-top: 15px;
	}

	#government-activity-header-container {
		margin-bottom: 30px;
	}

	p {
		margin-top: -15px;
	}

	h2 {
		display: block;
		font-size: 26px;
	}

	@media screen and (min-width: 900px) {
		h2 {
			display: inline-block;
			width: 210px; /* Force line break on "and" in h2 to align BigNumberContainer, manually set width */
			overflow-wrap: break-word;
		}
	}
</style>
