<script lang="ts">
	export let imgSrc: string;
</script>

<div id="outer">
	<img src={imgSrc} alt="" />
	<div id="inner">
		<a href="https://www.google.com/" class="chevron-card"> sample chevron card </a>
		<p>Some content would be written here</p>
	</div>
</div>

<style>
	#outer {
		position: relative;
		display: flex;
	}

	img {
		display: block;
		margin: auto;
		width: 80%;
		max-width: 150px;
		height: auto;
	}

	@media screen and (min-width: 600px) {

		#outer {
			display: block;
		}

		img {
			max-width: 250px;
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
