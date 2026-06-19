<script lang="ts">
  import type { SocialProofSection } from '#lib/types';

  interface Props {
    section: SocialProofSection;
  }

  let { section }: Props = $props();
</script>

<section class="py-16 bg-[var(--color-background)]">
  <div class="container mx-auto px-4">
    {#if section.logos && section.logos.length > 0}
      <div class="text-center mb-16">
        <p class="text-sm font-semibold uppercase tracking-widest text-text opacity-50 mb-8">
          Trusted by Industry Leaders
        </p>
        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
          {#each section.logos as logo}
            <img 
              src={logo.image_url} 
              alt={logo.name} 
              title={logo.name}
              class="h-8 md:h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          {/each}
        </div>
      </div>
    {/if}

    {#if section.metrics && section.metrics.length > 0}
      <div class="flex flex-wrap justify-center gap-8 mb-20 text-center">
        {#each section.metrics as metric}
          <div class="p-6 min-w-[200px] flex-1 md:flex-none">
            <div class="text-4xl md:text-5xl font-extrabold text-primary mb-2">
              {metric.value}
            </div>
            <div class="text-sm font-medium text-text opacity-70 uppercase tracking-wide">
              {metric.label}
            </div>
          </div>
        {/each}
      </div>
    {/if}

    {#if section.testimonials && section.testimonials.length > 0}
      <div class="max-w-4xl mx-auto">
        {#each section.testimonials as testimonial}
          <blockquote 
            class="text-center p-12 bg-[var(--color-surface)]"
            style="border-radius: var(--radius-lg); border-width: var(--border-width); border-color: var(--color-border); box-shadow: var(--shadow-style);"
          >
            <p class="text-2xl md:text-3xl italic text-text mb-8 leading-relaxed">
              "{testimonial.quote}"
            </p>
            <footer class="flex items-center justify-center gap-4">
              {#if testimonial.avatar_url}
                <img 
                  src={testimonial.avatar_url} 
                  alt={testimonial.author} 
                  class="w-12 h-12 border-2 border-primary"
                  style="border-radius: var(--radius-base);"
                />
              {/if}
              <div class="text-left">
                <div class="font-bold text-text">{testimonial.author}</div>
                {#if testimonial.title}
                  <div class="text-sm text-text opacity-60">{testimonial.title}</div>
                {/if}
              </div>
            </footer>
          </blockquote>
        {/each}
      </div>
    {/if}
  </div>
</section>

<style>
  .text-primary {
    color: var(--color-primary, #2563eb);
  }
  .text-text {
    color: var(--color-text, #0f172a);
  }
  .border-primary {
    border-color: var(--color-primary, #2563eb);
  }
</style>
