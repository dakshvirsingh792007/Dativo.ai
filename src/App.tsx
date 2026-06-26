import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureShowcase from './components/FeatureShowcase';
import Pricing from './components/Pricing';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-oceanic-noir text-arctic-powder pt-20 pb-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="text-arctic-powder font-mono font-bold text-2xl tracking-tighter mb-6">
              DATA.AI
            </div>
            <p className="text-arctic-powder/60 font-sans text-sm leading-relaxed mb-6">
              The next generation of data automation. Built for speed, security, and scale.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-mono font-bold uppercase tracking-widest text-xs mb-6 text-forsythia">Product</h4>
            <ul className="space-y-4 text-sm text-arctic-powder/60 font-sans">
              <li><a href="#" className="hover:text-arctic-powder transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-arctic-powder transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-arctic-powder transition-colors">Enterprise</a></li>
              <li><a href="#" className="hover:text-arctic-powder transition-colors">Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono font-bold uppercase tracking-widest text-xs mb-6 text-forsythia">Company</h4>
            <ul className="space-y-4 text-sm text-arctic-powder/60 font-sans">
              <li><a href="#" className="hover:text-arctic-powder transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-arctic-powder transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-arctic-powder transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-arctic-powder transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono font-bold uppercase tracking-widest text-xs mb-6 text-forsythia">Legal</h4>
            <ul className="space-y-4 text-sm text-arctic-powder/60 font-sans">
              <li><a href="#" className="hover:text-arctic-powder transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-arctic-powder transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-arctic-powder transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-arctic-powder transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-arctic-powder/40 font-mono">
            © 2026 DATA.AI Systems Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-arctic-powder/60">
             <div className="w-2 h-2 rounded-full bg-mystic-mint animate-pulse" />
             System Status: All Systems Operational
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="min-h-screen selection:bg-deep-saffron selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <FeatureShowcase />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
