import { memo } from 'react';
import AnimatedButton from './AnimatedButton';
import '../styles/animations.css';

/**
 * Navigation Component with CSS animations
 * Evaluation Criteria: 150-200ms micro-interactions
 */
const Navbar = memo(() => {
  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4 animate-fade-in"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="glass-pill px-10 py-5 flex items-center justify-between">
        <a 
          href="#" 
          className="text-nocturnal-expedition font-mono font-bold text-2xl tracking-tighter hover-scale-small"
          aria-label="DATIVO.AI Home"
        >
          DATIVO.AI
        </a>
        
        <ul className="hidden md:flex items-center gap-10" role="menubar">
          {navLinks.map((link) => (
            <li key={link.name} role="none">
              <a
                href={link.href}
                role="menuitem"
                className="relative text-oceanic-noir/80 hover:text-oceanic-noir font-medium text-base transition-colors duration-150 ease-out group"
              >
                {link.name}
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-deep-saffron transition-all duration-200 ease-out group-hover:w-full" 
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
        
        <AnimatedButton />
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
