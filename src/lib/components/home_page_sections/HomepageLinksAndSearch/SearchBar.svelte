<div class="searchbar-wrapper">
	<h3 class="searchbar__heading">Search</h3>
	<form class="searchbar__form">
		<input type="text"/>
		<button type="submit">X</button>
	</form>
</div>

<style>
	.searchbar-wrapper {
		flex-grow: 1;
	} 

	.searchbar__heading {
		font-size: 20px;
		margin-bottom: 15px;
	}

	.searchbar__form {
		display: flex;
	}

	.searchbar__form input {
		flex-grow: 1;
		max-width: 340px;
	}

	.searchbar__form button {
		color: white;
		padding: 5px;
		background-color: var(--govuk-blue);
	}
</style>
