<script>
	import SearchItemWrapper from './SearchItemWrapper.svelte';
	import SectionHeading from '../../shared/SectionHeading.svelte';
	import WidthContainer from '../../shared/WidthContainer.svelte';
</script>

<section id="homepage-links-and-search-section">
	<WidthContainer>
		<div id="links-and-search-container">
			<div>
				<SectionHeading title="Popular on GOV.UK" />
				<a href="https://www.google.co.uk/">Get support with the cost of living</a>
				<a href="https://www.google.co.uk/">Get support with the cost of living</a>
				<a href="https://www.google.co.uk/"
					>Find out about help you can get with your energy bills</a
				>
				<a href="https://www.google.co.uk/">Find a job</a>
				<a href="https://www.google.co.uk/">Universal Credit account: sign in</a>
				<a href="https://www.google.co.uk/">Check your National Insurance record</a>
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
