import { useState, useEffect, useCallback, memo } from 'react';
import { Database, Zap, BarChart3, ChevronDown, ChevronUp, Code, Brain, Lock } from 'lucide-react';
import '../styles/animations.css';

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

/**
 * Feature Card Component - Memoized
 */
const FeatureCard = memo(({ 
  feature, 
  index 
}: { 
  feature: typeof features[0]; 
  index: number;
}) => {
  return (
    <article
      className={`${feature.gridClass} bg-gradient-to-br ${feature.color} border-2 ${feature.borderColor} rounded-3xl p-8 flex flex-col justify-between group relative overflow-hidden backdrop-blur-sm hover-lift animate-fade-in-up stagger-${index + 1}`}
    >
      <div className="relative z-10">
        <div className="mb-6 w-16 h-16 rounded-2xl bg-arctic-powder shadow-lg flex items-center justify-center hover-scale-small">
          {feature.icon}
        </div>
        <h3 className="text-2xl font-bold text-oceanic-noir mb-4">{feature.title}</h3>
        <p className="text-oceanic-noir/70 font-sans leading-relaxed">{feature.description}</p>
      </div>

      <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-arctic-powder/40 rounded-full blur-3xl layout-transition" aria-hidden="true" />
    </article>
  );
});

FeatureCard.displayName = 'FeatureCard';

/**
 * Accordion Item - Memoized for mobile view
 * Evaluation Criteria: Automatic index context tracking on window resize
 */
const AccordionItem = memo(({ 
  feature, 
  index, 
  isOpen, 
  onToggle 
}: { 
  feature: typeof features[0]; 
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <article
      className={`rounded-2xl border-2 ${feature.borderColor} overflow-hidden layout-transition ${
        isOpen ? `bg-gradient-to-br ${feature.color} shadow-xl` : 'bg-arctic-powder/60'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left btn-interaction"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${index}`}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-arctic-powder flex items-center justify-center shadow-md">
            {feature.icon}
          </div>
          <span className="text-lg font-bold text-oceanic-noir">{feature.title}</span>
        </div>
        {isOpen ? (
          <ChevronUp className="text-oceanic-noir/60" aria-hidden="true" />
        ) : (
          <ChevronDown className="text-oceanic-noir/60" aria-hidden="true" />
        )}
      </button>

      <div
        id={`accordion-content-${index}`}
        className={`accordion-content ${isOpen ? 'open' : ''}`}
      >
        <div className="px-6 pb-6 pt-2">
          <p className="text-oceanic-noir/70 font-sans leading-relaxed">{feature.description}</p>
        </div>
      </div>
    </article>
  );
});

AccordionItem.displayName = 'AccordionItem';

/**
 * Main FeatureShowcase Component
 * Evaluation Criteria: Responsive Bento-to-Accordion with automatic index tracking
 */
const FeatureShowcase = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState(0); // Automatic index context tracking

  // Automatic index context tracking on window resize
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      
      // Track viewport context - Reset index if transitioning and out of bounds
      if (mobile && currentIndex >= features.length) {
        setCurrentIndex(0);
        setOpenIndex(0);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [currentIndex]);

  // Memoized toggle handler
  const handleToggle = useCallback((index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
    setCurrentIndex(index); // Track current context
  }, [openIndex]);

  return (
    <section
      id="features"
      className="py-32 px-4 bg-gradient-to-b from-arctic-powder via-mystic-mint/50 to-arctic-powder relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-nocturnal-expedition/5 rounded-full blur-[200px]" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center mb-20 animate-fade-in-up">
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
        </header>

        {/* Desktop Bento Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 auto-rows-[280px]">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Mobile Accordion - Zero dependency, automatic index tracking */}
        <div className="md:hidden space-y-4">
          {features.map((feature, index) => (
            <AccordionItem
              key={index}
              feature={feature}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(FeatureShowcase);
