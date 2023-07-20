<script>
	import SectionHeading from '../../shared/SectionHeading.svelte';
	import WidthContainer from '../../shared/WidthContainer.svelte';
</script>

<section id="featured-services-section">
	<WidthContainer>
		<SectionHeading title="More on GOV.UK" />
		<ul id="more-services-list">
			<li><a href="https://www.google.co.uk/">some list item with an anchor tag</a></li>
			<li><a href="https://www.google.co.uk/">some list item with an anchor tag</a></li>
			<li><a href="https://www.google.co.uk/">some list item with an anchor tag</a></li>
			<li><a href="https://www.google.co.uk/">some list item with an anchor tag</a></li>
			<li><a href="https://www.google.co.uk/">some list item with an anchor tag</a></li>
			<li><a href="https://www.google.co.uk/">some list item with an anchor tag</a></li>
			<li><a href="https://www.google.co.uk/">some list item with an anchor tag</a></li>
			<li><a href="https://www.google.co.uk/">some list item with an anchor tag</a></li>
			<li><a href="https://www.google.co.uk/">some list item with an anchor tag</a></li>
			<li><a href="https://www.google.co.uk/">some list item with an anchor tag</a></li>
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
