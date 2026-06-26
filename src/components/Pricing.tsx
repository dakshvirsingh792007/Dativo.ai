import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';

type Currency = 'INR' | 'USD' | 'EUR';
type BillingCycle = 'monthly' | 'annual';

const pricingData = {
  plans: [
    {
      name: 'Starter',
      description: 'Ideal for small teams exploring AI automation.',
      basePrice: { INR: 2500, USD: 29, EUR: 27 },
      features: ['Up to 5 data sources', '1M events/month', 'Standard Support', 'Basic AI Templates'],
    },
    {
      name: 'Professional',
      description: 'The most popular choice for growing organizations.',
      basePrice: { INR: 8500, USD: 99, EUR: 92 },
      popular: true,
      features: ['Unlimited sources', '20M events/month', 'Priority Support', 'Custom AI Workflows', 'Advanced Analytics'],
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for high-volume requirements.',
      basePrice: { INR: 25000, USD: 299, EUR: 275 },
      features: ['Unlimited everything', 'Dedicated Account Manager', '24/7 Phone Support', 'On-premise Deployment', 'Custom Security Layer'],
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
    <section id="pricing" className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-forsythia/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-oceanic-noir mb-6">
            Predictable <span className="text-deep-saffron">Pricing</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
            {/* Billing Cycle Toggle */}
            <div className="flex items-center gap-4 bg-mystic-mint/20 p-1.5 rounded-full border border-mystic-mint/30">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${billingCycle === 'monthly' ? 'bg-nocturnal-expedition text-arctic-powder shadow-lg' : 'text-nocturnal-expedition/60 hover:text-nocturnal-expedition'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all relative ${billingCycle === 'annual' ? 'bg-nocturnal-expedition text-arctic-powder shadow-lg' : 'text-nocturnal-expedition/60 hover:text-nocturnal-expedition'}`}
              >
                Annual
                <span className="absolute -top-4 -right-4 bg-deep-saffron text-arctic-powder text-[10px] px-2 py-0.5 rounded-full uppercase tracking-widest font-bold">
                  20% OFF
                </span>
              </button>
            </div>

            {/* Currency Switcher */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-oceanic-noir/40 uppercase tracking-widest">Currency:</span>
              <div className="flex bg-arctic-powder rounded-lg p-1 border border-oceanic-noir/5">
                {(Object.keys(pricingData.currencies) as Currency[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${currency === c ? 'bg-white text-nocturnal-expedition shadow-sm ring-1 ring-oceanic-noir/5' : 'text-oceanic-noir/40 hover:text-oceanic-noir'}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingData.plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className={`relative rounded-[2rem] p-10 flex flex-col border transition-all duration-300 ${plan.popular ? 'border-nocturnal-expedition ring-4 ring-nocturnal-expedition/5 bg-white' : 'border-oceanic-noir/5 bg-arctic-powder/50 hover:bg-white hover:border-nocturnal-expedition/20'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-nocturnal-expedition text-arctic-powder px-6 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-oceanic-noir mb-2">{plan.name}</h3>
                <p className="text-oceanic-noir/60 text-sm font-sans">{plan.description}</p>
              </div>
              
              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-oceanic-noir">{pricingData.currencies[currency].symbol}</span>
                <motion.span
                  key={`${currency}-${billingCycle}-${plan.name}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-6xl font-bold text-oceanic-noir tracking-tighter"
                >
                  {calculatePrice(plan.basePrice[currency])}
                </motion.span>
                <span className="text-oceanic-noir/40 font-medium">/mo</span>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <div className="mt-1 bg-mystic-mint rounded-full p-0.5">
                      <Check size={14} className="text-nocturnal-expedition" />
                    </div>
                    <span className="text-sm text-oceanic-noir/70 font-sans">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-4 rounded-xl font-mono font-bold transition-all duration-300 ${plan.popular ? 'bg-nocturnal-expedition text-arctic-powder hover:bg-oceanic-noir shadow-xl shadow-nocturnal-expedition/20' : 'bg-white border-2 border-nocturnal-expedition text-nocturnal-expedition hover:bg-nocturnal-expedition hover:text-white'}`}
              >
                Select {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 bg-nocturnal-expedition/5 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-nocturnal-expedition/10">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                <Info size={24} className="text-nocturnal-expedition" />
              </div>
              <div>
                <h4 className="font-bold text-oceanic-noir">Need a custom plan?</h4>
                <p className="text-sm text-oceanic-noir/60 font-sans">Contact our sales team for high-volume enterprise needs.</p>
              </div>
           </div>
           <button className="px-8 py-3 bg-oceanic-noir text-arctic-powder font-mono font-bold rounded-lg hover:bg-nocturnal-expedition transition-colors">
              Talk to Sales
           </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
