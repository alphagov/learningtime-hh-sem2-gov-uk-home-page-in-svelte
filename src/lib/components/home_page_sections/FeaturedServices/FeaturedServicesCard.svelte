<script>
	/**
	 * @type {any}
	 */
	export let servicesData;
</script>

<div class="featured-services-card">
	<img class="featured-services-card__image" src={servicesData.img_src} alt={servicesData.alt} />
	<div class="featured-services-card__content">
		<a class="featured-services-card__content--link link-effects link--large link--bold" href={servicesData.web_url} >{servicesData.heading}</a>
		<p class="featured-service-card__content--text">{servicesData.content}</p>
	</div>
</div>

<style>
	.featured-services-card {
		position: relative;
		display: flex;
		height: 100%;
		column-gap: 10px;
		align-items: flex-start;
	}

	.featured-services-card__image {
		display: block;
		margin-right: auto;
		width: 80%;
		max-width: 220px;
		height: auto;
		margin-bottom: 10px;
	}

	.featured-services-card__content--link {
		width: 80%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.featured-services-card__content--link {
		text-decoration-thickness: 1px;
		text-size-adjust: 100%;
		text-underline-offset: 5px;
		width: fit-content;
	}

	.featured-services-card__content--link:hover {
		text-decoration-thickness: 3px;
	}

	.featured-services-card__content--link::after {
		bottom: 0px;
		content: '';
		display: block;
		left: 0px;
		position: absolute;
		right: 0px;
		top: 0px;
	}

	.featured-service-card__content--text {
		padding-top: 7.5px;
	}

	@media screen and (min-width: 600px) {

		.featured-services-card {
			display: block;
		}

		.featured-services-card__image {
			max-width: 90%;
		}
	}

</style>
