<script>
	import BigNumberContainer from './BigNumberContainer.svelte';
	import ChevronCard from '../../shared/ChevronCard.svelte';
	import ChevronCardContainer from '../../shared/ChevronCardContainer.svelte';
	import SectionHeading from '../../shared/SectionHeading.svelte';
	import WidthContainer from '../../shared/WidthContainer.svelte';
	import UnorderedListContainer from '$lib/components/shared/UnorderedListContainer.svelte';
</script>

<section id="government-activity-section">
	<WidthContainer>
		<UnorderedListContainer>
			<div id="government-activity-two-thirds">
				<div id="government-activity-header-container">
					<SectionHeading title="Government Activity" />
					<p>Find out what the government is doing</p>
				</div>
				<ChevronCardContainer>
					<ChevronCard />
					<ChevronCard />
					<ChevronCard />
					<ChevronCard />
					<ChevronCard />
					<ChevronCard />
				</ChevronCardContainer>
			</div>
			<div id="government-activity-one-third">
				<div id="government-activity-header-container">
					<SectionHeading title="Departments and organisations" />
					<p>Find out what the government is doing</p>
					<BigNumberContainer />
					<BigNumberContainer />
				</div>
			</div>
		</UnorderedListContainer>
	</WidthContainer>
</section>
