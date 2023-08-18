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

<section class="government-activity">
	<WidthContainer>
		<UnorderedListContainer>
			<div class="government-activity__two-thirds-wrapper">
				<div class="government-activity__header-wrapper">
					<SectionHeading title="Government Activity" />
					<p class="government-activity__lead-paragraph">Find out what the government is doing</p>
				</div>
				<ChevronCardList>
					{#each governmentActivityData.items.chevrons as chevronData}
						<ChevronCardItem {chevronData} />
					{/each}
				</ChevronCardList>
			</div>
			<div class="government-activity__one-third-wrapper">
				<h2 class="government-activity__depts-heading">Departments and organisations</h2>
				<BigNumberContainer num={num_ministerial_depts} title="Ministerial Departments" />
				<BigNumberContainer num={num_other_agencies} title="Other agencies and public bodies" />
			</div>
		</UnorderedListContainer>
		<hr />
	</WidthContainer>
</section>

<style>
	.government-activity__two-thirds-wrapper,
	.government-activity__one-third-wrapper {
		border-top-style: solid;
		border-top-width: 2px;
		border-top-color: var(--govuk_black);
		padding-top: 15px;
	}

	.government-activity__header-wrapper {
		margin-bottom: 30px;
	}

	.government-activity__lead-paragraph {
		margin-top: -15px;
	}

	.government-activity__depts-heading {
		font-size: 26px;
	}

	@media screen and (min-width: 900px) {
		.government-activity__depts-heading {
			width: 210px; /* Force line break on "and" in heading to align BigNumberContainer by manually setting width */
			overflow-wrap: break-word;
		}
	}
</style>
