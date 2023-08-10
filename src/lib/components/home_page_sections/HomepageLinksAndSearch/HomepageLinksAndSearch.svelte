<script>
	import SearchItemWrapper from './SearchItemWrapper.svelte';
	import SectionHeading from '../../shared/SectionHeading.svelte';
	import WidthContainer from '../../shared/WidthContainer.svelte';

	/**
	 * @type {any}
	 */
	export let homepageLinksAndSearchData;
</script>

<section id="homepage-links-and-search-section">
	<WidthContainer>
		<div id="links-and-search-container">
			<div>
				<SectionHeading title="Popular on GOV.UK" />
				<ul>
					{#each homepageLinksAndSearchData.items as { content, web_url }}
					<li><a href={web_url}>{content}</a></li>
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
	#homepage-links-and-search-section {
		background-color: var(--govuk-light-grey);
		padding-top: 30px;
		padding-bottom: 50px;
	}
	#links-and-search-container {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	#links-and-search-container > div {
		flex: 1;
	}

	a {
		display: block;
		font-weight: bold;
	}

	li {
		margin-bottom: 15px;
	}

	li:last-child {
		margin-bottom: 0px;
	}

	h3 {
		font-size: 20px;
		margin-bottom: 15px;
	}

	@media screen and (min-width: 600px) {
		#links-and-search-container {
			flex-direction: row;
		}
	}
</style>
