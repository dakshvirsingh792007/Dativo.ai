import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Sparkles, Zap, Shield, TrendingUp, Users, BarChart3, LineChart, PieChart, AreaChart } from 'lucide-react';
import AnimatedButton from './AnimatedButton';
import { useEffect, useRef, useState } from 'react';

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

const DataVisualization = () => {
  const [selectedChart, setSelectedChart] = useState<'line' | 'bar' | 'pie' | 'area'>('line');

  const chartTypes = [
    { id: 'line' as const, name: 'Line Chart', icon: <LineChart size={20} /> },
    { id: 'bar' as const, name: 'Bar Chart', icon: <BarChart3 size={20} /> },
    { id: 'pie' as const, name: 'Pie Chart', icon: <PieChart size={20} /> },
    { id: 'area' as const, name: 'Area Chart', icon: <AreaChart size={20} /> },
  ];

  // Sample data points
  const dataPoints = [65, 78, 85, 72, 90, 88, 95, 82, 88, 92, 87, 94];

  return (
    <div className="flex gap-4 h-full">
      {/* Left Sidebar */}
      <div className="w-48 bg-nocturnal-expedition/10 backdrop-blur-sm rounded-2xl p-4 border-2 border-nocturnal-expedition/20">
        <h3 className="text-sm font-mono font-bold text-oceanic-noir mb-4 uppercase tracking-wider">Chart Type</h3>
        <div className="space-y-2">
          {chartTypes.map((chart) => (
            <button
              key={chart.id}
              onClick={() => setSelectedChart(chart.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                selectedChart === chart.id
                  ? 'bg-gradient-to-r from-forsythia to-deep-saffron text-oceanic-noir shadow-lg'
                  : 'bg-arctic-powder/50 text-oceanic-noir/70 hover:bg-mystic-mint hover:text-oceanic-noir'
              }`}
            >
              {chart.icon}
              <span className="font-sans">{chart.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Chart Display Area */}
      <div className="flex-1 bg-gradient-to-br from-oceanic-noir to-nocturnal-expedition rounded-2xl p-8 relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={`h-${i}`} className="absolute w-full h-px bg-mystic-mint" style={{ top: `${(i + 1) * 8.33}%` }} />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={`v-${i}`} className="absolute h-full w-px bg-mystic-mint" style={{ left: `${(i + 1) * 8.33}%` }} />
          ))}
        </div>

        {/* Chart Content */}
        <div className="relative z-10 h-full flex flex-col">
          <div className="mb-6">
            <h3 className="text-arctic-powder font-mono font-bold text-xl mb-1">Data Analytics Dashboard</h3>
            <p className="text-mystic-mint/70 text-sm font-sans">Real-time performance metrics</p>
          </div>

          <div className="flex-1 flex items-end justify-between gap-2 px-4">
            {selectedChart === 'line' && (
              <svg className="w-full h-full" viewBox="0 0 600 300" preserveAspectRatio="none">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  d={`M ${dataPoints.map((val, i) => `${i * 55},${300 - val * 2.5}`).join(' L ')}`}
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  d={`M ${dataPoints.map((val, i) => `${i * 55},${300 - val * 2.5}`).join(' L ')} L 660,300 L 0,300 Z`}
                  fill="url(#areaGradient)"
                  opacity="0.3"
                />
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFC801" />
                    <stop offset="50%" stopColor="#FF9932" />
                    <stop offset="100%" stopColor="#114C5A" />
                  </linearGradient>
                  <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFC801" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#FFC801" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            )}

            {selectedChart === 'bar' && dataPoints.map((val, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${val}%` }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex-1 bg-gradient-to-t from-forsythia via-deep-saffron to-nocturnal-expedition rounded-t-lg relative group"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-oceanic-noir/90 px-2 py-1 rounded text-xs text-arctic-powder font-mono">
                  {val}%
                </div>
              </motion.div>
            ))}

            {selectedChart === 'pie' && (
              <div className="w-full h-full flex items-center justify-center">
                <svg width="280" height="280" viewBox="0 0 280 280">
                  <motion.circle
                    initial={{ strokeDasharray: "0 1000" }}
                    animate={{ strokeDasharray: "314 1000" }}
                    transition={{ duration: 1.5 }}
                    cx="140"
                    cy="140"
                    r="100"
                    fill="none"
                    stroke="#FFC801"
                    strokeWidth="80"
                  />
                  <motion.circle
                    initial={{ strokeDasharray: "0 1000", rotate: 0 }}
                    animate={{ strokeDasharray: "251 1000", rotate: 114 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    cx="140"
                    cy="140"
                    r="100"
                    fill="none"
                    stroke="#FF9932"
                    strokeWidth="80"
                    transform="rotate(114 140 140)"
                  />
                  <motion.circle
                    initial={{ strokeDasharray: "0 1000" }}
                    animate={{ strokeDasharray: "188 1000" }}
                    transition={{ duration: 1.5, delay: 0.4 }}
                    cx="140"
                    cy="140"
                    r="100"
                    fill="none"
                    stroke="#114C5A"
                    strokeWidth="80"
                    transform="rotate(245 140 140)"
                  />
                  <circle cx="140" cy="140" r="60" fill="#172B36" />
                  <text x="140" y="145" textAnchor="middle" fill="#F1F6F4" fontSize="24" fontWeight="bold" fontFamily="monospace">
                    100%
                  </text>
                </svg>
              </div>
            )}

            {selectedChart === 'area' && (
              <svg className="w-full h-full" viewBox="0 0 600 300" preserveAspectRatio="none">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  d={`M 0,300 L ${dataPoints.map((val, i) => `${i * 55},${300 - val * 2.5}`).join(' L ')} L 660,300 Z`}
                  fill="url(#areaFillGradient)"
                />
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  d={`M ${dataPoints.map((val, i) => `${i * 55},${300 - val * 2.5}`).join(' L ')}`}
                  fill="none"
                  stroke="#FFC801"
                  strokeWidth="3"
                />
                <defs>
                  <linearGradient id="areaFillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FF9932" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#114C5A" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>
            )}
          </div>

          {/* Legend */}
          <div className="mt-6 flex items-center justify-center gap-6 text-xs font-sans">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-forsythia" />
              <span className="text-mystic-mint">Revenue</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-deep-saffron" />
              <span className="text-mystic-mint">Growth</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-nocturnal-expedition" />
              <span className="text-mystic-mint">Target</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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
              <div className="text-4xl font-bold text-oceanic-noir mb-2 h-[48px] flex items-center justify-center w-full">
                <div className="min-w-[146px] text-center">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                </div>
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
        className="mt-24 w-full max-w-6xl rounded-3xl border-4 border-nocturnal-expedition/20 shadow-2xl overflow-hidden bg-arctic-powder/80 backdrop-blur-sm p-6"
      >
        <div className="aspect-[16/9]">
          <DataVisualization />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
