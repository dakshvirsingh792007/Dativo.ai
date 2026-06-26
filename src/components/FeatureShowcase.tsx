import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Zap, BarChart3, ChevronDown, ChevronUp, Code, Brain, Lock } from 'lucide-react';

const features = [
  {
    title: 'AI-Powered Automation',
    description: 'Leverage machine learning to automatically classify, route, and transform your data with zero manual intervention.',
    icon: <Brain className="text-forsythia" size={28} />,
    color: 'from-forsythia/20 to-deep-saffron/10',
    borderColor: 'border-forsythia/30',
    gridClass: 'md:col-span-2 md:row-span-1',
  },
  {
    title: 'Real-Time Processing',
    description: 'Process millions of events per second with sub-millisecond latency powered by our distributed architecture.',
    icon: <Zap className="text-deep-saffron" size={28} />,
    color: 'from-deep-saffron/20 to-forsythia/10',
    borderColor: 'border-deep-saffron/30',
    gridClass: 'md:col-span-1 md:row-span-2',
  },
  {
    title: 'Universal Connectors',
    description: 'Connect to 200+ data sources with pre-built integrations. From databases to APIs to cloud storage.',
    icon: <Database className="text-nocturnal-expedition" size={28} />,
    color: 'from-nocturnal-expedition/15 to-mystic-mint/30',
    borderColor: 'border-nocturnal-expedition/30',
    gridClass: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Advanced Analytics',
    description: 'Built-in dashboards and custom visualizations to monitor pipelines and extract business insights.',
    icon: <BarChart3 className="text-oceanic-noir" size={28} />,
    color: 'from-mystic-mint/40 to-arctic-powder',
    borderColor: 'border-oceanic-noir/20',
    gridClass: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Code-First Design',
    description: 'Full programmatic control with SDKs in Python, JavaScript, Go, and more. Version control your pipelines.',
    icon: <Code className="text-nocturnal-expedition" size={28} />,
    color: 'from-arctic-powder to-mystic-mint/50',
    borderColor: 'border-nocturnal-expedition/20',
    gridClass: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Enterprise Security',
    description: 'SOC2 Type II, GDPR, HIPAA compliant. End-to-end encryption with granular access controls.',
    icon: <Lock className="text-deep-saffron" size={28} />,
    color: 'from-deep-saffron/15 to-forsythia/15',
    borderColor: 'border-deep-saffron/30',
    gridClass: 'md:col-span-1 md:row-span-1',
  },
];

const FeatureShowcase = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="features" className="py-32 px-4 bg-gradient-to-b from-arctic-powder via-mystic-mint/50 to-arctic-powder relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-nocturnal-expedition/5 rounded-full blur-[200px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-nocturnal-expedition/10 border border-nocturnal-expedition/20 rounded-full text-nocturnal-expedition font-mono text-sm font-bold mb-6">
              POWERFUL FEATURES
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-oceanic-noir mb-6 leading-tight">
              Everything You Need to <br />
              <span className="bg-gradient-to-r from-forsythia via-deep-saffron to-nocturnal-expedition bg-clip-text text-transparent">
                Scale Your Data
              </span>
            </h2>
            <p className="text-xl text-oceanic-noir/60 max-w-3xl mx-auto font-sans leading-relaxed">
              Built for developers, trusted by enterprises. Our platform combines cutting-edge AI with enterprise-grade reliability.
            </p>
          </motion.div>
        </div>

        {/* Desktop Bento Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 auto-rows-[280px]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`${feature.gridClass} bg-gradient-to-br ${feature.color} border-2 ${feature.borderColor} rounded-3xl p-8 flex flex-col justify-between group relative overflow-hidden backdrop-blur-sm`}
            >
              <div className="relative z-10">
                <div className="mb-6 w-16 h-16 rounded-2xl bg-arctic-powder shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-oceanic-noir mb-4">{feature.title}</h3>
                <p className="text-oceanic-noir/70 font-sans leading-relaxed">{feature.description}</p>
              </div>
              
              <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-arctic-powder/40 rounded-full blur-3xl group-hover:bg-forsythia/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl border-2 ${feature.borderColor} overflow-hidden transition-all duration-300 ${openIndex === index ? `bg-gradient-to-br ${feature.color} shadow-xl` : 'bg-arctic-powder/60'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-arctic-powder flex items-center justify-center shadow-md">
                    {feature.icon}
                  </div>
                  <span className="text-lg font-bold text-oceanic-noir">{feature.title}</span>
                </div>
                {openIndex === index ? <ChevronUp className="text-oceanic-noir/60" /> : <ChevronDown className="text-oceanic-noir/60" />}
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
                      <p className="text-oceanic-noir/70 font-sans leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
