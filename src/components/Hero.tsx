import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Sparkles, Zap, Shield, TrendingUp, Users } from 'lucide-react';
import AnimatedButton from './AnimatedButton';
import { useEffect, useRef } from 'react';

const AnimatedCounter = ({ value, suffix = '', decimals = 0 }: { value: number; suffix?: string; decimals?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(decimals) + suffix;
      }
    });
  }, [springValue, decimals, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-arctic-powder via-mystic-mint to-arctic-powder">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-forsythia/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-deep-saffron/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-nocturnal-expedition/10 rounded-full blur-[120px]" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl text-center z-10"
      >
        <motion.div 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-nocturnal-expedition/10 border-2 border-nocturnal-expedition/20 text-nocturnal-expedition text-sm font-mono font-bold mb-8 backdrop-blur-sm"
        >
          <Sparkles size={18} className="text-forsythia" />
          <span>AI-Powered Data Automation Platform</span>
        </motion.div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-oceanic-noir mb-8 leading-[1.05] tracking-tight">
          Build Smarter <br />
          <span className="bg-gradient-to-r from-forsythia via-deep-saffron to-nocturnal-expedition bg-clip-text text-transparent">
            Data Pipelines
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-oceanic-noir/70 mb-12 max-w-3xl mx-auto font-sans leading-relaxed">
          Automate complex workflows, process millions of events, and unlock insights with our intelligent data platform.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <AnimatedButton />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-nocturnal-expedition text-nocturnal-expedition font-mono font-bold rounded-full hover:bg-nocturnal-expedition hover:text-arctic-powder transition-all duration-300 backdrop-blur-sm"
          >
            View Documentation
          </motion.button>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {[
            { icon: <Zap className="text-forsythia" size={32} />, value: 10, suffix: 'M+', label: 'Events/Second', decimals: 0 },
            { icon: <Shield className="text-deep-saffron" size={32} />, value: 99.99, suffix: '%', label: 'Uptime SLA', decimals: 2 },
            { icon: <TrendingUp className="text-nocturnal-expedition" size={32} />, value: 200, suffix: '+', label: 'Integrations', decimals: 0 },
            { icon: <Users className="text-oceanic-noir" size={32} />, value: 50, suffix: 'K+', label: 'Active Users', decimals: 0 },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-arctic-powder/80 backdrop-blur-md border-2 border-mystic-mint rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">{stat.icon}</div>
              <div className="text-4xl font-bold text-oceanic-noir mb-2 font-mono min-h-[48px] flex items-center justify-center">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </div>
              <div className="text-sm text-oceanic-noir/60 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
        className="mt-24 w-full max-w-6xl rounded-3xl border-4 border-nocturnal-expedition/20 shadow-2xl overflow-hidden bg-oceanic-noir/95 backdrop-blur-sm p-2"
      >
        <div className="aspect-[16/9] bg-gradient-to-br from-oceanic-noir to-nocturnal-expedition rounded-2xl flex items-center justify-center relative overflow-hidden">
          {/* Code Animation Background */}
          <div className="text-mystic-mint/20 font-mono text-xs overflow-hidden absolute inset-0 p-6 opacity-40 select-none">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="whitespace-nowrap mb-1 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
                {`> pipeline_${i}.execute() → [SUCCESS] processed ${Math.floor(Math.random() * 10000)} records | latency: ${Math.floor(Math.random() * 100)}ms`}
              </div>
            ))}
          </div>
          
          {/* Center Content */}
          <div className="relative z-10 flex flex-col items-center">
             <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-forsythia to-deep-saffron flex items-center justify-center shadow-[0_0_60px_rgba(255,200,1,0.6)]">
                <div className="w-16 h-16 border-4 border-arctic-powder border-t-transparent rounded-full animate-spin" />
             </div>
             <p className="mt-8 font-mono text-arctic-powder font-bold text-xl">Processing Real-Time Data...</p>
             <div className="mt-4 flex gap-2">
               <div className="w-3 h-3 bg-forsythia rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
               <div className="w-3 h-3 bg-deep-saffron rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
               <div className="w-3 h-3 bg-mystic-mint rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
             </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
