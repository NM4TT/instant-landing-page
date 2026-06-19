import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const heroSchema = z.object({
  type: z.literal('hero'),
  layout: z.enum(['centered', 'split']).optional(),
  headline: z.string(),
  subheadline: z.string(),
  visual: z.string().optional(),
  cta: z.object({
    label: z.string(),
    link: z.string(),
  }),
});

const socialProofSchema = z.object({
  type: z.literal('social_proof'),
  logos: z.array(z.object({
    name: z.string(),
    image_url: z.string(),
  })).optional(),
  metrics: z.array(z.object({
    label: z.string(),
    value: z.string(),
  })).optional(),
  testimonials: z.array(z.object({
    quote: z.string(),
    author: z.string(),
    title: z.string().optional(),
    avatar_url: z.string().optional(),
  })).optional(),
});

const benefitItemSchema = z.object({
  title: z.string(),
  description: z.string(),
  image_url: z.string().optional(),
  reverse: z.boolean().optional(),
});

const benefitsSchema = z.object({
  type: z.literal('benefits'),
  title: z.string().optional(),
  layout: z.enum(['stack', 'grid']).optional(),
  items: z.array(benefitItemSchema),
});

const featuresSchema = z.object({
  type: z.literal('features'),
  title: z.string(),
  description: z.string().optional(),
  items: z.array(z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    span: z.union([z.literal(1), z.literal(2)]).optional(),
  })),
});

const howItWorksSchema = z.object({
  type: z.literal('how_it_works'),
  title: z.string(),
  steps: z.array(z.object({
    title: z.string(),
    description: z.string(),
  })),
});

const pricingSchema = z.object({
  type: z.literal('pricing'),
  title: z.string(),
  description: z.string().optional(),
  plans: z.array(z.object({
    name: z.string(),
    price: z.string(),
    interval: z.string().optional(),
    description: z.string(),
    features: z.array(z.string()),
    is_popular: z.boolean().optional(),
    cta: z.object({
      label: z.string(),
      link: z.string(),
    }),
  })),
});

const closingSchema = z.object({
  type: z.literal('closing'),
  headline: z.string(),
  subheadline: z.string().optional(),
  cta: z.object({
    label: z.string(),
    link: z.string(),
  }),
  risk_reversal: z.string().optional(),
  faqs: z.array(z.object({
    question: z.string(),
    answer: z.string(),
  })).optional(),
});

const landingPageSchema = z.object({
  project: z.object({
    name: z.string(),
    description: z.string(),
  }),
  branding: z.object({
    logo_url: z.string(),
    vibe: z.enum(['modern', 'brutalist', 'pill']).optional(),
    colors: z.object({
      primary: z.string().optional(),
      background: z.string().optional(),
      surface: z.string().optional(),
      text: z.string().optional(),
      border: z.string().optional(),
    }).optional(),
    fonts: z.object({
      google_fonts_url: z.string().url().optional(),
      display: z.string().optional(),
      sans: z.string().optional(),
      mono: z.string().optional(),
    }).optional(),
  }),
  pages: z.object({
    error_404: z.object({
      title: z.string(),
      message: z.string(),
    }),
    privacy: z.object({
      title: z.string(),
      content: z.string(),
    }).optional(),
    terms: z.object({
      title: z.string(),
      content: z.string(),
    }).optional(),
  }),
  sections: z.array(z.discriminatedUnion('type', [
    heroSchema,
    socialProofSchema,
    benefitsSchema,
    featuresSchema,
    howItWorksSchema,
    pricingSchema,
    closingSchema,
  ])),
});

const landingPage = defineCollection({
  loader: glob({ pattern: "landing-page.yaml", base: "." }),
  schema: landingPageSchema,
});

export const collections = { landing_page: landingPage };
