import AnimatedButton from './AnimatedButton';

const Navbar = () => {
  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <div className="glass-pill px-10 py-5 flex items-center justify-between">
        <div className="text-nocturnal-expedition font-mono font-bold text-2xl tracking-tighter">
          DATA.AI
        </div>
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative text-oceanic-noir/80 hover:text-oceanic-noir font-medium text-base transition-colors group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-deep-saffron transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <AnimatedButton />
      </div>
    </nav>
  );
};

export default Navbar;
