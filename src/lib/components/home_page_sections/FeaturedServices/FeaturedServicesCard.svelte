<script>
	/**
	 * @type {any}
	 */
	export let servicesData;
</script>

<div id="outer">
	<img src={servicesData.img_src} alt={servicesData.alt} />
	<div id="inner">
		<a class="featured-services-card__link link-effects link--large link--bold" href={servicesData.web_url} >{servicesData.heading}</a>
		<p>{servicesData.content}</p>
	</div>
</div>

<style>
	#outer {
		position: relative;
		display: flex;
		height: 100%;
		column-gap: 10px;
		align-items: flex-start;
	}

	#inner {
		width: 80%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.featured-services-card__link {
		text-decoration-thickness: 1px;
		text-size-adjust: 100%;
		text-underline-offset: 5px;
		width: fit-content;
	}

	.featured-services-card__link:hover {
		text-decoration-thickness: 3px;
	}

	.featured-services-card__link::after {
		bottom: 0px;
		content: '';
		display: block;
		left: 0px;
		position: absolute;
		right: 0px;
		top: 0px;
	}

	p {
		padding-top: 7.5px;
	}

	img {
		display: block;
		margin-right: auto;
		width: 80%;
		max-width: 220px;
		height: auto;
		margin-bottom: 10px;
	}

	@media screen and (min-width: 600px) {

		#outer {
			display: block;
		}

		img {
			max-width: 90%;
		}
	}

</style>
