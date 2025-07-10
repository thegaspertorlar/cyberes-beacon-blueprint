const CyberAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-40" aria-hidden="true">
      {/* Enhanced vibrant cyber security animation */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Dynamic cybersecurity network animation with data flow and threat detection"
      >
        <defs>
          {/* Enhanced grid pattern with glow */}
          <pattern id="dynamicGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1">
              <animate attributeName="stroke-opacity" values="0.1;0.4;0.1" dur="3s" repeatCount="indefinite" />
            </path>
          </pattern>
          
          {/* Vibrant data flow gradient */}
          <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="30%" stopColor="rgba(100,200,255,0.8)" />
            <stop offset="70%" stopColor="rgba(255,255,255,1)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          
          {/* Threat detection gradient */}
          <linearGradient id="threatScan" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,100,100,0)" />
            <stop offset="50%" stopColor="rgba(255,100,100,0.9)" />
            <stop offset="100%" stopColor="rgba(255,100,100,0)" />
          </linearGradient>
          
          {/* Enhanced shield gradient */}
          <radialGradient id="shieldGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(100,200,255,0.8)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.6)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
          </radialGradient>
          
          {/* Pulse effect */}
          <filter id="pulse">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#dynamicGrid)" />
        
        {/* Dynamic data streams */}
        <g>
          {/* High-priority data flows */}
          <line x1="0" y1="150" x2="1200" y2="170" stroke="url(#dataFlow)" strokeWidth="4">
            <animateTransform 
              attributeName="transform" 
              type="translate" 
              values="-200,0; 1400,0; -200,0" 
              dur="4s" 
              repeatCount="indefinite"
            />
          </line>
          <line x1="0" y1="300" x2="1200" y2="280" stroke="url(#dataFlow)" strokeWidth="3">
            <animateTransform 
              attributeName="transform" 
              type="translate" 
              values="-180,0; 1380,0; -180,0" 
              dur="5s" 
              repeatCount="indefinite"
            />
          </line>
          <line x1="0" y1="450" x2="1200" y2="460" stroke="url(#dataFlow)" strokeWidth="3.5">
            <animateTransform 
              attributeName="transform" 
              type="translate" 
              values="-160,0; 1360,0; -160,0" 
              dur="4.5s" 
              repeatCount="indefinite"
            />
          </line>
          <line x1="0" y1="600" x2="1200" y2="590" stroke="url(#dataFlow)" strokeWidth="2.5">
            <animateTransform 
              attributeName="transform" 
              type="translate" 
              values="-140,0; 1340,0; -140,0" 
              dur="6s" 
              repeatCount="indefinite"
            />
          </line>
          
          {/* Threat scanning beams */}
          <line x1="0" y1="250" x2="1200" y2="230" stroke="url(#threatScan)" strokeWidth="2">
            <animateTransform 
              attributeName="transform" 
              type="translate" 
              values="-100,0; 1300,0; -100,0" 
              dur="3s" 
              repeatCount="indefinite"
            />
          </line>
          
          {/* Network connections */}
          <line x1="100" y1="80" x2="700" y2="200" stroke="rgba(100,200,255,0.6)" strokeWidth="2" strokeDasharray="10,5">
            <animate attributeName="stroke-dashoffset" values="0;30" dur="2s" repeatCount="indefinite" />
          </line>
          <line x1="500" y1="120" x2="900" y2="320" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeDasharray="8,4">
            <animate attributeName="stroke-dashoffset" values="0;24" dur="2.5s" repeatCount="indefinite" />
          </line>
          <line x1="800" y1="100" x2="300" y2="500" stroke="rgba(100,200,255,0.4)" strokeWidth="2" strokeDasharray="6,3">
            <animate attributeName="stroke-dashoffset" values="0;18" dur="3s" repeatCount="indefinite" />
          </line>
        </g>
        
        {/* Enhanced security nodes */}
        <g>
          {/* Primary security hubs */}
          <circle cx="200" cy="150" r="10" fill="rgba(100,200,255,0.9)" filter="url(#pulse)">
            <animate attributeName="r" values="8;15;8" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="600" cy="300" r="10" fill="rgba(255,255,255,0.9)" filter="url(#pulse)">
            <animate attributeName="r" values="8;15;8" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="950" cy="200" r="10" fill="rgba(100,200,255,0.9)" filter="url(#pulse)">
            <animate attributeName="r" values="8;15;8" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="400" cy="500" r="10" fill="rgba(255,255,255,0.9)" filter="url(#pulse)">
            <animate attributeName="r" values="8;15;8" dur="2.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2.8s" repeatCount="indefinite" />
          </circle>
          
          {/* Secondary nodes */}
          <circle cx="100" cy="400" r="6" fill="rgba(100,200,255,0.7)">
            <animate attributeName="r" values="4;8;4" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="800" cy="450" r="6" fill="rgba(255,255,255,0.7)">
            <animate attributeName="r" values="4;8;4" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="1100" cy="350" r="6" fill="rgba(100,200,255,0.7)">
            <animate attributeName="r" values="4;8;4" dur="2.1s" repeatCount="indefinite" />
          </circle>
        </g>
        
        {/* Central enhanced security shield */}
        <g transform="translate(600, 400)">
          {/* Outer rotating shield ring */}
          <circle cx="0" cy="0" r="60" fill="none" stroke="rgba(100,200,255,0.5)" strokeWidth="3" strokeDasharray="12,6" filter="url(#pulse)">
            <animateTransform 
              attributeName="transform" 
              type="rotate" 
              values="0;360" 
              dur="12s" 
              repeatCount="indefinite"
            />
          </circle>
          
          {/* Middle pulsing ring */}
          <circle cx="0" cy="0" r="45" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2">
            <animate attributeName="r" values="40;50;40" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
          </circle>
          
          {/* Inner scanning ring */}
          <circle cx="0" cy="0" r="30" fill="none" stroke="rgba(100,200,255,0.8)" strokeWidth="1" strokeDasharray="4,2">
            <animateTransform 
              attributeName="transform" 
              type="rotate" 
              values="360;0" 
              dur="8s" 
              repeatCount="indefinite"
            />
          </circle>
          
          {/* Main shield body */}
          <path 
            d="M-25,-20 L0,-30 L25,-20 L25,15 C25,25 12,32 0,32 C-12,32 -25,25 -25,15 Z" 
            fill="url(#shieldGlow)"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="2"
            filter="url(#pulse)"
          >
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
          </path>
          
          {/* Enhanced lock symbol */}
          <rect x="-6" y="-3" width="12" height="12" rx="2" fill="rgba(255,255,255,0.95)" />
          <circle cx="0" cy="-8" r="4" fill="none" stroke="rgba(255,255,255,0.95)" strokeWidth="2" />
          
          {/* Security status indicators */}
          <circle cx="-20" cy="-10" r="2" fill="rgba(100,255,100,0.9)">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="20" cy="-10" r="2" fill="rgba(100,255,100,0.9)">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
          </circle>
        </g>
        
        {/* Enhanced floating particles */}
        <g>
          <circle cx="80" cy="80" r="3" fill="rgba(100,200,255,0.8)" filter="url(#pulse)">
            <animateTransform 
              attributeName="transform" 
              type="translate" 
              values="0,0; 60,40; 0,0" 
              dur="4s" 
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="1120" cy="120" r="2.5" fill="rgba(255,255,255,0.7)">
            <animateTransform 
              attributeName="transform" 
              type="translate" 
              values="0,0; -40,60; 0,0" 
              dur="5s" 
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="150" cy="700" r="3.5" fill="rgba(100,200,255,0.9)">
            <animateTransform 
              attributeName="transform" 
              type="translate" 
              values="0,0; 50,-30; 0,0" 
              dur="3.5s" 
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="1050" cy="650" r="2" fill="rgba(255,255,255,0.6)">
            <animateTransform 
              attributeName="transform" 
              type="translate" 
              values="0,0; -35,-45; 0,0" 
              dur="4.5s" 
              repeatCount="indefinite"
            />
          </circle>
        </g>
        
        {/* Scanning lines for dynamic effect */}
        <g>
          <line x1="0" y1="0" x2="1200" y2="0" stroke="rgba(100,200,255,0.4)" strokeWidth="1">
            <animateTransform 
              attributeName="transform" 
              type="translate" 
              values="0,0; 0,800; 0,0" 
              dur="8s" 
              repeatCount="indefinite"
            />
          </line>
          <line x1="0" y1="0" x2="0" y2="800" stroke="rgba(255,255,255,0.3)" strokeWidth="1">
            <animateTransform 
              attributeName="transform" 
              type="translate" 
              values="0,0; 1200,0; 0,0" 
              dur="10s" 
              repeatCount="indefinite"
            />
          </line>
        </g>
      </svg>
    </div>
  );
};

export default CyberAnimation;