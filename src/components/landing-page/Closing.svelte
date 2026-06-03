<script lang="ts">
  import type { ClosingSection } from '#lib/types';

  interface Props {
    section: ClosingSection;
  }

  let { section }: Props = $props();

  let activeFaq = $state<number | null>(null);

  function toggleFaq(index: number) {
    activeFaq = activeFaq === index ? null : index;
  }
</script>

<section id="closing" class="py-24 bg-surface">
  <div class="container mx-auto px-4 max-w-4xl">
    <div class="text-center mb-20">
      <h2 class="text-5xl font-extrabold text-text mb-6">{section.headline}</h2>
      {#if section.subheadline}
        <p class="text-xl text-text opacity-70 mb-10">{section.subheadline}</p>
      {/if}
      
      <div class="flex flex-col items-center gap-4">
        <a 
          href={section.cta.link}
          class="btn-primary"
        >
          {section.cta.label}
        </a>
        {#if section.risk_reversal}
          <p class="text-sm text-text opacity-50 font-medium">
            {section.risk_reversal}
          </p>
        {/if}
      </div>
    </div>

    {#if section.faqs && section.faqs.length > 0}
      <div class="mt-32">
        <h3 class="text-3xl font-bold text-center text-text mb-12">Frequently Asked Questions</h3>
        <div class="space-y-4">
          {#each section.faqs as faq, i}
            <div 
              class="border border-border overflow-hidden bg-white"
              style="border-radius: var(--radius-base); border-width: var(--border-width); box-shadow: var(--shadow-style);"
            >
              <button 
                class="w-full text-left p-6 font-bold text-text flex justify-between items-center hover:bg-surface/50 transition-colors"
                onclick={() => toggleFaq(i)}
              >
                <span>{faq.question}</span>
                <span class="text-primary transform transition-transform {activeFaq === i ? 'rotate-180' : ''}">
                  ▼
                </span>
              </button>
              {#if activeFaq === i}
                <div class="p-6 pt-0 text-text opacity-70 border-t border-border">
                  {faq.answer}
                </div>
              {/if}
            </div>
          {/each}
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
  .text-primary {
    color: var(--color-primary, #2563eb);
  }
  .border-border {
    border-color: var(--color-border, #e2e8f0);
  }
</style>
