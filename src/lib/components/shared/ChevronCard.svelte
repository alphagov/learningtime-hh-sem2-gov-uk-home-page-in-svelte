<li>
	<div>
		<h3>
			<a href="https://www.google.com/" class="chevron-card"> sample chevron card </a>
			<p>Some content would be written here</p>
		</h3>
	</div>
</li>

<style>
	div {
		padding: 10px 10px;
		position: relative;
	}

	p {
		font-weight: normal;
	}

	.chevron-card {
		display: block;
	}

	.chevron-card::before {
		content: '';
		display: block;
		height: 7px;
		right: 0px;
		top: 16px;
		position: absolute;
		transform: translateY(0px) rotate(45deg) scale(1);
		width: 7px;
		border-right: 3px solid rgb(29, 112, 184);
		border-top: 3px solid rgb(29, 112, 184);
	}

	/* this hack makes the whole card clickable, stoeln directly from gov.uk */
	.chevron-card::after {
		bottom: 0px;
		content: '';
		display: block;
		left: 0px;
		position: absolute;
		right: 0px;
		top: 0px;
	}
</style>
