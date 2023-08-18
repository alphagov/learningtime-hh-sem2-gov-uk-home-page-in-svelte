<ul class="chevron-card-list">
	<slot />
</ul>

<style>
	.chevron-card-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
		gap: 15px;
		justify-content: space-between;
	}
</style>
