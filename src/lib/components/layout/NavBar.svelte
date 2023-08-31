<script>
	import WidthContainer from '../shared/WidthContainer.svelte';
</script>

<nav class="navbar">
	<WidthContainer>
		<div class="navbar__content">
			<h2 class="navbar__heading">GOV.UK</h2>
			<p class="navbar__menu">Menu Component</p>
			<div class=navbar__search>Search div</div>
		</div>
	</WidthContainer>
</nav>

<style>
	.navbar {
		background-color: black;
	}

	.navbar__content {
		display: flex;
		justify-content: space-between;
		color: white;
	}

	.navbar__menu {
		margin-left: auto;
	}
</style>
