import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Zap, Shield, BarChart3, ChevronDown, ChevronUp } from 'lucide-react';

const features = [
  {
    title: 'Automated Ingestion',
    description: 'Connect to 200+ data sources instantly. AI-driven mapping ensures schema consistency across your stack.',
    icon: <Database className="text-deep-saffron" size={24} />,
    color: 'bg-mystic-mint/30',
    gridClass: 'md:col-span-2 md:row-span-1',
  },
  {
    title: 'Real-time Processing',
    description: 'Process millions of events per second with sub-millisecond latency.',
    icon: <Zap className="text-forsythia" size={24} />,
    color: 'bg-nocturnal-expedition/10',
    gridClass: 'md:col-span-1 md:row-span-2',
  },
  {
    title: 'Predictive Analytics',
    description: 'Leverage machine learning to forecast trends and identify anomalies before they impact your business.',
    icon: <BarChart3 className="text-nocturnal-expedition" size={24} />,
    color: 'bg-arctic-powder',
    gridClass: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Enterprise Security',
    description: 'SOC2 Type II, GDPR, and HIPAA compliant. Your data is encrypted at rest and in transit.',
    icon: <Shield className="text-nocturnal-expedition" size={24} />,
    color: 'bg-mystic-mint/50',
    gridClass: 'md:col-span-1 md:row-span-1',
  },
];

const FeatureShowcase = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="features" className="py-24 px-4 bg-arctic-powder">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-oceanic-noir mb-4">
            Engineered for <span className="text-nocturnal-expedition">Excellence</span>
          </h2>
          <p className="text-lg text-oceanic-noir/60 max-w-2xl mx-auto font-sans">
            Our platform combines cutting-edge AI with robust infrastructure to provide a seamless data experience.
          </p>
        </div>

        {/* Desktop Bento Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 auto-rows-[240px]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`${feature.gridClass} ${feature.color} border border-oceanic-noir/5 rounded-3xl p-8 flex flex-col justify-between group relative overflow-hidden`}
            >
              <div className="relative z-10">
                <div className="mb-4 w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-oceanic-noir mb-3">{feature.title}</h3>
                <p className="text-oceanic-noir/60 font-sans leading-relaxed">{feature.description}</p>
              </div>
              
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/40 rounded-full blur-2xl group-hover:bg-deep-saffron/10 transition-colors" />
            </motion.div>
          ))}
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-2xl border border-oceanic-noir/5 overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-white shadow-xl' : 'bg-mystic-mint/20'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    {feature.icon}
                  </div>
                  <span className="text-lg font-bold text-oceanic-noir">{feature.title}</span>
                </div>
                {openIndex === index ? <ChevronUp className="text-oceanic-noir/40" /> : <ChevronDown className="text-oceanic-noir/40" />}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <p className="text-oceanic-noir/60 font-sans leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
