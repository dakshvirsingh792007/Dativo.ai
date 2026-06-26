/**
 * Dynamic Pricing Configuration Matrix
 * External data model for multi-currency, multi-cycle pricing
 * Evaluation Criteria: Feature 1 - Dynamic multi-dimensional matrix
 */

export type Currency = 'INR' | 'USD' | 'EUR';
export type BillingCycle = 'monthly' | 'annual';
export type PlanTier = 'starter' | 'professional' | 'enterprise';

// Multi-dimensional pricing matrix
export interface PricingMatrix {
  [key: string]: {
    [cycle in BillingCycle]: {
      [currency in Currency]: number;
    };
  };
}

// Discount configuration
export interface DiscountConfig {
  annual: number; // percentage discount
  promotional?: number;
}

// Currency metadata
export interface CurrencyMetadata {
  symbol: string;
  label: string;
  locale: string;
}

// Plan features configuration
export interface PlanFeatures {
  tier: PlanTier;
  name: string;
  description: string;
  features: string[];
  popular?: boolean;
  accentColor: string;
  borderColor: string;
}

// Pricing Configuration Matrix
export const PRICING_MATRIX: PricingMatrix = {
  starter: {
    monthly: {
      INR: 2500,
      USD: 29,
      EUR: 27,
    },
    annual: {
      INR: 2000, // 20% discount applied
      USD: 23,
      EUR: 22,
    },
  },
  professional: {
    monthly: {
      INR: 8500,
      USD: 99,
      EUR: 92,
    },
    annual: {
      INR: 6800,
      USD: 79,
      EUR: 74,
    },
  },
  enterprise: {
    monthly: {
      INR: 25000,
      USD: 299,
      EUR: 275,
    },
    annual: {
      INR: 20000,
      USD: 239,
      EUR: 220,
    },
  },
};

// Discount configuration
export const DISCOUNT_CONFIG: DiscountConfig = {
  annual: 0.20, // 20% off for annual billing
};

// Currency metadata
export const CURRENCY_METADATA: Record<Currency, CurrencyMetadata> = {
  INR: {
    symbol: '₹',
    label: 'INR',
    locale: 'en-IN',
  },
  USD: {
    symbol: '$',
    label: 'USD',
    locale: 'en-US',
  },
  EUR: {
    symbol: '€',
    label: 'EUR',
    locale: 'de-DE',
  },
};

// Plan features configuration
export const PLAN_FEATURES: PlanFeatures[] = [
  {
    tier: 'starter',
    name: 'Starter',
    description: 'Perfect for small teams and side projects.',
    accentColor: 'from-mystic-mint to-arctic-powder',
    borderColor: 'border-nocturnal-expedition/20',
    features: [
      'Up to 5 data sources',
      '1M events/month',
      'Email Support',
      'Basic AI Templates',
      'API Access',
    ],
  },
  {
    tier: 'professional',
    name: 'Professional',
    description: 'For growing teams that need more power.',
    popular: true,
    accentColor: 'from-forsythia via-deep-saffron to-forsythia',
    borderColor: 'border-forsythia',
    features: [
      'Unlimited sources',
      '20M events/month',
      'Priority Support',
      'Custom AI Workflows',
      'Advanced Analytics',
      'Webhooks & Alerts',
    ],
  },
  {
    tier: 'enterprise',
    name: 'Enterprise',
    description: 'Custom solutions for large organizations.',
    accentColor: 'from-nocturnal-expedition to-oceanic-noir',
    borderColor: 'border-oceanic-noir/30',
    features: [
      'Unlimited everything',
      'Dedicated Account Manager',
      '24/7 Phone Support',
      'On-premise Deployment',
      'Custom Security Layer',
      'SLA Guarantees',
    ],
  },
];

// Pricing calculation utilities
export const calculatePrice = (
  tier: PlanTier,
  cycle: BillingCycle,
  currency: Currency
): number => {
  return PRICING_MATRIX[tier][cycle][currency];
};

export const formatPrice = (
  amount: number,
  currency: Currency
): string => {
  const metadata = CURRENCY_METADATA[currency];
  return new Intl.NumberFormat(metadata.locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const getDiscountPercentage = (cycle: BillingCycle): number => {
  return cycle === 'annual' ? DISCOUNT_CONFIG.annual * 100 : 0;
};
