<script>
	/**
	 * @type {any}
	 */
	export let num;
	/**
	 * @type {any}
	 */
	export let title;
</script>

<div class="big-number-container">
	<a
		class="big-number-container__link link-effects link--bold"
		href="https://www.google.co.uk/"
		style="--num:'{num}'; --title:'{title}';"
	>
		<!-- for some weird reason the num and title variables needs to be wrapped in quotes again??? This is a hack to allow props to change the before/after content value using CSS variables. This is difficult because before/after is not written directly in the html and javascript variables can't be interpolated into css directly -->
	</a>
</div>

<style>
	/* fit content inside the div so whole area is a tag hyperlink */
	.big-number-container {
		width: fit-content;
	}

	.big-number-container__link:not(:hover) {
		text-decoration-line: none;
	}

	/* Bug where hover effects aren't being applied from link-effects, could be issue using pseudo-elements. Duplicated code to make work. */
	.big-number-container__link:hover {
		text-decoration-thickness: max(3px, 0.1875rem, 0.12em);
		-webkit-text-decoration-skip-ink: none;
		text-decoration-skip-ink: none;
		-webkit-text-decoration-skip: none;
		text-decoration-skip: none;
		color: var(--govuk-dark-blue);
	}

	.big-number-container__link::before {
		content: var(--num);
		font-size: 5rem;
		display: block;
	}

	.big-number-container__link::after {
		content: var(--title);
	}
</style>
