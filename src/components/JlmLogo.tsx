import React, { useId } from 'react';

interface JlmLogoProps {
  className?: string;
  variant?: 'default' | 'card' | 'transparent' | 'header' | 'symbol' | 'image';
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * JlmLogo Component
 * Precision vector representation of the official Jala Lintas Media (JLM) logo
 * matching the official deep navy corporate card (#001b44) with pure white solid ribbon
 * and wordmark as requested.
 */
export const JlmLogo: React.FC<JlmLogoProps> = ({
  className = '',
  variant = 'default',
  size = 'md',
}) => {
  const uid = useId().replace(/:/g, '');

  const isCard = variant === 'card' || variant === 'default';

  // SVG representation of the official JLM logo
  const renderRibbon = (compact = false) => (
    <svg
      viewBox={compact ? '0 0 800 220' : '0 0 800 420'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-h-full select-none"
      aria-label="Jala Lintas Media Official Logo"
    >
      <defs>
        {/* Subtle Crease Shadow for 3D ribbon origami folds */}
        <filter id={`navy-crease-${uid}`} x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow
            dx="-1.5"
            dy="3.5"
            stdDeviation="3"
            floodColor="#000e26"
            floodOpacity="0.8"
          />
        </filter>

        {/* Soft shadow between overlapping white ribbon layers */}
        <filter id={`layer-overlap-${uid}`} x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow
            dx="-2"
            dy="2"
            stdDeviation="2.5"
            floodColor="#001230"
            floodOpacity="0.75"
          />
        </filter>

        {/* Subtle cyan glow when displayed in transparent mode */}
        <filter id={`neon-glow-${uid}`} x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="6"
            floodColor="#38bdf8"
            floodOpacity="0.25"
          />
        </filter>
      </defs>

      {/* Deep Navy Card Background if card variant */}
      {isCard && (
        <rect
          width="800"
          height="420"
          rx="36"
          fill="#001b44"
        />
      )}

      {/* Main Artwork Group */}
      <g transform={compact ? 'translate(42, 10)' : 'translate(42, 54)'}>
        
        {/* ========================================================
             LAYER 1: UNDERSIDES & FOLD CREASES (Deep Navy Fold Accents)
             ======================================================== */}
        <g id={`ribbon-creases-${uid}`}>
          {/* 1. J Lower U-bend Inner Fold */}
          <path
            d="M 52 118 C 52 158 76 195 132 195 C 164 195 186 178 200 152 L 160 152 C 150 166 138 174 125 174 C 95 174 77 150 77 118 Z"
            fill="#00112e"
          />

          {/* 2. J to L Top Arch Underside Fold */}
          <path
            d="M 205 50 L 254 50 C 268 50 282 60 292 78 L 246 156 L 216 102 Z"
            fill="#00112e"
            filter={`url(#layer-overlap-${uid})`}
          />

          {/* 3. L Foot Curl Inside Roll (Signature fold at end of L foot) */}
          <path
            d="M 378 195 C 410 195 426 179 426 159 C 426 139 408 131 386 135 L 386 157 C 397 155 404 160 404 169 C 404 178 394 183 378 183 Z"
            fill="#00112e"
            filter={`url(#navy-crease-${uid})`}
          />

          {/* 4. M Peak 1 Top Arch Underside Fold */}
          <path
            d="M 428 50 L 476 50 C 490 50 504 60 514 80 L 472 154 L 440 98 Z"
            fill="#00112e"
            filter={`url(#layer-overlap-${uid})`}
          />

          {/* 5. M Center Deep Valley Fold */}
          <path
            d="M 474 154 L 528 195 L 498 195 Z"
            fill="#00112e"
            filter={`url(#navy-crease-${uid})`}
          />

          {/* 6. M Peak 2 Top Arch Underside Fold */}
          <path
            d="M 590 50 L 638 50 C 652 50 666 60 676 80 L 634 154 L 602 98 Z"
            fill="#00112e"
            filter={`url(#layer-overlap-${uid})`}
          />
        </g>

        {/* ========================================================
             LAYER 2: SOLID PURE WHITE FRONT RIBBON FACES
             ======================================================== */}
        <g id={`ribbon-white-surfaces-${uid}`} fill="#ffffff">
          {/* 1. J Left Terminal Angled Cut */}
          <path
            d="M 52 118 L 88 118 L 74 90 L 38 90 Z"
          />

          {/* 2. J Front Curved Face rising to Peak 1 */}
          <path
            d="M 52 118 L 88 118 C 88 144 104 162 126 162 C 146 162 164 142 178 114 L 250 50 L 206 50 L 142 152 C 132 164 120 172 106 172 C 92 172 86 164 86 146 C 86 130 86 118 86 118 Z"
          />

          {/* 3. J-to-L Crest Flat Top Arch */}
          <path
            d="M 224 50 C 246 50 274 55 296 78 L 280 90 C 264 70 242 66 224 66 Z"
          />

          {/* 4. L Descending Stem from Peak 1 */}
          <path
            d="M 296 78 L 248 156 L 226 195 L 270 195 L 294 146 L 336 72 Z"
            filter={`url(#layer-overlap-${uid})`}
          />

          {/* 5. L Horizontal Foot along Baseline */}
          <path
            d="M 226 195 L 384 195 C 408 195 426 181 426 159 C 426 139 408 133 386 133 L 386 149 C 398 149 406 153 406 163 C 406 174 392 179 376 179 L 260 179 L 270 195 Z"
          />

          {/* 6. M First Ascending Stem to Peak 1 */}
          <path
            d="M 336 195 L 380 195 L 476 50 L 428 50 Z"
            filter={`url(#layer-overlap-${uid})`}
          />

          {/* 7. M Peak 1 Crest Flat Top Arch */}
          <path
            d="M 446 50 C 468 50 496 55 520 78 L 504 90 C 486 70 466 66 448 66 Z"
          />

          {/* 8. M Descending Leg into Center Valley */}
          <path
            d="M 520 78 L 474 154 L 478 195 L 524 195 L 560 128 L 538 84 Z"
            filter={`url(#layer-overlap-${uid})`}
          />

          {/* 9. M Second Ascending Leg to Peak 2 */}
          <path
            d="M 508 195 L 546 195 L 638 50 L 592 50 Z"
            filter={`url(#layer-overlap-${uid})`}
          />

          {/* 10. M Peak 2 Crest Flat Top Arch */}
          <path
            d="M 608 50 C 630 50 658 55 682 78 L 666 90 C 648 70 628 66 610 66 Z"
          />

          {/* 11. M Final Terminal Descending Leg */}
          <path
            d="M 682 78 L 642 154 L 640 195 L 718 195 L 734 104 Z"
            filter={`url(#layer-overlap-${uid})`}
          />

          {/* REGISTERED TRADEMARK SYMBOL (R) */}
          <g transform="translate(724, 36)">
            <circle
              cx="11"
              cy="11"
              r="10.5"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.2"
            />
            <text
              x="11"
              y="15.2"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="12.5"
              fontWeight="900"
              textAnchor="middle"
              fill="#ffffff"
            >
              R
            </text>
          </g>
        </g>

        {/* ========================================================
             LAYER 3: JALA LINTAS MEDIA WORDMARK (SOLID PURE WHITE)
             ======================================================== */}
        {!compact && (
          <g transform="translate(376, 280)">
            <text
              x="0"
              y="0"
              textAnchor="middle"
              fontFamily="'Plus Jakarta Sans', 'Inter', 'Montserrat', -apple-system, sans-serif"
              fontSize="37"
              fontWeight="900"
              letterSpacing="18px"
              fill="#ffffff"
              style={{ textTransform: 'uppercase' }}
            >
              JALA LINTAS MEDIA
            </text>
          </g>
        )}
      </g>
    </svg>
  );

  // Responsive size constraints
  const sizeClasses = {
    sm: 'max-w-[240px]',
    md: 'max-w-[320px] sm:max-w-[380px]',
    lg: 'max-w-[420px] sm:max-w-[480px]',
    xl: 'max-w-[560px]',
  }[size];

  // 1. EXACT IMAGE ASSET VARIANT
  if (variant === 'image') {
    return (
      <img
        src="/jlm-logo-card.png"
        alt="Jala Lintas Media"
        className={`w-auto h-auto object-contain select-none ${className}`}
      />
    );
  }

  // 2. HEADER COMPACT VARIANT (Used in top navbar)
  if (variant === 'header') {
    return (
      <div className={`flex items-center gap-2 select-none ${className}`}>
        {/* Ribbon Monogram */}
        <div className="w-14 sm:w-16 shrink-0 filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)]">
          {renderRibbon(true)}
        </div>

        {/* Brand Text */}
        <div className="flex flex-col justify-center leading-tight">
          <div className="flex items-center gap-1.5">
            <span className="font-cyber font-black tracking-widest text-xs sm:text-sm text-white uppercase">
              JALA LINTAS MEDIA
            </span>
            <span className="text-[9px] font-mono-cyber font-bold px-1.5 py-0.2 rounded bg-blue-950 text-cyan-300 border border-blue-800">
              JLM
            </span>
          </div>
        </div>
      </div>
    );
  }

  // 3. SYMBOL ONLY VARIANT (Ribbon only)
  if (variant === 'symbol') {
    return (
      <div className={`w-14 sm:w-20 ${className}`}>
        {renderRibbon(true)}
      </div>
    );
  }

  // 4. CARD VARIANT (Exact replica of uploaded image: deep navy card #001b44 with pure white ribbon & text)
  if (isCard) {
    return (
      <div className={`w-full flex flex-col items-center justify-center select-none ${className}`}>
        <div className={`w-full ${sizeClasses} rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.02] border border-blue-950/60`}>
          {renderRibbon(false)}
        </div>
      </div>
    );
  }

  // 5. TRANSPARENT VARIANT (No navy card background, seamless on dark backgrounds)
  return (
    <div className={`w-full flex flex-col items-center justify-center select-none ${className}`}>
      <div className={`w-full ${sizeClasses} transition-transform duration-300 hover:scale-[1.02] filter drop-shadow-[0_4px_20px_rgba(255,255,255,0.15)]`}>
        {renderRibbon(false)}
      </div>
    </div>
  );
};
