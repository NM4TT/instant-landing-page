<script lang="ts">
  import type { LandingPageConfig } from '#lib/types';

  interface Props {
    config: LandingPageConfig;
  }

  let { config }: Props = $props();
  const currentYear = new Date().getFullYear();
</script>

<footer class="py-12 bg-[var(--color-background)] border-t border-border">
  <div class="container mx-auto px-4">
    <div class="flex flex-col md:flex-row justify-between items-center gap-8">
      <div class="flex items-center gap-3">
        {#if config.branding.logo_url}
          <img src={config.branding.logo_url} alt={config.project.name} class="h-8 w-auto" />
        {/if}
        <span class="font-bold text-text">{config.project.name}</span>
      </div>
      
      <div class="flex gap-8 text-sm font-medium text-text opacity-50">
        <a href="/privacy/" class="hover:opacity-100 transition-opacity">Privacy Policy</a>
        <a href="/terms/" class="hover:opacity-100 transition-opacity">Terms of Service</a>
      </div>
      
      <div class="text-sm text-text opacity-40">
        © {currentYear} {config.project.name}. All rights reserved.
      </div>
    </div>
  </div>
</footer>

<style>
  .text-text {
    color: var(--color-text, #0f172a);
  }
  .border-border {
    border-color: var(--color-border, #e2e8f0);
  }
</style>
