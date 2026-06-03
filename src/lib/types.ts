export interface LandingPageConfig {
  project: {
    name: string;
    description: string;
  };
  branding: {
    logo_url: string;
    vibe?: 'modern' | 'brutalist' | 'pill';
    colors?: {
      primary?: string;
      background?: string;
      surface?: string;
      text?: string;
      border?: string;
    };
    fonts?: {
      google_fonts_url?: string;
      display?: string;
      sans?: string;
      mono?: string;
    };
  };
  pages: {
    error_404: {
      title: string;
      message: string;
    };
    privacy?: {
      title: string;
      content: string;
    };
    terms?: {
      title: string;
      content: string;
    };
  };
  sections: LandingPageSection[];
}

export type LandingPageSection =
  | HeroSection
  | SocialProofSection
  | BenefitsSection
  | HowItWorksSection
  | FeaturesSection
  | PricingSection
  | ClosingSection;

export interface HeroSection {
  type: 'hero';
  layout?: 'centered' | 'split';
  headline: string;
  subheadline: string;
  visual?: string;
  cta: {
    label: string;
    link: string;
  };
}

export interface SocialProofSection {
  type: 'social_proof';
  logos?: { name: string; image_url: string }[];
  metrics?: { label: string; value: string }[];
  testimonials?: {
    quote: string;
    author: string;
    title?: string;
    avatar_url?: string;
  }[];
}

export interface Benefit {
  title: string;
  description: string;
  image_url?: string;
  reverse?: boolean;
}

export interface BenefitsSection {
  type: 'benefits';
  title?: string;
  layout?: 'stack' | 'grid';
  items: Benefit[];
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
  span?: 1 | 2;
}

export interface FeaturesSection {
  type: 'features';
  title: string;
  description?: string;
  items: FeatureItem[];
}

export interface HowItWorksSection {
  type: 'how_it_works';
  title: string;
  steps: {
    title: string;
    description: string;
  }[];
}

export interface PricingPlan {
  name: string;
  price: string;
  interval?: string;
  description: string;
  features: string[];
  is_popular?: boolean;
  cta: {
    label: string;
    link: string;
  };
}

export interface PricingSection {
  type: 'pricing';
  title: string;
  description?: string;
  plans: PricingPlan[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ClosingSection {
  type: 'closing';
  headline: string;
  subheadline?: string;
  cta: {
    label: string;
    link: string;
  };
  risk_reversal?: string;
  faqs?: FAQItem[];
}
