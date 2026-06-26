const Navbar = () => {
  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4">
      <div className="glass-pill px-8 py-4 flex items-center justify-between">
        <div className="text-nocturnal-expedition font-mono font-bold text-xl tracking-tighter">
          DATA.AI
        </div>
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative text-oceanic-noir/80 hover:text-oceanic-noir font-medium transition-colors group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-deep-saffron transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <button className="hidden md:block px-4 py-2 bg-nocturnal-expedition text-arctic-powder font-mono text-sm rounded-full hover:bg-oceanic-noir transition-colors">
          Join Waitlist
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
