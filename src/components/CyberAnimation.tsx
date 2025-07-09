const CyberAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20" aria-hidden="true">
      {/* Animated network grid */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Animated cybersecurity network background"
      >
        {/* Grid lines */}
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
          </pattern>
          <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Animated connection lines */}
        <g className="animate-pulse">
          <line x1="100" y1="150" x2="300" y2="200" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
          </line>
          <line x1="500" y1="100" x2="650" y2="250" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" values="0;10" dur="3s" repeatCount="indefinite" />
          </line>
          <line x1="200" y1="400" x2="600" y2="350" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" values="0;10" dur="2.5s" repeatCount="indefinite" />
          </line>
        </g>
        
        {/* Network nodes */}
        <g>
          <circle cx="100" cy="150" r="4" fill="rgba(255,255,255,0.6)">
            <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="300" cy="200" r="4" fill="rgba(255,255,255,0.6)">
            <animate attributeName="r" values="4;6;4" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="500" cy="100" r="4" fill="rgba(255,255,255,0.6)">
            <animate attributeName="r" values="4;6;4" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="650" cy="250" r="4" fill="rgba(255,255,255,0.6)">
            <animate attributeName="r" values="4;6;4" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="400" r="4" fill="rgba(255,255,255,0.6)">
            <animate attributeName="r" values="4;6;4" dur="2.1s" repeatCount="indefinite" />
          </circle>
          <circle cx="600" cy="350" r="4" fill="rgba(255,255,255,0.6)">
            <animate attributeName="r" values="4;6;4" dur="1.9s" repeatCount="indefinite" />
          </circle>
        </g>
        
        {/* Floating shield icon */}
        <g transform="translate(400, 300)" className="animate-pulse">
          <circle cx="0" cy="0" r="30" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="3,3">
            <animateTransform 
              attributeName="transform" 
              type="rotate" 
              values="0;360" 
              dur="20s" 
              repeatCount="indefinite"
            />
          </circle>
          <path 
            d="M-12,-8 L0,-16 L12,-8 L12,8 C12,12 8,16 0,16 C-8,16 -12,12 -12,8 Z" 
            fill="rgba(255,255,255,0.3)"
          />
        </g>
      </svg>
    </div>
  );
};

export default CyberAnimation;