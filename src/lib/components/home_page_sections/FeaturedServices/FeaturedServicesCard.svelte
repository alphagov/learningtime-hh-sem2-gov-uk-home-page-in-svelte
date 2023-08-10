<script>
	/**
	 * @type {any}
	 */
	export let servicesData;
</script>

<div id="outer">
	<img src={servicesData.img_src} alt={servicesData.alt} />
	<div id="inner">
		<a href={servicesData.web_url} class="chevron-card">{servicesData.heading}</a>
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

	p {
		padding-top: 7.5px;
	}

	a {
		font-size: 18px;
		font-weight: bold;
		text-decoration-thickness: 1px;
		text-size-adjust: 100%;
		text-underline-offset: 3.7872px;
	}

	img {
		display: block;
		margin-right: auto;
		width: 80%;
		max-width: 220px;
		height: auto;
		margin-bottom: 10px;
	}

	a::after {
		bottom: 0px;
		content: '';
		display: block;
		left: 0px;
		position: absolute;
		right: 0px;
		top: 0px;
	}

	@media screen and (min-width: 600px) {

		#outer {
			display: block;
		}

		a {
			font-size: 24px;
		}

		img {
			max-width: 90%;
		}
	}

</style>
