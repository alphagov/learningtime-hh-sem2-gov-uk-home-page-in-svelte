<script>
	import WidthContainer from '../../shared/WidthContainer.svelte';
</script>

<section class="prompt-content">
	<WidthContainer>
		<div class="prompt-content-wrapper">
			<div class="prompt-question-wrapper">
				<ul class="prompt-question__list">
					<h4>Is this page useful?</h4>
					<li><button class="prompt-content__button">Yes</button></li>
					<li><button class="prompt-content__button">No</button></li>
				</ul>
			</div>
			<div class="prompt-problem-wrapper">
				<button class="prompt-content__button prompt-problem__button">Report a problem with this page</button>
			</div>
		</div>
	</WidthContainer>
</section>

<style>
	.prompt-content-wrapper {
		background-color: var(--govuk-light-grey);
		padding-left: 15px;
		padding-right: 15px;
		border-top-style: solid;
		border-top-color: var(--govuk-mid-grey);
		border-top-width: 1px;
	}

	.prompt-question-wrapper,
	.prompt-problem-wrapper {
		padding-top: 20px;
		padding-bottom: 20px;
		margin-right: 15px;
		margin-left: 15px;
	}

	.prompt-question__list {
		display: flex;
		gap: 8px;
		align-items: center;
	}

	.prompt-content__button {
		min-width: 60px;
		padding: 8px 8px 6px;
		border: 1px solid var(--govuk-black);
		border-bottom-width: 3px;
	}

	.prompt-problem__button {
		width: 100%;
	}

	@media screen and (min-width: 600px) {
		.prompt-content-wrapper {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
</style>
