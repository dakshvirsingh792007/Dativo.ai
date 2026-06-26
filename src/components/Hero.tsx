import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-40 pb-20 px-4 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-mystic-mint/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-forsythia/10 rounded-full blur-[120px]" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl text-center z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mystic-mint/50 border border-mystic-mint text-nocturnal-expedition text-sm font-medium mb-8">
          <Sparkles size={16} />
          <span>Intelligent Data Automation for Modern Teams</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-oceanic-noir mb-6 leading-[1.1] tracking-tight">
          Transform Raw Data into <span className="text-nocturnal-expedition">Actionable Intelligence</span>
        </h1>
        
        <p className="text-xl text-oceanic-noir/70 mb-10 max-w-2xl mx-auto font-sans leading-relaxed">
          The all-in-one platform to orchestrate your data pipeline with AI-driven automation. Scale your operations without increasing complexity.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <AnimatedButton />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border-2 border-nocturnal-expedition/20 text-nocturnal-expedition font-mono font-bold rounded-lg hover:border-nocturnal-expedition transition-colors duration-300"
          >
            Watch Demo
          </motion.button>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        className="mt-20 w-full max-w-6xl rounded-2xl border border-white/40 shadow-2xl overflow-hidden bg-white/50 backdrop-blur-sm p-4"
      >
        <div className="aspect-[16/9] bg-oceanic-noir rounded-lg flex items-center justify-center relative">
          <div className="text-arctic-powder/20 font-mono text-xs overflow-hidden absolute inset-0 p-4 opacity-50 select-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="whitespace-nowrap mb-1">
                {`> analyzing chunk_${i} ... [OK] applied logic_layer_${i} to metadata_cluster_0x${Math.random().toString(16).slice(2, 8)}`}
              </div>
            ))}
          </div>
          <div className="relative z-10 flex flex-col items-center">
             <div className="w-20 h-20 rounded-2xl bg-deep-saffron flex items-center justify-center shadow-[0_0_40px_rgba(255,153,50,0.5)]">
                <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin" />
             </div>
             <p className="mt-6 font-mono text-arctic-powder font-bold text-lg">Initializing AI Data Engine...</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
