<script>
	import WidthContainer from '../../shared/WidthContainer.svelte';
</script>

<section id="prompt-content-section">
	<WidthContainer>
		<div id="prompt-content-container">
			<div id="prompt-question">
				<ul>
					<h4>Is this page useful?</h4>
					<li><button>Yes</button></li>
					<li><button>No</button></li>
				</ul>
			</div>
			<div id="prompt-problem">
				<button>Report a problem with this page</button>
			</div>
		</div>
	</WidthContainer>
</section>

<style>

	#prompt-content-container {
		background-color: var(--govuk-light-grey);
		padding-left: 15px;
		padding-right: 15px;
		border-top-style: solid;
		border-top-color: var(--govuk-mid-grey);
		border-top-width: 1px;
	}

	#prompt-question, #prompt-problem {
		padding-top: 20px;
		padding-bottom: 20px;
		margin-right: 15px;
		margin-left: 15px;
	}

	ul {
		display: flex;
		gap: 8px;
		align-items: center;
	}

	button {
		min-width: 60px;
		padding: 8px 8px 6px;
		border: 1px solid var(--govuk-black);
		border-bottom-width: 3px;
	}

	#prompt-problem button {
		width: 100%;
	}

	@media screen and (min-width: 600px) {
		#prompt-content-container {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
</style>
