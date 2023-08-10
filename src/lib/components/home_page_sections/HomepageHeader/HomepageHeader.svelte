<script>
	import WidthContainer from '../../shared/WidthContainer.svelte';
</script>

<header>
	<WidthContainer>
		<h1>Welcome to GOV.UK</h1>
		<p>The best place to find government service and information</p>
		<p><span>Simpler, clearer, faster</span></p>
	</WidthContainer>
</header>

<style>
	header {
		color: var(--govuk-white);
		background-color: var(--govuk-blue);
		padding-top: 60px;
		padding-bottom: 50px;
	}

	p {
		padding-bottom: 10px;
	}

	p span {
		font-weight: bold;
	}

	h1 {
		padding-bottom: 30px;
	}
</style>
