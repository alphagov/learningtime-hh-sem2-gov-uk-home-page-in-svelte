<script>
	import SectionHeading from '../../shared/SectionHeading.svelte';
	import WidthContainer from '../../shared/WidthContainer.svelte';

	/**
	 * @type {{ items: { links: any; }; }}
	 */
	export let moreServicesData;
</script>

<section class="more-services">
	<WidthContainer>
		<SectionHeading title="More on GOV.UK" />
		<ul class="more-services__list">
			{#each moreServicesData.items.links as linksData}
				<li class="more-services__list-item">
					<a class="link-effects link--medium" href={linksData.web_url}>{linksData.content}</a>
				</li>
			{/each}
		</ul>
	</WidthContainer>
</section>

<style>
	.more-services {
		padding-top: 15px;
		padding-bottom: 120px;
	}

	.more-services__list {
		column-count: 1;
	}

	.more-services__list-item {
		margin-bottom: 20px;
	}

	@media screen and (min-width: 600px) {
		.more-services__list {
			width: 66.66%;
			column-width: auto;
			column-count: 2;
			column-gap: 15px;
		}
	}
</style>
