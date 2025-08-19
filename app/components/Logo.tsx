'use client';

interface LogoProps {
  size?: number;
  variant?: 'brain-circuit' | 'hexagon-flask' | 'connected-nodes' | 'abstract-c' | 'lightbulb-gear' | 'molecule' | 'beaker' | 'c-geometric' | 'c-flowing' | 'c-layered' | 'c-neon' | 'c-organic' | 'c-tech' | 'c-minimal';
  className?: string;
}

export default function Logo({ size = 40, variant = 'abstract-c', className = '' }: LogoProps) {
  const iconComponents = {
    'brain-circuit': (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
        <defs>
          <linearGradient id="brain-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#14B8A6" />
          </linearGradient>
        </defs>
        {/* Brain outline */}
        <path 
          d="M12 8C15 6 25 6 28 8C32 10 32 16 30 20C32 24 30 30 26 32C22 34 18 34 14 32C10 30 8 24 10 20C8 16 8 10 12 8Z" 
          stroke="url(#brain-gradient)" 
          strokeWidth="2" 
          fill="none"
        />
        {/* Circuit lines */}
        <path d="M16 12L24 12M18 16L22 16M16 20L24 20" stroke="url(#brain-gradient)" strokeWidth="1.5" opacity="0.7" />
        {/* Circuit nodes */}
        <circle cx="16" cy="12" r="1.5" fill="url(#brain-gradient)" />
        <circle cx="24" cy="12" r="1.5" fill="url(#brain-gradient)" />
        <circle cx="22" cy="16" r="1.5" fill="url(#brain-gradient)" />
        <circle cx="20" cy="20" r="1.5" fill="url(#brain-gradient)" />
      </svg>
    ),

    'hexagon-flask': (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
        <defs>
          <linearGradient id="flask-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#14B8A6" />
          </linearGradient>
        </defs>
        {/* Hexagon container */}
        <path 
          d="M20 4L30 10L30 20L20 26L10 20L10 10L20 4Z" 
          stroke="url(#flask-gradient)" 
          strokeWidth="2" 
          fill="none"
        />
        {/* Flask inside */}
        <path 
          d="M16 8L16 12L12 20L28 20L24 12L24 8L20 8L20 6L20 8Z" 
          fill="url(#flask-gradient)" 
          opacity="0.3"
        />
        <path 
          d="M16 8L24 8M16 12L24 12" 
          stroke="url(#flask-gradient)" 
          strokeWidth="1.5"
        />
        {/* Bubbles */}
        <circle cx="18" cy="16" r="1" fill="url(#flask-gradient)" opacity="0.6" />
        <circle cx="22" cy="18" r="0.8" fill="url(#flask-gradient)" opacity="0.6" />
      </svg>
    ),

    'connected-nodes': (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
        <defs>
          <linearGradient id="nodes-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#14B8A6" />
          </linearGradient>
        </defs>
        {/* Connection lines */}
        <path d="M10 10L20 20M30 10L20 20M10 30L20 20M30 30L20 20" stroke="url(#nodes-gradient)" strokeWidth="1.5" opacity="0.6" />
        {/* Nodes */}
        <circle cx="10" cy="10" r="3" fill="url(#nodes-gradient)" />
        <circle cx="30" cy="10" r="3" fill="url(#nodes-gradient)" />
        <circle cx="10" cy="30" r="3" fill="url(#nodes-gradient)" />
        <circle cx="30" cy="30" r="3" fill="url(#nodes-gradient)" />
        <circle cx="20" cy="20" r="4" fill="url(#nodes-gradient)" />
      </svg>
    ),

    'abstract-c': (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
        <defs>
          <linearGradient id="c-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#14B8A6" />
          </linearGradient>
        </defs>
        {/* Modern C shape */}
        <path 
          d="M28 12C28 8 24 4 20 4C16 4 12 8 12 20C12 32 16 36 20 36C24 36 28 32 28 28" 
          stroke="url(#c-gradient)" 
          strokeWidth="4" 
          fill="none" 
          strokeLinecap="round"
        />
        {/* Accent dots */}
        <circle cx="32" cy="12" r="2" fill="url(#c-gradient)" />
        <circle cx="32" cy="28" r="2" fill="url(#c-gradient)" />
      </svg>
    ),

    'lightbulb-gear': (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
        <defs>
          <linearGradient id="bulb-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#14B8A6" />
          </linearGradient>
        </defs>
        {/* Lightbulb */}
        <path 
          d="M16 10C16 6 18 4 20 4C22 4 24 6 24 10C24 14 22 16 22 20L18 20C18 16 16 14 16 10Z" 
          fill="url(#bulb-gradient)" 
          opacity="0.7"
        />
        <rect x="18" y="20" width="4" height="2" fill="url(#bulb-gradient)" />
        <rect x="17" y="22" width="6" height="2" rx="1" fill="url(#bulb-gradient)" />
        
        {/* Gear */}
        <g transform="translate(26, 26)">
          <circle cx="0" cy="0" r="6" stroke="url(#bulb-gradient)" strokeWidth="2" fill="none" />
          <circle cx="0" cy="0" r="2" fill="url(#bulb-gradient)" />
          <rect x="-1" y="-8" width="2" height="3" fill="url(#bulb-gradient)" />
          <rect x="-1" y="5" width="2" height="3" fill="url(#bulb-gradient)" />
          <rect x="-8" y="-1" width="3" height="2" fill="url(#bulb-gradient)" />
          <rect x="5" y="-1" width="3" height="2" fill="url(#bulb-gradient)" />
        </g>
      </svg>
    ),

    'molecule': (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
        <defs>
          <linearGradient id="molecule-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#14B8A6" />
          </linearGradient>
        </defs>
        {/* Molecular bonds */}
        <path d="M12 12L20 20M28 12L20 20M12 28L20 20M28 28L20 20M20 8L20 20M20 32L20 20" 
              stroke="url(#molecule-gradient)" strokeWidth="1.5" opacity="0.6" />
        {/* Atoms */}
        <circle cx="12" cy="12" r="3" fill="url(#molecule-gradient)" />
        <circle cx="28" cy="12" r="3" fill="url(#molecule-gradient)" />
        <circle cx="12" cy="28" r="3" fill="url(#molecule-gradient)" />
        <circle cx="28" cy="28" r="3" fill="url(#molecule-gradient)" />
        <circle cx="20" cy="8" r="2" fill="url(#molecule-gradient)" />
        <circle cx="20" cy="32" r="2" fill="url(#molecule-gradient)" />
        <circle cx="20" cy="20" r="4" fill="url(#molecule-gradient)" />
      </svg>
    ),

    'beaker': (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
        <defs>
          <linearGradient id="beaker-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#14B8A6" />
          </linearGradient>
        </defs>
        {/* Beaker outline */}
        <path 
          d="M14 6L14 16L8 30C7 32 8 34 10 34L30 34C32 34 33 32 32 30L26 16L26 6" 
          stroke="url(#beaker-gradient)" 
          strokeWidth="2" 
          fill="none"
        />
        {/* Liquid */}
        <path 
          d="M11 26L29 26C29 28 28 30 26 32L14 32C12 30 11 28 11 26Z" 
          fill="url(#beaker-gradient)" 
          opacity="0.3"
        />
        {/* Measurement lines */}
        <line x1="16" y1="10" x2="24" y2="10" stroke="url(#beaker-gradient)" strokeWidth="1" opacity="0.5" />
        <line x1="16" y1="14" x2="24" y2="14" stroke="url(#beaker-gradient)" strokeWidth="1" opacity="0.5" />
        {/* Bubbles */}
        <circle cx="18" cy="28" r="1" fill="url(#beaker-gradient)" opacity="0.7" />
        <circle cx="22" cy="30" r="0.8" fill="url(#beaker-gradient)" opacity="0.7" />
      </svg>
    ),

    // === ABSTRACT C VARIATIONS ===
    'c-geometric': (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
        <defs>
          <linearGradient id="c-geo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
        {/* Geometric C with angular cuts */}
        <path 
          d="M28 8L24 4L16 4C10 4 6 8 6 14L6 26C6 32 10 36 16 36L24 36L28 32L28 28L24 28L24 32L16 32C12 32 10 30 10 26L10 14C10 10 12 8 16 8L24 8L24 12L28 12L28 8Z" 
          fill="url(#c-geo-gradient)"
        />
      </svg>
    ),

    'c-flowing': (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
        <defs>
          <linearGradient id="c-flow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        {/* Flowing, organic C shape */}
        <path 
          d="M30 10C30 6 26 2 20 2C14 2 8 6 8 14L8 26C8 34 14 38 20 38C26 38 30 34 30 30" 
          stroke="url(#c-flow-gradient)" 
          strokeWidth="6" 
          fill="none" 
          strokeLinecap="round"
        />
        {/* Flowing accent */}
        <path 
          d="M32 12C34 10 36 12 34 14C32 16 30 14 32 12Z" 
          fill="url(#c-flow-gradient)" 
          opacity="0.6"
        />
        <path 
          d="M32 28C34 30 36 28 34 26C32 24 30 26 32 28Z" 
          fill="url(#c-flow-gradient)" 
          opacity="0.6"
        />
      </svg>
    ),

    'c-layered': (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
        <defs>
          <linearGradient id="c-layer-gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id="c-layer-gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#0891B2" />
          </linearGradient>
          <linearGradient id="c-layer-gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>
        {/* Layered C shapes */}
        <path 
          d="M32 14C32 8 28 4 22 4C16 4 12 8 12 16L12 24C12 32 16 36 22 36C28 36 32 32 32 26" 
          stroke="url(#c-layer-gradient1)" 
          strokeWidth="3" 
          fill="none" 
          strokeLinecap="round"
        />
        <path 
          d="M29 13C29 9 26 6 21 6C16 6 13 9 13 15L13 25C13 31 16 34 21 34C26 34 29 31 29 27" 
          stroke="url(#c-layer-gradient2)" 
          strokeWidth="2.5" 
          fill="none" 
          strokeLinecap="round"
          opacity="0.7"
        />
        <path 
          d="M26 12C26 10 25 8 22 8C19 8 16 10 16 14L16 26C16 30 19 32 22 32C25 32 26 30 26 28" 
          stroke="url(#c-layer-gradient3)" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    ),

    'c-neon': (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
        <defs>
          <linearGradient id="c-neon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF0080" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#00D4FF" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        {/* Neon C with glow effect */}
        <path 
          d="M30 12C30 6 26 2 20 2C14 2 8 6 8 16L8 24C8 34 14 38 20 38C26 38 30 34 30 28" 
          stroke="url(#c-neon-gradient)" 
          strokeWidth="3" 
          fill="none" 
          strokeLinecap="round"
          filter="url(#glow)"
        />
        {/* Inner glow */}
        <path 
          d="M28 12C28 8 25 5 20 5C15 5 11 8 11 16L11 24C11 32 15 35 20 35C25 35 28 32 28 28" 
          stroke="url(#c-neon-gradient)" 
          strokeWidth="1.5" 
          fill="none" 
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    ),

    'c-organic': (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
        <defs>
          <radialGradient id="c-organic-gradient" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="50%" stopColor="#059669" />
            <stop offset="100%" stopColor="#064E3B" />
          </radialGradient>
        </defs>
        {/* Organic, nature-inspired C */}
        <path 
          d="M28 8C30 6 32 8 30 12C30 6 26 2 20 2C12 2 6 8 6 18C6 22 8 38 20 38C26 38 30 34 30 28C32 32 30 34 28 32" 
          stroke="url(#c-organic-gradient)" 
          strokeWidth="4" 
          fill="none" 
          strokeLinecap="round"
        />
        {/* Organic texture elements */}
        <circle cx="15" cy="12" r="1.5" fill="url(#c-organic-gradient)" opacity="0.4" />
        <circle cx="12" cy="20" r="2" fill="url(#c-organic-gradient)" opacity="0.3" />
        <circle cx="16" cy="28" r="1" fill="url(#c-organic-gradient)" opacity="0.5" />
      </svg>
    ),

    'c-tech': (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
        <defs>
          <linearGradient id="c-tech-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
        </defs>
        {/* Tech-inspired C with circuit elements */}
        <path 
          d="M30 12C30 6 26 2 20 2C14 2 8 6 8 16L8 24C8 34 14 38 20 38C26 38 30 34 30 28" 
          stroke="url(#c-tech-gradient)" 
          strokeWidth="3" 
          fill="none" 
          strokeLinecap="square"
        />
        {/* Circuit elements */}
        <rect x="32" y="10" width="4" height="4" fill="url(#c-tech-gradient)" opacity="0.8" />
        <rect x="32" y="26" width="4" height="4" fill="url(#c-tech-gradient)" opacity="0.8" />
        <line x1="30" y1="12" x2="32" y2="12" stroke="url(#c-tech-gradient)" strokeWidth="2" />
        <line x1="30" y1="28" x2="32" y2="28" stroke="url(#c-tech-gradient)" strokeWidth="2" />
        {/* Internal circuit lines */}
        <line x1="12" y1="8" x2="20" y2="8" stroke="url(#c-tech-gradient)" strokeWidth="1" opacity="0.6" />
        <line x1="12" y1="32" x2="20" y2="32" stroke="url(#c-tech-gradient)" strokeWidth="1" opacity="0.6" />
      </svg>
    ),

    'c-minimal': (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
        <defs>
          <linearGradient id="c-minimal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6B7280" />
            <stop offset="100%" stopColor="#374151" />
          </linearGradient>
        </defs>
        {/* Ultra minimal C */}
        <path 
          d="M28 12C28 8 24 4 20 4C16 4 12 8 12 20C12 32 16 36 20 36C24 36 28 32 28 28" 
          stroke="url(#c-minimal-gradient)" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round"
        />
        {/* Minimal accent dot */}
        <circle cx="30" cy="20" r="2" fill="url(#c-minimal-gradient)" />
      </svg>
    ),
  };

  return iconComponents[variant] || iconComponents['abstract-c'];
}