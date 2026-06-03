<script lang="ts">
  import type { PricingSection } from '#lib/types';

  interface Props {
    section: PricingSection;
  }

  let { section }: Props = $props();
</script>

<section class="py-24 bg-[var(--color-background)]">
  <div class="container mx-auto px-6">
    <div class="max-w-3xl mx-auto text-center mb-16">
      <h2 class="text-4xl md:text-5xl mb-6">{section.title}</h2>
      {#if section.description}
        <p class="text-xl opacity-80">{section.description}</p>
      {/if}
    </div>

    <div class="flex flex-wrap justify-center gap-8 items-stretch">
      {#each section.plans as plan}
        <div 
          class="w-full max-w-sm flex-none p-8 border transition-all duration-300 relative flex flex-col
                 {plan.is_popular 
                   ? 'border-[var(--color-primary)] shadow-2xl scale-105 z-10 bg-[var(--color-background)]' 
                   : 'border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary)]/50'}"
          style="border-radius: var(--radius-lg); border-width: var(--border-width); box-shadow: {plan.is_popular ? 'var(--shadow-style)' : 'none'};"
        >
          {#if plan.is_popular}
            <div 
              class="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-primary)] text-white px-4 py-1 text-sm font-bold uppercase tracking-wider"
              style="border-radius: var(--radius-base);"
            >
              Most Popular
            </div>
          {/if}

          <div class="mb-8">
            <h3 class="text-xl font-bold mb-2">{plan.name}</h3>
            <div class="flex items-baseline gap-1">
              <span class="text-4xl font-extrabold">{plan.price}</span>
              {#if plan.interval}
                <span class="opacity-60">/{plan.interval}</span>
              {/if}
            </div>
            <p class="mt-4 opacity-70">{plan.description}</p>
          </div>

          <ul class="space-y-4 mb-8 flex-grow">
            {#each plan.features as feature}
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-[var(--color-primary)] shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm opacity-90">{feature}</span>
              </li>
            {/each}
          </ul>

          <a 
            href={plan.cta.link}
            class="btn-primary w-full text-center block"
          >
            {plan.cta.label}
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>
