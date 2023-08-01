<script>
	import WidthContainer from '../../shared/WidthContainer.svelte';
	import SectionHeading from '../../shared/SectionHeading.svelte';
	import UnorderedListContainer from '../../shared/UnorderedListContainer.svelte';
	import FooterMeta from './FooterMeta.svelte';
</script>

<footer>
	<WidthContainer>
		<UnorderedListContainer>
			<div id="government-topics-two-thirds">
				<SectionHeading title="Topics" />
				<ul id="topics-list">
					<li><a>Benefits</a></li>
					<li><a>Births, death, marriages and care</a></li>
					<li><a>Business and self-employed</a></li>
					<li><a>Childcare and parenting</a></li>
					<li><a>Citizenship and living in the UK</a></li>
					<li><a>Crime, justice and the law</a></li>
					<li><a>Disabled people</a></li>
					<li><a>Driving and transport</a></li>
					<li><a>Education and learning</a></li>
					<li><a>Employing people</a></li>
					<li><a>Environment and countryside</a></li>
					<li><a>Housing and local services</a></li>
					<li><a>Money and tax Passports, travel and living abroad</a></li>
					<li><a>Visas and immigration</a></li>
					<li><a>Working, jobs and pensions</a></li>
				</ul>
			</div>
			<div id="government-activity-one-third">
				<SectionHeading title="Government Activity" />
				<ul id="government-activity-list">
					<li><a>Benefits</a></li>
					<li><a>Births, death, marriages and care</a></li>
					<li><a>Business and self-employed</a></li>
					<li><a>Childcare and parenting</a></li>
					<li><a>Citizenship and living in the UK</a></li>
					<li><a>Crime, justice and the law</a></li>
					<li><a>Disabled people</a></li>
					<li><a>Driving and transport</a></li>
					<li><a>Education and learning</a></li>
					<li><a>Employing people</a></li>
					<li><a>Environment and countryside</a></li>
					<li><a>Housing and local services</a></li>
					<li><a>Money and tax Passports, travel and living abroad</a></li>
					<li><a>Visas and immigration</a></li>
					<li><a>Working, jobs and pensions</a></li>
				</ul>
			</div>
		</UnorderedListContainer>
    <FooterMeta />
	</WidthContainer>
</footer>

<style>
	footer {
		background-color: var(--govuk-light-grey);
	}

	#government-activity-list {
		column-count: 1;
	}

	@media screen and (min-width: 600px) {
		ul {
			/* width: 66.66%; */
			column-width: auto;
			column-count: 2;
			column-gap: 15px;
		}
	}
</style>
