<script>
	import SearchItemWrapper from './SearchItemWrapper.svelte';
	import SectionHeading from '../../shared/SectionHeading.svelte';
	import WidthContainer from '../../shared/WidthContainer.svelte';

	/**
	 * @type {any}
	 */
	 export let homepageData;
</script>

<section id="homepage-links-and-search-section">
	<WidthContainer>
		<div id="links-and-search-container">
			<div>
				<SectionHeading title="Popular on GOV.UK" />
				<ul>
					{#each homepageData as { content, web_url }}
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
	}

	@media screen and (min-width: 600px) {
		#links-and-search-container {
			flex-direction: row;
		}
	}
</style>
