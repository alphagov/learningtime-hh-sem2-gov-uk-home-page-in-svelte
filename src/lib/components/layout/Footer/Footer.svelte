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
			<div class="footer__two-thirds-wrapper">
				<SectionHeading title="Topics" />
				<ul class="footer__list footer__list-topics">
					{#each footerData.topics.items.links as linksData}
						<li class="footer__list__item">
							<a class="footer__link link-effects link--small" href={linksData.web_url}
								>{linksData.heading}</a
							>
						</li>
					{/each}
				</ul>
			</div>
			<div class="footer__one-third-wrapper">
				<SectionHeading title="Government Activity" />
				<ul class="footer__list footer__list-activity">
					{#each footerData.government_activity.items.links as linksData}
						<li class="footer__list__item">
							<a class="footer__link link-effects link--small" href={linksData.web_url}
								>{linksData.heading}</a
							>
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

	.footer__list {
		padding-top: 20px;
		border-top-style: solid;
		border-top-color: var(--govuk-mid-grey);
		border-top-width: 1px;
	}

	.footer__list__item {
		margin-bottom: 20px;
	}

	.footer__link:visited {
		color: var(--govuk--black);
	}

	@media screen and (min-width: 600px) {
		.footer__list-topics {
			column-count: 2;
		}
	}
</style>
