<script lang="ts">
  import type { HeroSection } from '#lib/types';

  interface Props {
    section: HeroSection;
  }

  let { section }: Props = $props();
</script>

<section class="relative py-20 overflow-hidden bg-surface">
  <div class="container mx-auto px-4 flex {section.layout === 'centered' ? 'flex-col text-center items-center' : 'flex-col md:flex-row items-center'} gap-12">
    <div class="flex-1">
      <h1 class="text-5xl md:text-7xl font-extrabold text-text leading-tight mb-6">
        {section.headline}
      </h1>
      <p class="text-xl text-text opacity-80 mb-10 max-w-2xl {section.layout === 'centered' ? 'mx-auto' : 'mx-auto md:mx-0'}">
        {section.subheadline}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 {section.layout === 'centered' ? 'justify-center' : 'justify-center md:justify-start'}">
        <a 
          href={section.cta.link}
          class="btn-primary"
        >
          {section.cta.label}
        </a>
      </div>
    </div>
    
    {#if section.visual}
      <div class="flex-1 w-full max-w-xl">
        <div 
          class="relative overflow-hidden transition-transform duration-500"
          style="border-radius: var(--radius-lg); border-width: var(--border-width); border-color: var(--color-border); box-shadow: var(--shadow-style);"
        >
          <img 
            src={section.visual} 
            alt={section.headline}
            class="w-full h-auto object-cover"
          />
        </div>
      </div>
    {/if}
  </div>
</section>

<style>
  .bg-surface {
    background-color: var(--color-surface, #f8fafc);
  }
  .text-text {
    color: var(--color-text, #0f172a);
  }
</style>
