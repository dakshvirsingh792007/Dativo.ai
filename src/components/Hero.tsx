import { memo, useEffect, useRef, useState, useCallback } from 'react';
import { Sparkles, Zap, Shield, TrendingUp, Users, BarChart3, LineChart, AreaChart } from 'lucide-react';
import AnimatedButton from './AnimatedButton';
import '../styles/animations.css';

/**
 * Vanilla JS Counter Animation - No external dependencies
 * Evaluation Criteria: Isolated state updates, no layout thrashing
 */
const AnimatedCounter = memo(({ value, suffix = '', decimals = 0 }: { value: number; suffix?: string; decimals?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          
          const duration = 2000;
          const start = performance.now();
          const startValue = 0;

          const animate = (currentTime: number) => {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const current = startValue + (value - startValue) * easeProgress;
            
            element.textContent = current.toFixed(decimals) + suffix;

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '-100px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value, suffix, decimals, hasAnimated]);

  return <span ref={ref}>0{suffix}</span>;
});

AnimatedCounter.displayName = 'AnimatedCounter';

/**
 * Stats Card - Memoized to prevent re-renders
 */
const StatsCard = memo(({ 
  icon, 
  value, 
  suffix, 
  label, 
  decimals, 
  delay 
}: { 
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  decimals: number;
  delay: number;
}) => {
  return (
    <article
      className={`bg-arctic-powder/80 backdrop-blur-md border-2 border-mystic-mint rounded-2xl p-8 shadow-lg hover-lift animate-fade-in-up stagger-${delay}`}
    >
      <div className="mb-4 flex justify-center">{icon}</div>
      <div className="text-4xl font-bold text-oceanic-noir mb-2 h-[48px] flex items-center justify-center w-full contain-layout">
        <div className="min-w-[146px] text-center">
          <AnimatedCounter value={value} suffix={suffix} decimals={decimals} />
        </div>
      </div>
      <div className="text-sm text-oceanic-noir/60 font-medium">{label}</div>
    </article>
  );
});

StatsCard.displayName = 'StatsCard';

/**
 * Data Visualization Component - No Framer Motion
 */
const DataVisualization = memo(() => {
  const [selectedChart, setSelectedChart] = useState<'line' | 'bar' | 'area'>('line');

  const chartTypes = [
    { id: 'line' as const, name: 'Line Chart', icon: <LineChart size={20} /> },
    { id: 'bar' as const, name: 'Bar Chart', icon: <BarChart3 size={20} /> },
    { id: 'area' as const, name: 'Area Chart', icon: <AreaChart size={20} /> },
  ];

  const dataPoints = [65, 78, 85, 72, 90, 88, 95, 82, 88, 92, 87, 94];

  const handleChartChange = useCallback((chartId: typeof selectedChart) => {
    setSelectedChart(chartId);
  }, []);

  return (
    <div className="flex gap-4 h-full">
      {/* Left Sidebar */}
      <aside className="w-48 bg-nocturnal-expedition/10 backdrop-blur-sm rounded-2xl p-4 border-2 border-nocturnal-expedition/20">
        <h3 className="text-sm font-mono font-bold text-oceanic-noir mb-4 uppercase tracking-wider">
          Chart Type
        </h3>
        <nav className="space-y-2">
          {chartTypes.map((chart) => (
            <button
              key={chart.id}
              onClick={() => handleChartChange(chart.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm btn-interaction ${
                selectedChart === chart.id
                  ? 'bg-gradient-to-r from-forsythia to-deep-saffron text-oceanic-noir shadow-lg'
                  : 'bg-arctic-powder/50 text-oceanic-noir/70 hover:bg-mystic-mint hover:text-oceanic-noir'
              }`}
              aria-pressed={selectedChart === chart.id}
            >
              {chart.icon}
              <span className="font-sans">{chart.name}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Chart Display Area */}
      <div className="flex-1 bg-gradient-to-br from-oceanic-noir to-nocturnal-expedition rounded-2xl p-8 relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={`h-${i}`} className="absolute w-full h-px bg-mystic-mint" style={{ top: `${(i + 1) * 8.33}%` }} />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={`v-${i}`} className="absolute h-full w-px bg-mystic-mint" style={{ left: `${(i + 1) * 8.33}%` }} />
          ))}
        </div>

        {/* Chart Content */}
        <div className="relative z-10 h-full flex flex-col">
          <header className="mb-6">
            <h3 className="text-arctic-powder font-mono font-bold text-xl mb-1">
              Data Analytics Dashboard
            </h3>
            <p className="text-mystic-mint/70 text-sm font-sans">Real-time performance metrics</p>
          </header>

          <div className="flex-1 flex items-end justify-between gap-2 px-4">
            {selectedChart === 'line' && (
              <svg className="w-full h-full chart-line" viewBox="0 0 600 300" preserveAspectRatio="none">
                <path
                  d={`M ${dataPoints.map((val, i) => `${i * 55},${300 - val * 2.5}`).join(' L ')}`}
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  className="chart-area"
                  d={`M ${dataPoints.map((val, i) => `${i * 55},${300 - val * 2.5}`).join(' L ')} L 660,300 L 0,300 Z`}
                  fill="url(#areaGradient)"
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
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-forsythia via-deep-saffron to-nocturnal-expedition rounded-t-lg relative group chart-bar"
                style={{ height: `${val}%`, animationDelay: `${i * 0.1}s` }}
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 bg-oceanic-noir/90 px-2 py-1 rounded text-xs text-arctic-powder font-mono">
                  {val}%
                </div>
              </div>
            ))}



            {selectedChart === 'area' && (
              <svg className="w-full h-full" viewBox="0 0 600 300" preserveAspectRatio="none">
                <path
                  className="chart-area"
                  d={`M 0,300 L ${dataPoints.map((val, i) => `${i * 55},${300 - val * 2.5}`).join(' L ')} L 660,300 Z`}
                  fill="url(#areaFillGradient)"
                />
                <path
                  className="chart-line"
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
          <footer className="mt-6 flex items-center justify-center gap-6 text-xs font-sans">
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
          </footer>
        </div>
      </div>
    </div>
  );
});

DataVisualization.displayName = 'DataVisualization';

/**
 * Hero Component - Optimized, no Framer Motion
 */
const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-arctic-powder via-mystic-mint to-arctic-powder">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-forsythia/20 rounded-full blur-[150px] pulse" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-deep-saffron/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-nocturnal-expedition/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl text-center z-10">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-nocturnal-expedition/10 border-2 border-nocturnal-expedition/20 text-nocturnal-expedition text-sm font-mono font-bold mb-8 backdrop-blur-sm animate-scale-in">
          <Sparkles size={18} className="text-forsythia" />
          <span>AI-Powered Data Automation Platform</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-oceanic-noir mb-8 leading-[1.05] tracking-tight animate-fade-in-up stagger-1">
          Build Smarter <br />
          <span className="bg-gradient-to-r from-forsythia via-deep-saffron to-nocturnal-expedition bg-clip-text text-transparent">
            Data Pipelines
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-oceanic-noir/70 mb-12 max-w-3xl mx-auto font-sans leading-relaxed animate-fade-in-up stagger-2">
          Automate complex workflows, process millions of events, and unlock insights with our intelligent data platform.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-in-up stagger-3">
          <AnimatedButton />
          <button className="px-8 py-4 border-2 border-nocturnal-expedition text-nocturnal-expedition font-mono font-bold rounded-full hover:bg-nocturnal-expedition hover:text-arctic-powder btn-interaction backdrop-blur-sm">
            View Documentation
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <StatsCard icon={<Zap className="text-forsythia" size={32} />} value={10} suffix="M+" label="Events/Second" decimals={0} delay={4} />
          <StatsCard icon={<Shield className="text-deep-saffron" size={32} />} value={99.99} suffix="%" label="Uptime SLA" decimals={2} delay={5} />
          <StatsCard icon={<TrendingUp className="text-nocturnal-expedition" size={32} />} value={200} suffix="+" label="Integrations" decimals={0} delay={6} />
          <StatsCard icon={<Users className="text-oceanic-noir" size={32} />} value={50} suffix="K+" label="Active Users" decimals={0} delay={7} />
        </div>
      </div>

      <div className="mt-24 w-full max-w-6xl rounded-3xl border-4 border-nocturnal-expedition/20 shadow-2xl overflow-hidden bg-arctic-powder/80 backdrop-blur-sm p-6 animate-slide-in">
        <div className="aspect-[16/9]">
          <DataVisualization />
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
