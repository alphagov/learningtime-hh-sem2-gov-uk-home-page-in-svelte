<script>
	import WidthContainer from '../../shared/WidthContainer.svelte';
	import SectionHeading from '../../shared/SectionHeading.svelte';
	import UnorderedListContainer from '../../shared/UnorderedListContainer.svelte';
	import FooterMeta from './FooterMeta.svelte';

	/**
	 * @type {any}
	 */
	 export let footerData;
</script>

<footer>
	<WidthContainer>
		<UnorderedListContainer>
			<div id="government-topics-two-thirds">
				<SectionHeading title="Topics" />
				<ul id="topics-list">
					{#each footerData.topics.items.links as linksData}
						<li><a href={linksData.web_url}>{linksData.heading}</a></li>
					{/each}
				</ul>
			</div>
			<div id="government-activity-one-third">
				<SectionHeading title="Government Activity" />
				<ul id="government-activity-list">
					{#each footerData.government_activity.items.links as linksData}
					<li><a href={linksData.web_url}>{linksData.heading}</a></li>
				{/each}
				</ul>
			</div>
		</UnorderedListContainer>
		<FooterMeta />
	</WidthContainer>
</footer>

<style>
	footer {
		background-color: var(--govuk-light-grey);
	}

	#government-activity-list {
		column-count: 1;
	}

	@media screen and (min-width: 600px) {
		ul {
			/* width: 66.66%; */
			column-width: auto;
			column-count: 2;
			column-gap: 15px;
		}
	}
</style>
