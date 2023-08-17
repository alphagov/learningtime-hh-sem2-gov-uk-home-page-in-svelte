<script>
	import WidthContainer from '../../shared/WidthContainer.svelte';
</script>

<header class="homepage-header">
	<WidthContainer>
		<h1 class="homepage-header__heading">Welcome to GOV.UK</h1>
		<p class="homepage-header__intro">The best place to find government service and information</p>
		<p class="homepage-header__intro--bold">Simpler, clearer, faster</p>
	</WidthContainer>
</header>

<style>
	.homepage-header {
		color: var(--govuk-white);
		background-color: var(--govuk-blue);
		padding-top: 60px;
		padding-bottom: 50px;
	}

	.homepage-header__heading {
		padding-bottom: 30px;
	}

	.homepage-header__intro {
		padding-bottom: 10px;
	}

	.homepage-header__intro--bold {
		font-weight: bold;
	}
</style>
