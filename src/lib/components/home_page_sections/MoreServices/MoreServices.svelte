<script>
	import SectionHeading from '../../shared/SectionHeading.svelte';
	import WidthContainer from '../../shared/WidthContainer.svelte';

	/**
	 * @type {{ items: { links: any; }; }}
	 */
	 export let moreServicesData;
</script>

<section id="featured-services-section">
	<WidthContainer>
		<SectionHeading title="More on GOV.UK" />
		<ul id="more-services-list">
			{#each moreServicesData.items.links as linksData}
				<li><a href={linksData.web_url}>{linksData.content}</a></li>
			{/each}
		</ul>
	</WidthContainer>
</section>

<style>
	ul {
		column-count: 1;
	}

	@media screen and (min-width: 600px) {
		ul {
			width: 66.66%;
			column-width: auto;
			column-count: 2;
			column-gap: 15px;
		}
	}
</style>
