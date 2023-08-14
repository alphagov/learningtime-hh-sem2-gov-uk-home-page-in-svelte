<script>
	import SectionHeading from '../../shared/SectionHeading.svelte';
	import WidthContainer from '../../shared/WidthContainer.svelte';

	/**
	 * @type {{ items: { links: any; }; }}
	 */
	export let moreServicesData;
</script>

<section id="more-services-section">
	<WidthContainer>
		<SectionHeading title="More on GOV.UK" />
		<ul id="more-services-list">
			{#each moreServicesData.items.links as linksData}
				<li><a class="link-effects link--medium" href={linksData.web_url}>{linksData.content}</a></li>
			{/each}
		</ul>
	</WidthContainer>
</section>

<style>

	#more-services-section {
		padding-top: 15px;
		padding-bottom: 120px;
	}

	li {
		margin-bottom: 20px;
	}

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
