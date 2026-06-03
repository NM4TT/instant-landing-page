# instant-landing-page 🚀

A modern, high-converting, and production-ready landing page generator built with **Astro 6.3**, **Svelte 5 (Runes)**, and **TailwindCSS v4**.

## 🚀 Why instant-landing-page?

`instant-landing-page` is designed to strip away distractions and focus purely on guiding a visitor toward a single, specific action. It allows you to define your entire landing page structure, branding, and conversion sections in a single **YAML** file.

**Key Benefits:**
- **Proven Hierarchy:** Follows a structural anatomy designed for conversion (Hero, Social Proof, Benefits, How It Works, Closing).
- **Anti-Distraction:** Minimal navigation and footer to keep users focused on your primary Call to Action (CTA).
- **Brandable:** Customize colors, logos, and load **Google Fonts** directly from the configuration.
- **Ultra Fast:** Leverages Astro's Content Layer for high-performance static generation, scoring 100 on Lighthouse out of the box.
- **Developer Friendly:** Mobile-first, stateless by design, and strictly typed with TypeScript.

---

## 🏗 Structural Anatomy

Every page is composed of modular sections defined in your configuration:

| Section | Purpose | Key Elements |
| :--- | :--- | :--- |
| **`hero`** | Above the fold impact. | Headline, Subheadline, Visual, CTA. **Layouts:** `centered`, `split`. |
| **`social_proof`** | Build credibility. | Customer Logos, Metrics, Testimonials. |
| **`benefits`** | Problem & Solution. | Z-pattern or Grid layouts. **Layouts:** `stack`, `grid`. |
| **`features`** | The "What". | Bento-box grid for technical capabilities. |
| **`how_it_works`** | Reduce friction. | Step-by-step framework to explain your process. |
| **`pricing`** | Desire phase. | Flexible grid of pricing plans with "Most Popular" highlight. |
| **`closing`** | Final conversion. | Secondary CTA, Risk Reversal, FAQ Accordion. |

---

## ⚙️ Configuration (`src/content/landing-page.yaml`)

The page is driven by a YAML file. Here is a breakdown of the structure:

### Branding & UI
```yaml
project:
  name: "Instant Landing Page"
  description: "Launch your next big idea in seconds"

branding:
  logo_url: "/logo.svg"
  vibe: "modern" # Aesthetic preset: "modern", "brutalist", or "pill"
  colors:
    primary: "#2563eb"
    background: "#ffffff"
    surface: "#f8fafc"
    text: "#0f172a"
    border: "#e2e8f0"
  fonts:
    google_fonts_url: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
    display: "Inter"
    sans: "Inter"
```

### Page Sections
```yaml
sections:
  - type: "hero"
    layout: "split" # "centered" (default) or "split"
    headline: "Launch Faster"
    subheadline: "Define your page in YAML and go live."
    cta:
      label: "Get Started"
      link: "#closing"

  - type: "benefits"
    layout: "grid" # "stack" (default) or "grid"
    items:
      - title: "Speed"
        description: "Built for performance."
        reverse: true

  - type: "features"
    title: "Powerful Features"
    items:
      - title: "Main Feature"
        description: "Spans two columns."
        icon: "zap"
        span: 2
      - title: "Side Feature"
        icon: "shield"

  - type: "pricing"
    title: "Simple Pricing"
    plans:
      - name: "Pro"
        price: "$29"
        interval: "mo"
        description: "Best for teams."
        is_popular: true
        features: ["Feature A", "Feature B"]
        cta: { label: "Join Now", link: "#" }
```

---

## 🌍 How to Use (Hosting Agnostic)

Since `instant-landing-page` generates a standard static website, you can host it on any provider (Netlify, Vercel, Cloudflare Pages, GitHub Pages, or a simple Nginx server).

### Local Development
1. **Install dependencies:** `pnpm install`
2. **Start dev server:** `pnpm dev`
3. **Open:** `http://localhost:4321`

### Testing
- Run **Playwright** tests: `pnpm test`
- *Note: For an OS-agnostic experience, use the provided `.devcontainer`.*

### Deployment
1. **Build the project:**
   ```bash
   pnpm build
   ```
2. **Host the output:**
   The production files will be in the `dist/` directory. Simply upload this folder to your static host of choice.

### Docker Support
A production-ready `docker-compose.yaml` and `nginx.conf` are included. To run via Docker:
```bash
docker-compose up --build
```
