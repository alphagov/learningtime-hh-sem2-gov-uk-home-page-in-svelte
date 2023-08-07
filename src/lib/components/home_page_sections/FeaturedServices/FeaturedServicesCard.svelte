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
	}

	#inner {
		width: 80%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	a {
		font-size: 24px;
		font-weight: bold;
		
	}

	img {
		display: block;
		margin-right: auto;
		width: 80%;
		max-width: 150px;
		height: auto;
	}

	@media screen and (min-width: 600px) {

		#outer {
			display: block;
		}

		img {
			max-width: 90%;
		}
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

</style>
