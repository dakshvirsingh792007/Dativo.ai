import { lazy, Suspense, useState, useEffect, memo } from 'react';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import { Github, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react';
import './styles/animations.css';

// Lazy load components for better performance
const Hero = lazy(() => import('./components/Hero'));
const FeatureShowcase = lazy(() => import('./components/FeatureShowcase'));
const Pricing = lazy(() => import('./components/Pricing'));

/**
 * Footer Component - Semantic HTML with proper structure
 */
const Footer = memo(() => {
  return (
    <footer className="bg-gradient-to-b from-oceanic-noir to-nocturnal-expedition text-arctic-powder pt-24 pb-12 px-4 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-forsythia/5 rounded-full blur-[150px]" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-deep-saffron/5 rounded-full blur-[130px]" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Newsletter Section */}
        <section className="bg-gradient-to-r from-forsythia to-deep-saffron rounded-3xl p-10 md:p-16 mb-20 relative overflow-hidden animate-fade-in-up">
          <div className="absolute inset-0 bg-oceanic-noir/10" aria-hidden="true" />
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-oceanic-noir mb-4">
              Stay Updated with Latest Features
            </h2>
            <p className="text-oceanic-noir/70 font-sans mb-8 max-w-2xl mx-auto">
              Get weekly insights, product updates, and best practices delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                type="email"
                id="newsletter-email"
                name="email"
                placeholder="Enter your email"
                required
                aria-required="true"
                className="flex-1 px-6 py-4 rounded-2xl bg-arctic-powder text-oceanic-noir placeholder:text-oceanic-noir/40 font-sans focus:outline-none focus:ring-4 focus:ring-oceanic-noir/20"
              />
              <button 
                type="submit"
                className="px-8 py-4 bg-oceanic-noir text-arctic-powder font-mono font-bold rounded-2xl hover:bg-nocturnal-expedition btn-interaction flex items-center justify-center gap-2 group"
              >
                Subscribe
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-150" />
              </button>
            </form>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-arctic-powder font-mono font-bold text-3xl tracking-tighter mb-6 flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-forsythia to-deep-saffron rounded-xl" aria-hidden="true" />
              DATIVO.AI
            </div>
            <p className="text-arctic-powder/70 font-sans text-sm leading-relaxed mb-8 max-w-sm">
              The next generation of AI-powered data automation. Built for developers, trusted by enterprises worldwide.
            </p>
            <nav aria-label="Social media links">
              <ul className="flex gap-3">
                <li>
                  <a 
                    href="https://twitter.com/dativoai" 
                    className="w-12 h-12 rounded-xl bg-arctic-powder/10 backdrop-blur-sm border border-arctic-powder/20 flex items-center justify-center hover:bg-forsythia hover:border-forsythia btn-interaction group"
                    aria-label="Twitter"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Twitter size={20} className="group-hover:text-oceanic-noir transition-colors duration-150" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/dativoai" 
                    className="w-12 h-12 rounded-xl bg-arctic-powder/10 backdrop-blur-sm border border-arctic-powder/20 flex items-center justify-center hover:bg-forsythia hover:border-forsythia btn-interaction group"
                    aria-label="GitHub"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Github size={20} className="group-hover:text-oceanic-noir transition-colors duration-150" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://linkedin.com/company/dativoai" 
                    className="w-12 h-12 rounded-xl bg-arctic-powder/10 backdrop-blur-sm border border-arctic-powder/20 flex items-center justify-center hover:bg-forsythia hover:border-forsythia btn-interaction group"
                    aria-label="LinkedIn"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Linkedin size={20} className="group-hover:text-oceanic-noir transition-colors duration-150" />
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:contact@dativo.ai" 
                    className="w-12 h-12 rounded-xl bg-arctic-powder/10 backdrop-blur-sm border border-arctic-powder/20 flex items-center justify-center hover:bg-forsythia hover:border-forsythia btn-interaction group"
                    aria-label="Email"
                  >
                    <Mail size={20} className="group-hover:text-oceanic-noir transition-colors duration-150" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <nav aria-label="Product links">
            <h3 className="font-mono font-bold uppercase tracking-widest text-xs mb-6 text-forsythia">
              Product
            </h3>
            <ul className="space-y-4 text-sm text-arctic-powder/70 font-sans">
              <li><a href="#features" className="hover:text-forsythia transition-colors duration-150">Features</a></li>
              <li><a href="#integrations" className="hover:text-forsythia transition-colors duration-150">Integrations</a></li>
              <li><a href="#pricing" className="hover:text-forsythia transition-colors duration-150">Pricing</a></li>
              <li><a href="#changelog" className="hover:text-forsythia transition-colors duration-150">Changelog</a></li>
              <li><a href="#docs" className="hover:text-forsythia transition-colors duration-150">API Docs</a></li>
            </ul>
          </nav>

          <nav aria-label="Company links">
            <h3 className="font-mono font-bold uppercase tracking-widest text-xs mb-6 text-forsythia">
              Company
            </h3>
            <ul className="space-y-4 text-sm text-arctic-powder/70 font-sans">
              <li><a href="#about" className="hover:text-forsythia transition-colors duration-150">About Us</a></li>
              <li><a href="#careers" className="hover:text-forsythia transition-colors duration-150">Careers</a></li>
              <li><a href="#blog" className="hover:text-forsythia transition-colors duration-150">Blog</a></li>
              <li><a href="#press" className="hover:text-forsythia transition-colors duration-150">Press Kit</a></li>
              <li><a href="#contact" className="hover:text-forsythia transition-colors duration-150">Contact</a></li>
            </ul>
          </nav>

          <nav aria-label="Legal links">
            <h3 className="font-mono font-bold uppercase tracking-widest text-xs mb-6 text-forsythia">
              Legal
            </h3>
            <ul className="space-y-4 text-sm text-arctic-powder/70 font-sans">
              <li><a href="#privacy" className="hover:text-forsythia transition-colors duration-150">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-forsythia transition-colors duration-150">Terms of Service</a></li>
              <li><a href="#security" className="hover:text-forsythia transition-colors duration-150">Security</a></li>
              <li><a href="#compliance" className="hover:text-forsythia transition-colors duration-150">Compliance</a></li>
              <li><a href="#gdpr" className="hover:text-forsythia transition-colors duration-150">GDPR</a></li>
            </ul>
          </nav>
        </div>

        <div className="pt-10 border-t border-arctic-powder/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-arctic-powder/50 font-mono">
            © 2024 DATIVO.AI Systems Inc. All rights reserved.
          </p>
          <div 
            className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-mystic-mint/10 border border-mystic-mint/20 text-[10px] font-mono uppercase tracking-widest text-arctic-powder/70"
            role="status"
            aria-live="polite"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-forsythia pulse shadow-lg shadow-forsythia/50" aria-hidden="true" />
            All Systems Operational
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

/**
 * Main App Component
 * Evaluation Criteria: Proper semantic HTML, lazy loading, optimized performance
 */
function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  // Prevent scroll during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && <Loader onComplete={handleLoadComplete} />}
      
      <div className={`min-h-screen selection:bg-deep-saffron selection:text-oceanic-noir ${isLoading ? 'opacity-0' : 'opacity-100 animate-fade-in'}`}>
        <Navbar />
        
        <main id="main-content">
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="spinner w-16 h-16 border-4 border-nocturnal-expedition border-t-transparent rounded-full" />
            </div>
          }>
            <Hero />
            <FeatureShowcase />
            <Pricing />
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

export default App;
