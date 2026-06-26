import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

type Currency = 'INR' | 'USD' | 'EUR';
type BillingCycle = 'monthly' | 'annual';

const pricingData = {
  plans: [
    {
      name: 'Starter',
      description: 'Perfect for small teams and side projects.',
      basePrice: { INR: 2500, USD: 29, EUR: 27 },
      accentColor: 'from-mystic-mint to-arctic-powder',
      borderColor: 'border-nocturnal-expedition/20',
      features: ['Up to 5 data sources', '1M events/month', 'Email Support', 'Basic AI Templates', 'API Access'],
    },
    {
      name: 'Professional',
      description: 'For growing teams that need more power.',
      basePrice: { INR: 8500, USD: 99, EUR: 92 },
      popular: true,
      accentColor: 'from-forsythia via-deep-saffron to-forsythia',
      borderColor: 'border-forsythia',
      features: ['Unlimited sources', '20M events/month', 'Priority Support', 'Custom AI Workflows', 'Advanced Analytics', 'Webhooks & Alerts'],
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for large organizations.',
      basePrice: { INR: 25000, USD: 299, EUR: 275 },
      accentColor: 'from-nocturnal-expedition to-oceanic-noir',
      borderColor: 'border-oceanic-noir/30',
      features: ['Unlimited everything', 'Dedicated Account Manager', '24/7 Phone Support', 'On-premise Deployment', 'Custom Security Layer', 'SLA Guarantees'],
    },
  ],
  currencies: {
    INR: { symbol: '₹', label: 'INR' },
    USD: { symbol: '$', label: 'USD' },
    EUR: { symbol: '€', label: 'EUR' },
  },
};

const Pricing = () => {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('annual');

  const calculatePrice = (base: number) => {
    let price = base;
    if (billingCycle === 'annual') {
      price = base * 0.8; // 20% discount for annual
    }
    return Math.floor(price);
  };

  return (
    <section id="pricing" className="py-32 px-4 bg-gradient-to-br from-arctic-powder via-mystic-mint/30 to-arctic-powder relative overflow-hidden">
      {/* Decorative Blurs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-forsythia/10 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-deep-saffron/10 rounded-full blur-[160px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-nocturnal-expedition/10 border border-nocturnal-expedition/20 rounded-full text-nocturnal-expedition font-mono text-sm font-bold mb-6">
            TRANSPARENT PRICING
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-oceanic-noir mb-6 leading-tight">
            Simple, <span className="bg-gradient-to-r from-forsythia via-deep-saffron to-nocturnal-expedition bg-clip-text text-transparent">Fair Pricing</span>
          </h2>
          <p className="text-xl text-oceanic-noir/60 max-w-2xl mx-auto font-sans">
            Choose the perfect plan for your team. Scale up or down anytime.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
            {/* Billing Cycle Toggle */}
            <div className="flex items-center gap-4 bg-arctic-powder/80 backdrop-blur-sm p-2 rounded-full border-2 border-nocturnal-expedition/20 shadow-lg">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-8 py-3 rounded-full text-sm font-bold font-mono transition-all ${billingCycle === 'monthly' ? 'bg-gradient-to-r from-nocturnal-expedition to-oceanic-noir text-arctic-powder shadow-lg' : 'text-oceanic-noir/60 hover:text-oceanic-noir'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-8 py-3 rounded-full text-sm font-bold font-mono transition-all relative ${billingCycle === 'annual' ? 'bg-gradient-to-r from-nocturnal-expedition to-oceanic-noir text-arctic-powder shadow-lg' : 'text-oceanic-noir/60 hover:text-oceanic-noir'}`}
              >
                Annual
                <span className="absolute -top-5 -right-6 bg-gradient-to-r from-forsythia to-deep-saffron text-oceanic-noir text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-bold shadow-md">
                  SAVE 20%
                </span>
              </button>
            </div>

            {/* Currency Switcher */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-oceanic-noir/50 uppercase tracking-widest font-mono">Currency:</span>
              <div className="flex bg-arctic-powder/80 backdrop-blur-sm rounded-xl p-1.5 border-2 border-nocturnal-expedition/20 shadow-lg">
                {(Object.keys(pricingData.currencies) as Currency[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold font-mono transition-all ${currency === c ? 'bg-gradient-to-r from-nocturnal-expedition to-oceanic-noir text-arctic-powder shadow-md' : 'text-oceanic-noir/50 hover:text-oceanic-noir'}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingData.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -12 }}
              className={`relative rounded-3xl p-10 flex flex-col border-2 transition-all duration-300 backdrop-blur-sm ${
                plan.popular 
                  ? `${plan.borderColor} bg-gradient-to-br ${plan.accentColor} shadow-2xl ring-4 ring-forsythia/20` 
                  : `${plan.borderColor} bg-arctic-powder/80 hover:bg-gradient-to-br hover:${plan.accentColor} hover:shadow-xl`
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
                <p className="text-oceanic-noir/60 text-sm font-sans leading-relaxed">{plan.description}</p>
              </div>
              
              <div className="mb-10 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-oceanic-noir">{pricingData.currencies[currency].symbol}</span>
                <motion.span
                  key={`${currency}-${billingCycle}-${plan.name}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-7xl font-bold text-oceanic-noir tracking-tighter"
                >
                  {calculatePrice(plan.basePrice[currency])}
                </motion.span>
                <span className="text-oceanic-noir/50 font-medium text-lg">/mo</span>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <div className="mt-1 bg-nocturnal-expedition/10 rounded-full p-1">
                      <Check size={14} className="text-nocturnal-expedition" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-oceanic-noir/80 font-sans leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-4 rounded-2xl font-mono font-bold transition-all duration-300 flex items-center justify-center gap-2 group ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-oceanic-noir to-nocturnal-expedition text-arctic-powder hover:shadow-2xl hover:shadow-oceanic-noir/30' 
                    : 'bg-gradient-to-r from-nocturnal-expedition to-oceanic-noir text-arctic-powder hover:shadow-xl border-2 border-transparent hover:border-nocturnal-expedition'
                }`}
              >
                Select {plan.name}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-nocturnal-expedition to-oceanic-noir rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 border-2 border-oceanic-noir/30 shadow-2xl"
        >
           <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-forsythia rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles size={32} className="text-oceanic-noir" />
              </div>
              <div>
                <h4 className="font-bold text-2xl text-arctic-powder mb-2">Need a Custom Solution?</h4>
                <p className="text-sm text-arctic-powder/70 font-sans">Contact our team for enterprise pricing and custom deployments.</p>
              </div>
           </div>
           <button className="px-10 py-4 bg-forsythia text-oceanic-noir font-mono font-bold rounded-2xl hover:bg-deep-saffron transition-all duration-300 shadow-lg hover:shadow-forsythia/50 flex items-center gap-2 group">
              Contact Sales
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
