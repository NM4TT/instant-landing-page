<script lang="ts">
  import type { HowItWorksSection } from '#lib/types';

  interface Props {
    section: HowItWorksSection;
  }

  let { section }: Props = $props();
</script>

<section class="py-24 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl md:text-5xl font-bold text-center text-text mb-20">
      {section.title}
    </h2>

    <div class="flex flex-wrap justify-center gap-12">
      {#each section.steps as step, i}
        <div 
          class="w-full max-w-sm flex-none relative p-8 bg-surface border border-border group hover:shadow-lg transition-all"
          style="border-radius: var(--radius-lg); border-width: var(--border-width); box-shadow: var(--shadow-style);"
        >
          <div 
            class="w-12 h-12 bg-primary text-white flex items-center justify-center font-bold text-xl mb-6"
            style="border-radius: var(--radius-base);"
          >
            {i + 1}
          </div>
          <h3 class="text-2xl font-bold text-text mb-4">{step.title}</h3>
          <p class="text-text opacity-70 leading-relaxed">
            {step.description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .bg-surface {
    background-color: var(--color-surface, #f8fafc);
  }
  .bg-primary {
    background-color: var(--color-primary, #2563eb);
  }
  .text-text {
    color: var(--color-text, #0f172a);
  }
  .border-border {
    border-color: var(--color-border, #e2e8f0);
  }
</style>
