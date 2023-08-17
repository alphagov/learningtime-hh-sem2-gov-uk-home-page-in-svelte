<script>
	import govCrest from '$lib/assets/govuk-crest.png';
</script>

<div id="footer-meta">
	<div id="footer-meta-text-container">
		<ul id="footer-meta-list">
			<li><a class="footer__link link-effects link--small" href="https://www.gov.uk/help">Help</a></li>
			<li>
				<a class="footer__link link-effects link--small" href="https://www.gov.uk/help/privacy-notice">Privacy</a
				>
			</li>
			<li>
				<a class="footer__link link-effects link--small" href="https://www.gov.uk/help/cookies">Cookies</a>
			</li>
			<li>
				<a class="footer__link link-effects link--small" href="https://www.gov.uk/help/accessibility-statement"
					>Accessibility statement</a
				>
			</li>
			<li><a class="footer__link link-effects link--small" href="https://www.gov.uk/contact">Contact</a></li>
			<li>
				<a class="footer__link link-effects link--small" href="https://www.gov.uk/help/terms-conditions"
					>Terms and conditions</a
				>
			</li>
			<li>
				<a class="footer__link link-effects link--small" href="https://www.gov.uk/cymraeg"
					>Rhestr o Wasanaethau Cymraeg</a
				>
			</li>
			<li>
				<a
					class="footer__link link-effects link--small"
					href="https://www.gov.uk/government/organisations/government-digital-service"
					>Government Digital Service</a
				>
			</li>
		</ul>
		<svg
			aria-hidden="true"
			focusable="false"
			class="govuk-footer__licence-logo"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 483.2 195.7"
			height="17"
			width="41"
		>
			<path
				fill="currentColor"
				d="M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.6 25.4l19.4 22.2h3v-87.8h-80l24.3 27.5zM97.8 145c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.2 21 47.2 47S123.8 145 97.8 145"
			/>
		</svg>
		<span id="footer-meta-license-description">
			All content is available under the <a
				class="footer__link link-effects link--small"
				href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
				>Open Government Licence v3.0</a
			>, except where otherwise stated</span
		>
	</div>
	<div id="footer-meta-img-container">
		<img src={govCrest} alt="gov crest" />
		<a
			class="footer__link link-effects link--small"
			href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/"
			target="_blank"
		>
			© Crown copyright</a
		>
	</div>
</div>

<style>

	.footer__link:visited {
		color: var(--govuk--black);
	}

	#footer-meta {
		display: flex;
		flex-direction: column;
		padding-top: 50px;
		margin-top: 50px;
		border-top-style: solid;
    border-top-color: var(--govuk-mid-grey);
    border-top-width: 1px;
		padding-bottom: 30px;
	}

	#footer-meta-text-container {
		width: 65%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	#footer-meta-list {
		margin-bottom: 10px;
	}

	#footer-meta-list li {
		display: inline-block;
		margin-right: 15px;
		margin-bottom: 5px;
	}

	img {
		width: 150px;
	}

	#footer-meta-img-container {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		align-items: center;
	}

	@media screen and (min-width: 600px) {
		#footer-meta {
			flex-direction: row;
			flex-wrap: wrap;
		}
	}

</style>
