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
						<li>
							<a class="footer__link link-effects link--small" href={linksData.web_url}>{linksData.heading}</a>
						</li>
					{/each}
				</ul>
			</div>
			<div id="government-activity-one-third">
				<SectionHeading title="Government Activity" />
				<ul id="government-activity-list">
					{#each footerData.government_activity.items.links as linksData}
						<li>
							<a class="footer__link link-effects link--small" href={linksData.web_url}>{linksData.heading}</a>
						</li>
					{/each}
				</ul>
			</div>
		</UnorderedListContainer>
		<FooterMeta />
	</WidthContainer>
</footer>

<style>
	footer {
		border-top: 10px solid var(--govuk-blue);
		background-color: var(--govuk-light-grey);
		padding-top: 40px;
	}

	.footer__link:visited {
		color: var(--govuk--black);
	}

	#government-activity-list {
		column-count: 1;
		padding-top: 20px;
		border-top-style: solid;
    border-top-color: var(--govuk-mid-grey);
    border-top-width: 1px;
	}

	#topics-list {
		padding-top: 20px;
		border-top-style: solid;
    border-top-color: var(--govuk-mid-grey);
    border-top-width: 1px;
	}

	li {
		margin-bottom: 20px;
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
