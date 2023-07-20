<div id="chevron-card-container">
	<ul id="chevron-card-ul">
		<slot />
	</ul>
</div>

<style>
	#chevron-card-ul {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
		gap: 15px;
		justify-content: space-between;
	}
</style>
