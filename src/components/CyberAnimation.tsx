const CyberAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30" aria-hidden="true">
      {/* Enhanced cyber security animation */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Dynamic cybersecurity network animation with data flow"
      >
        <defs>
          {/* Dynamic grid pattern */}
          <pattern id="dynamicGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1">
              <animate attributeName="stroke-opacity" values="0.1;0.25;0.1" dur="4s" repeatCount="indefinite" />
            </path>
          </pattern>
          
          {/* Glowing gradient for data streams */}
          <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          
          {/* Shield gradient */}
          <radialGradient id="shieldGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
          </radialGradient>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#dynamicGrid)" />
        
        {/* Animated data streams */}
        <g>
          {/* Horizontal data flows */}
          <line x1="0" y1="200" x2="1200" y2="220" stroke="url(#dataFlow)" strokeWidth="3">
            <animateTransform 
              attributeName="transform" 
              type="translate" 
              values="-100,0; 1300,0; -100,0" 
              dur="6s" 
              repeatCount="indefinite"
            />
          </line>
          <line x1="0" y1="400" x2="1200" y2="380" stroke="url(#dataFlow)" strokeWidth="2">
            <animateTransform 
              attributeName="transform" 
              type="translate" 
              values="-150,0; 1350,0; -150,0" 
              dur="8s" 
              repeatCount="indefinite"
            />
          </line>
          <line x1="0" y1="600" x2="1200" y2="590" stroke="url(#dataFlow)" strokeWidth="2.5">
            <animateTransform 
              attributeName="transform" 
              type="translate" 
              values="-120,0; 1320,0; -120,0" 
              dur="7s" 
              repeatCount="indefinite"
            />
          </line>
          
          {/* Diagonal connections */}
          <line x1="200" y1="100" x2="800" y2="300" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="8,4">
            <animate attributeName="stroke-dashoffset" values="0;24" dur="3s" repeatCount="indefinite" />
          </line>
          <line x1="600" y1="150" x2="1000" y2="400" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="6,3">
            <animate attributeName="stroke-dashoffset" values="0;18" dur="2.5s" repeatCount="indefinite" />
          </line>
        </g>
        
        {/* Security nodes network */}
        <g>
          {/* Main security hubs */}
          <circle cx="300" cy="200" r="8" fill="rgba(255,255,255,0.8)">
            <animate attributeName="r" values="6;12;6" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="700" cy="350" r="8" fill="rgba(255,255,255,0.8)">
            <animate attributeName="r" values="6;12;6" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="900" cy="180" r="8" fill="rgba(255,255,255,0.8)">
            <animate attributeName="r" values="6;12;6" dur="3.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3.5s" repeatCount="indefinite" />
          </circle>
          
          {/* Secondary nodes */}
          <circle cx="150" cy="350" r="4" fill="rgba(255,255,255,0.6)">
            <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="500" cy="500" r="4" fill="rgba(255,255,255,0.6)">
            <animate attributeName="r" values="3;6;3" dur="2.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="1050" cy="300" r="4" fill="rgba(255,255,255,0.6)">
            <animate attributeName="r" values="3;6;3" dur="2.3s" repeatCount="indefinite" />
          </circle>
        </g>
        
        {/* Central security shield - more prominent */}
        <g transform="translate(600, 400)">
          {/* Rotating outer ring */}
          <circle cx="0" cy="0" r="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="8,4">
            <animateTransform 
              attributeName="transform" 
              type="rotate" 
              values="0;360" 
              dur="15s" 
              repeatCount="indefinite"
            />
          </circle>
          
          {/* Pulsing middle ring */}
          <circle cx="0" cy="0" r="35" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5">
            <animate attributeName="r" values="30;40;30" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" />
          </circle>
          
          {/* Main shield */}
          <path 
            d="M-20,-15 L0,-25 L20,-15 L20,10 C20,18 10,25 0,25 C-10,25 -20,18 -20,10 Z" 
            fill="url(#shieldGlow)"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="1"
          >
            <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
          </path>
          
          {/* Lock symbol in shield */}
          <rect x="-4" y="-2" width="8" height="8" rx="1" fill="rgba(255,255,255,0.9)" />
          <circle cx="0" cy="-6" r="3" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" />
        </g>
        
        {/* Floating data particles */}
        <g>
          <circle cx="100" cy="100" r="2" fill="rgba(255,255,255,0.5)">
            <animateTransform 
              attributeName="transform" 
              type="translate" 
              values="0,0; 50,30; 0,0" 
              dur="5s" 
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="1100" cy="150" r="1.5" fill="rgba(255,255,255,0.4)">
            <animateTransform 
              attributeName="transform" 
              type="translate" 
              values="0,0; -30,50; 0,0" 
              dur="6s" 
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="200" cy="700" r="2.5" fill="rgba(255,255,255,0.6)">
            <animateTransform 
              attributeName="transform" 
              type="translate" 
              values="0,0; 40,-20; 0,0" 
              dur="4.5s" 
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
};

export default CyberAnimation;