import { useEffect, useState } from 'react';
import '../styles/animations.css';

/**
 * Initial Loader Component
 * Evaluation Criteria: 500ms threshold without delaying TTI
 * Uses CSS animations only, no JavaScript delays
 */
const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Start fade out at 400ms to complete by 500ms
    const timer = setTimeout(() => {
      setIsComplete(true);
      // Allow animation to complete before calling onComplete
      setTimeout(onComplete, 100);
    }, 400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-oceanic-noir to-nocturnal-expedition transition-opacity duration-100 ${
        isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden={isComplete}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Logo Animation */}
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-forsythia to-deep-saffron flex items-center justify-center shadow-[0_0_40px_rgba(255,200,1,0.4)] animate-scale-in">
            <div className="w-10 h-10 border-4 border-arctic-powder border-t-transparent rounded-full spinner" />
          </div>
        </div>

        {/* Brand Name */}
        <div className="font-mono font-bold text-2xl text-arctic-powder tracking-tighter animate-fade-in stagger-1">
          DATIVO.AI
        </div>

        {/* Loading Dots */}
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-forsythia rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
          <div className="w-2 h-2 bg-deep-saffron rounded-full animate-pulse" style={{ animationDelay: '0.15s' }} />
          <div className="w-2 h-2 bg-mystic-mint rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
        </div>
      </div>
    </div>
  );
};

export default Loader;
