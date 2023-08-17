<script>
	import SearchItemWrapper from './SearchItemWrapper.svelte';
	import SectionHeading from '../../shared/SectionHeading.svelte';
	import WidthContainer from '../../shared/WidthContainer.svelte';

	/**
	 * @type {any}
	 */
	export let homepageLinksAndSearchData;
</script>

<section class="homepage-links-and-search">
	<WidthContainer>
		<div class="homepage-links-and-search__wrapper">
			<div class="homepage-links-and-search__content">
				<SectionHeading title="Popular on GOV.UK" />
				<ul class="homepage-links-and-search-list">
					{#each homepageLinksAndSearchData.items as { content, web_url }}
					<li class="homepage-links-and-search-list__item"><a class="link-effects link--medium link--bold" href={web_url}>{content}</a></li>
					{/each}
				</ul>
			</div>
			<div>
				<h3>Search</h3>
				<SearchItemWrapper />
			</div>
		</div>
	</WidthContainer>
</section>

<style>
	.homepage-links-and-search {
		background-color: var(--govuk-light-grey);
		padding-top: 30px;
		padding-bottom: 50px;
	}
	.homepage-links-and-search__wrapper {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.homepage-links-and-search__wrapper div {
		flex: 1;
	}

	.homepage-links-and-search-list__item:not(:last-child) {
		margin-bottom: 15px;
	}

	h3 {
		font-size: 20px;
		margin-bottom: 15px;
	}

	@media screen and (min-width: 600px) {
		.homepage-links-and-search__wrapper {
			flex-direction: row;
		}
	}
</style>
