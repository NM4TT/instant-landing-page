<script lang="ts">
  import type { BenefitsSection } from '#lib/types';

  interface Props {
    section: BenefitsSection;
  }

  let { section }: Props = $props();
</script>

<section class="py-24 bg-surface">
  <div class="container mx-auto px-4">
    {#if section.title}
      <h2 class="text-4xl md:text-5xl font-bold text-center text-text mb-20">
        {section.title}
      </h2>
    {/if}

    {#if section.layout === 'grid'}
      <div class="flex flex-wrap justify-center gap-12">
        {#each section.items as item}
          <div 
            class="flex-1 min-w-[300px] max-w-sm p-8 bg-white"
            style="border-radius: var(--radius-lg); border-width: var(--border-width); border-color: var(--color-border); box-shadow: var(--shadow-style);"
          >
            {#if item.image_url}
              <div 
                class="overflow-hidden mb-8"
                style="border-radius: var(--radius-base);"
              >
                <img src={item.image_url} alt={item.title} class="w-full h-48 object-cover" />
              </div>
            {/if}
            <h3 class="text-2xl font-bold text-text mb-4">{item.title}</h3>
            <p class="text-text opacity-70 leading-relaxed">{item.description}</p>
          </div>
        {/each}
      </div>
    {:else}
      <div class="space-y-24">
        {#each section.items as item, i}
          <div class="flex flex-col md:flex-row items-center gap-12 {item.reverse ? 'md:flex-row-reverse' : ''}">
            <div class="flex-1">
              <h3 class="text-3xl font-bold text-text mb-6">{item.title}</h3>
              <p class="text-lg text-text opacity-70 leading-relaxed">
                {item.description}
              </p>
            </div>
            {#if item.image_url}
              <div class="flex-1 w-full">
                <div 
                  class="overflow-hidden"
                  style="border-radius: var(--radius-lg); border-width: var(--border-width); border-color: var(--color-border); box-shadow: var(--shadow-style);"
                >
                  <img 
                    src={item.image_url} 
                    alt={item.title}
                    class="w-full h-auto object-cover aspect-video"
                  />
                </div>
              </div>
            {/if}
          </div>
        {/each}
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
