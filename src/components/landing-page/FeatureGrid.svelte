<script lang="ts">
  import type { FeaturesSection } from '#lib/types';

  interface Props {
    section: FeaturesSection;
  }

  let { section }: Props = $props();
</script>

<section class="py-24 bg-[var(--color-surface)]">
  <div class="container mx-auto px-6">
    <div class="max-w-3xl mx-auto text-center mb-16">
      <h2 class="text-4xl md:text-5xl mb-6">{section.title}</h2>
      {#if section.description}
        <p class="text-xl opacity-80">{section.description}</p>
      {/if}
    </div>

    <div class="flex flex-wrap justify-center gap-6">
      {#each section.items as item}
        <div 
          class="p-8 border border-[var(--color-border)] bg-[var(--color-background)] transition-all hover:shadow-xl flex-none w-full
                 {item.span === 2 ? 'md:max-w-2xl' : 'md:max-w-sm'}"
          style="border-radius: var(--radius-lg); border-width: var(--border-width); box-shadow: var(--shadow-style);"
        >
          <div class="flex flex-col h-full">
            {#if item.icon}
              <div 
                class="w-12 h-12 bg-[var(--color-primary)]/10 flex items-center justify-center mb-6 text-[var(--color-primary)]"
                style="border-radius: var(--radius-base);"
              >
                <!-- Fallback icon logic: simple circle if no SVG provided, or could map strings to SVGs -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  {#if item.icon === 'zap'}
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  {:else if item.icon === 'shield'}
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  {:else if item.icon === 'cpu'}
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                    <rect x="9" y="9" width="6" height="6"></rect>
                    <line x1="9" y1="1" x2="9" y2="4"></line>
                    <line x1="15" y1="1" x2="15" y2="4"></line>
                    <line x1="9" y1="20" x2="9" y2="23"></line>
                    <line x1="15" y1="20" x2="15" y2="23"></line>
                    <line x1="20" y1="9" x2="23" y2="9"></line>
                    <line x1="20" y1="15" x2="23" y2="15"></line>
                    <line x1="1" y1="9" x2="4" y2="9"></line>
                    <line x1="1" y1="15" x2="4" y2="15"></line>
                  {:else}
                    <circle cx="12" cy="12" r="10"></circle>
                  {/if}
                </svg>
              </div>
            {/if}
            <h3 class="text-2xl font-bold mb-4">{item.title}</h3>
            <p class="text-lg opacity-70 leading-relaxed">{item.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
