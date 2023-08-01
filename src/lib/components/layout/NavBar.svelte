<script>
	import WidthContainer from '../shared/WidthContainer.svelte';
</script>

<nav>
	<WidthContainer>
		<div>
			<h2>GOV.UK</h2>
			<p>Menu Component</p>
			<div>Search div</div>
		</div>
	</WidthContainer>
</nav>

<style>
	nav {
		background-color: black;
	}

	div {
		display: flex;
		justify-content: space-between;
		color: white;
	}

	nav :nth-child(2) {
		margin-left: auto;
	}
</style>
