import { useState, memo, useCallback } from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import type {
  Currency,
  BillingCycle,
} from '../config/pricing.config';
import {
  CURRENCY_METADATA,
  PLAN_FEATURES,
  calculatePrice,
  getDiscountPercentage,
} from '../config/pricing.config';

/**
 * Isolated Price Display Component
 * Prevents global re-renders by memoizing and only updating price text nodes
 */
const PriceDisplay = memo(({ 
  tier, 
  cycle, 
  currency 
}: { 
  tier: string; 
  cycle: BillingCycle; 
  currency: Currency;
}) => {
  const price = calculatePrice(tier as any, cycle, currency);
  const currencySymbol = CURRENCY_METADATA[currency].symbol;

  return (
    <>
      <span className="text-3xl font-bold text-oceanic-noir">{currencySymbol}</span>
      <span className="text-7xl font-bold text-oceanic-noir tracking-tighter price-value">
        {price}
      </span>
      <span className="text-oceanic-noir/50 font-medium text-lg">/mo</span>
    </>
  );
});

PriceDisplay.displayName = 'PriceDisplay';

/**
 * Plan Card Component - Memoized to prevent unnecessary re-renders
 */
const PlanCard = memo(({
  plan,
  currency,
  cycle,
  index,
}: {
  plan: typeof PLAN_FEATURES[0];
  currency: Currency;
  cycle: BillingCycle;
  index: number;
}) => {
  return (
    <article
      className={`relative rounded-3xl p-10 flex flex-col border-2 transition-all duration-300 backdrop-blur-sm hover-lift animate-fade-in-up stagger-${index + 1} ${
        plan.popular
          ? `${plan.borderColor} bg-gradient-to-br ${plan.accentColor} shadow-2xl ring-4 ring-forsythia/20`
          : `${plan.borderColor} bg-arctic-powder/80 hover:shadow-xl`
      }`}
    >
      {plan.popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-gradient-to-r from-forsythia to-deep-saffron text-oceanic-noir px-6 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-widest shadow-lg flex items-center gap-2">
            <Sparkles size={14} />
            Most Popular
          </div>
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-3xl font-bold text-oceanic-noir mb-3">{plan.name}</h3>
        <p className="text-oceanic-noir/60 text-sm font-sans leading-relaxed">
          {plan.description}
        </p>
      </div>

      <div className="mb-10 flex items-baseline gap-2 contain-layout">
        <PriceDisplay tier={plan.tier} cycle={cycle} currency={currency} />
      </div>

      <ul className="space-y-4 mb-10 flex-grow">
        {plan.features.map((feature, fIndex) => (
          <li key={fIndex} className="flex items-start gap-3">
            <div className="mt-1 bg-nocturnal-expedition/10 rounded-full p-1">
              <Check size={14} className="text-nocturnal-expedition" strokeWidth={3} />
            </div>
            <span className="text-sm text-oceanic-noir/80 font-sans leading-relaxed">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-4 rounded-2xl font-mono font-bold btn-interaction flex items-center justify-center gap-2 group ${
          plan.popular
            ? 'bg-gradient-to-r from-oceanic-noir to-nocturnal-expedition text-arctic-powder hover:shadow-2xl'
            : 'bg-gradient-to-r from-nocturnal-expedition to-oceanic-noir text-arctic-powder hover:shadow-xl'
        }`}
        aria-label={`Select ${plan.name} plan`}
      >
        Select {plan.name}
        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-150" />
      </button>
    </article>
  );
});

PlanCard.displayName = 'PlanCard';

/**
 * Main Pricing Component
 * Optimized for isolated state updates
 */
const Pricing = () => {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('annual');

  // Memoized handlers to prevent re-render cascades
  const handleCurrencyChange = useCallback((newCurrency: Currency) => {
    setCurrency(newCurrency);
  }, []);

  const handleBillingCycleChange = useCallback((newCycle: BillingCycle) => {
    setBillingCycle(newCycle);
  }, []);

  const discountPercentage = getDiscountPercentage(billingCycle);

  return (
    <section
      id="pricing"
      className="py-32 px-4 bg-gradient-to-br from-arctic-powder via-mystic-mint/30 to-arctic-powder relative overflow-hidden"
    >
      {/* Decorative Blurs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-forsythia/10 rounded-full blur-[180px]" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-deep-saffron/10 rounded-full blur-[160px]" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-nocturnal-expedition/10 border border-nocturnal-expedition/20 rounded-full text-nocturnal-expedition font-mono text-sm font-bold mb-6">
            TRANSPARENT PRICING
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-oceanic-noir mb-6 leading-tight">
            Simple,{' '}
            <span className="bg-gradient-to-r from-forsythia via-deep-saffron to-nocturnal-expedition bg-clip-text text-transparent">
              Fair Pricing
            </span>
          </h2>
          <p className="text-xl text-oceanic-noir/60 max-w-2xl mx-auto font-sans">
            Choose the perfect plan for your team. Scale up or down anytime.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
            {/* Billing Cycle Toggle */}
            <div
              className="flex items-center gap-4 bg-arctic-powder/80 backdrop-blur-sm p-2 rounded-full border-2 border-nocturnal-expedition/20 shadow-lg"
              role="group"
              aria-label="Billing cycle selector"
            >
              <button
                onClick={() => handleBillingCycleChange('monthly')}
                className={`px-8 py-3 rounded-full text-sm font-bold font-mono btn-interaction ${
                  billingCycle === 'monthly'
                    ? 'bg-gradient-to-r from-nocturnal-expedition to-oceanic-noir text-arctic-powder shadow-lg'
                    : 'text-oceanic-noir/60 hover:text-oceanic-noir'
                }`}
                aria-pressed={billingCycle === 'monthly'}
              >
                Monthly
              </button>
              <button
                onClick={() => handleBillingCycleChange('annual')}
                className={`px-8 py-3 rounded-full text-sm font-bold font-mono btn-interaction relative ${
                  billingCycle === 'annual'
                    ? 'bg-gradient-to-r from-nocturnal-expedition to-oceanic-noir text-arctic-powder shadow-lg'
                    : 'text-oceanic-noir/60 hover:text-oceanic-noir'
                }`}
                aria-pressed={billingCycle === 'annual'}
              >
                Annual
                {discountPercentage > 0 && (
                  <span className="absolute -top-5 -right-6 bg-gradient-to-r from-forsythia to-deep-saffron text-oceanic-noir text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-bold shadow-md">
                    SAVE {discountPercentage}%
                  </span>
                )}
              </button>
            </div>

            {/* Currency Switcher */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-oceanic-noir/50 uppercase tracking-widest font-mono">
                Currency:
              </span>
              <div
                className="flex bg-arctic-powder/80 backdrop-blur-sm rounded-xl p-1.5 border-2 border-nocturnal-expedition/20 shadow-lg"
                role="group"
                aria-label="Currency selector"
              >
                {(Object.keys(CURRENCY_METADATA) as Currency[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => handleCurrencyChange(c)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold font-mono btn-interaction ${
                      currency === c
                        ? 'bg-gradient-to-r from-nocturnal-expedition to-oceanic-noir text-arctic-powder shadow-md'
                        : 'text-oceanic-noir/50 hover:text-oceanic-noir'
                    }`}
                    aria-pressed={currency === c}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLAN_FEATURES.map((plan, index) => (
            <PlanCard
              key={plan.tier}
              plan={plan}
              currency={currency}
              cycle={billingCycle}
              index={index}
            />
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-nocturnal-expedition to-oceanic-noir rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 border-2 border-oceanic-noir/30 shadow-2xl animate-fade-in-up stagger-4">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-forsythia rounded-2xl flex items-center justify-center shadow-lg">
              <Sparkles size={32} className="text-oceanic-noir" />
            </div>
            <div>
              <h4 className="font-bold text-2xl text-arctic-powder mb-2">
                Need a Custom Solution?
              </h4>
              <p className="text-sm text-arctic-powder/70 font-sans">
                Contact our team for enterprise pricing and custom deployments.
              </p>
            </div>
          </div>
          <button className="px-10 py-4 bg-forsythia text-oceanic-noir font-mono font-bold rounded-2xl hover:bg-deep-saffron btn-interaction shadow-lg hover:shadow-forsythia/50 flex items-center gap-2 group">
            Contact Sales
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-150" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(Pricing);
