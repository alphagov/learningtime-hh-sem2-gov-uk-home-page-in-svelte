<script>
	/**
	 * @type {any}
	 */
	export let chevronData;
</script>

<li class="chevron-card-list__item">
	<div class="chevron-card-list__item-content">
		<h3 class="chevron-card-list__item-heading">
			<a class="chevron-card-list__item-link link-effects link--medium link--bold" href={chevronData.web_url}>{chevronData.heading}</a>
		</h3>
		<p class="chevron-card-list__item-text">{chevronData.content}</p>
	</div>
</li>

<style>
	.chevron-card-list__item {
		border-top-color: var(--govuk-mid-grey);
		border-top-style: solid;
		border-top-width: 1px;
		padding-top: 5px;
		padding-bottom: 20px;
	}

	.chevron-card-list__item-content {
		padding-top: 10px;
		padding-bottom: 10px;
		position: relative;
	}

	.chevron-card-list__item-heading {
		margin-bottom: 10px;
	}

	.chevron-card-list__item-link:before {
		content: '';
		display: block;
		height: 7px;
		right: 2px;
		top: 16px;
		position: absolute;
		transform: translateY(0px) rotate(45deg) scale(1);
		width: 7px;
		border-right: 3px solid rgb(29, 112, 184);
		border-top: 3px solid rgb(29, 112, 184);
	}

	/* this hack makes the whole card clickable, stolen directly from gov.uk */
	.chevron-card-list__item-link:after {
		bottom: 0px;
		content: '';
		display: block;
		left: 0px;
		position: absolute;
		right: 0px;
		top: 0px;
	}
</style>
