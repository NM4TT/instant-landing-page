<script lang="ts">
  import type { LandingPageConfig } from '#lib/types';
  import Hero from './Hero.svelte';
  import SocialProof from './SocialProof.svelte';
  import Benefits from './Benefits.svelte';
  import FeatureGrid from './FeatureGrid.svelte';
  import HowItWorks from './HowItWorks.svelte';
  import Pricing from './Pricing.svelte';
  import Closing from './Closing.svelte';
  import MinimalFooter from './MinimalFooter.svelte';

  interface Props {
    config: LandingPageConfig;
  }

  let { config }: Props = $props();
</script>

<main>
  {#each config.sections as section}
    {#if section.type === 'hero'}
      <Hero {section} />
    {:else if section.type === 'social_proof'}
      <SocialProof {section} />
    {:else if section.type === 'benefits'}
      <Benefits {section} />
    {:else if section.type === 'features'}
      <FeatureGrid {section} />
    {:else if section.type === 'how_it_works'}
      <HowItWorks {section} />
    {:else if section.type === 'pricing'}
      <Pricing {section} />
    {:else if section.type === 'closing'}
      <Closing {section} />
    {/if}
  {/each}
</main>

<MinimalFooter {config} />
