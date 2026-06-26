import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureShowcase from './components/FeatureShowcase';
import Pricing from './components/Pricing';
import { Github, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-oceanic-noir to-nocturnal-expedition text-arctic-powder pt-24 pb-12 px-4 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-forsythia/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-deep-saffron/5 rounded-full blur-[130px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-forsythia to-deep-saffron rounded-3xl p-10 md:p-16 mb-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-oceanic-noir/10" />
          <div className="relative z-10 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-oceanic-noir mb-4">
              Stay Updated with Latest Features
            </h3>
            <p className="text-oceanic-noir/70 font-sans mb-8 max-w-2xl mx-auto">
              Get weekly insights, product updates, and best practices delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-2xl bg-arctic-powder text-oceanic-noir placeholder:text-oceanic-noir/40 font-sans focus:outline-none focus:ring-4 focus:ring-oceanic-noir/20"
              />
              <button className="px-8 py-4 bg-oceanic-noir text-arctic-powder font-mono font-bold rounded-2xl hover:bg-nocturnal-expedition transition-all duration-300 flex items-center justify-center gap-2 group">
                Subscribe
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-arctic-powder font-mono font-bold text-3xl tracking-tighter mb-6 flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-forsythia to-deep-saffron rounded-xl" />
              DATA.AI
            </div>
            <p className="text-arctic-powder/70 font-sans text-sm leading-relaxed mb-8 max-w-sm">
              The next generation of AI-powered data automation. Built for developers, trusted by enterprises worldwide.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-12 h-12 rounded-xl bg-arctic-powder/10 backdrop-blur-sm border border-arctic-powder/20 flex items-center justify-center hover:bg-forsythia hover:border-forsythia transition-all duration-300 group">
                <Twitter size={20} className="group-hover:text-oceanic-noir" />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-arctic-powder/10 backdrop-blur-sm border border-arctic-powder/20 flex items-center justify-center hover:bg-forsythia hover:border-forsythia transition-all duration-300 group">
                <Github size={20} className="group-hover:text-oceanic-noir" />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-arctic-powder/10 backdrop-blur-sm border border-arctic-powder/20 flex items-center justify-center hover:bg-forsythia hover:border-forsythia transition-all duration-300 group">
                <Linkedin size={20} className="group-hover:text-oceanic-noir" />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-arctic-powder/10 backdrop-blur-sm border border-arctic-powder/20 flex items-center justify-center hover:bg-forsythia hover:border-forsythia transition-all duration-300 group">
                <Mail size={20} className="group-hover:text-oceanic-noir" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-mono font-bold uppercase tracking-widest text-xs mb-6 text-forsythia">Product</h4>
            <ul className="space-y-4 text-sm text-arctic-powder/70 font-sans">
              <li><a href="#features" className="hover:text-forsythia transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-forsythia transition-colors">Integrations</a></li>
              <li><a href="#pricing" className="hover:text-forsythia transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-forsythia transition-colors">Changelog</a></li>
              <li><a href="#" className="hover:text-forsythia transition-colors">API Docs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono font-bold uppercase tracking-widest text-xs mb-6 text-forsythia">Company</h4>
            <ul className="space-y-4 text-sm text-arctic-powder/70 font-sans">
              <li><a href="#" className="hover:text-forsythia transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-forsythia transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-forsythia transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-forsythia transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-forsythia transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono font-bold uppercase tracking-widest text-xs mb-6 text-forsythia">Legal</h4>
            <ul className="space-y-4 text-sm text-arctic-powder/70 font-sans">
              <li><a href="#" className="hover:text-forsythia transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-forsythia transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-forsythia transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-forsythia transition-colors">Compliance</a></li>
              <li><a href="#" className="hover:text-forsythia transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-arctic-powder/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-arctic-powder/50 font-mono">
            © 2024 DATA.AI Systems Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-mystic-mint/10 border border-mystic-mint/20 text-[10px] font-mono uppercase tracking-widest text-arctic-powder/70">
             <div className="w-2.5 h-2.5 rounded-full bg-forsythia animate-pulse shadow-lg shadow-forsythia/50" />
             All Systems Operational
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="min-h-screen selection:bg-deep-saffron selection:text-oceanic-noir">
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
