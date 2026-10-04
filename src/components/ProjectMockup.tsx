// Mini UI mockups for floating hero cards

export function AIPlatformMockup() {
  return (
    <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="320" height="200" fill="#0a0a12" />
      {/* Sidebar */}
      <rect x="0" y="0" width="52" height="200" fill="#0f0f1a" />
      <circle cx="26" cy="20" r="8" fill="#00d4ff" opacity="0.9" />
      {[40, 60, 80, 100, 120].map((y, i) => (
        <rect key={i} x="14" y={y} width="24" height="3" rx="1.5" fill={i === 0 ? '#00d4ff' : '#334'} opacity={i === 0 ? 1 : 0.6} />
      ))}
      {/* Main area */}
      <rect x="64" y="12" width="120" height="6" rx="3" fill="#f0f0f0" opacity="0.9" />
      <rect x="64" y="24" width="80" height="4" rx="2" fill="#556" opacity="0.6" />
      {/* Chart area */}
      <rect x="64" y="42" width="244" height="80" rx="6" fill="#111120" />
      {/* Chart lines */}
      {[0,1,2,3].map(i => (
        <line key={i} x1="80" y1={52 + i * 18} x2="296" y2={52 + i * 18} stroke="#223" strokeWidth="0.5" />
      ))}
      {/* Chart path */}
      <polyline
        points="80,118 110,98 140,108 170,72 200,85 230,62 260,75 296,58"
        fill="none" stroke="#00d4ff" strokeWidth="1.5" opacity="0.9"
      />
      <polyline
        points="80,118 110,98 140,108 170,72 200,85 230,62 260,75 296,58 296,122 80,122"
        fill="url(#g1)" opacity="0.2"
      />
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00d4ff" />
          <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Stats row */}
      {[
        { x: 64, label: 'Queries', val: '2.4M' },
        { x: 148, label: 'Accuracy', val: '98.7%' },
        { x: 232, label: 'Latency', val: '12ms' },
      ].map(({ x, label, val }) => (
        <g key={label}>
          <rect x={x} y="134" width="72" height="30" rx="6" fill="#111120" />
          <text x={x + 8} y="146" fill="#556" fontSize="6" fontFamily="monospace">{label}</text>
          <text x={x + 8} y="158" fill="#00d4ff" fontSize="9" fontFamily="monospace" fontWeight="600">{val}</text>
        </g>
      ))}
      {/* Top bar */}
      <rect x="64" y="175" width="244" height="16" rx="4" fill="#0f0f1a" />
      <circle cx="76" cy="183" r="4" fill="#00d4ff" opacity="0.5" />
      <text x="84" y="187" fill="#556" fontSize="6" fontFamily="monospace">Model: GPT-Fusion v3 · Status: Active</text>
    </svg>
  );
}

export function FinTechMockup() {
  return (
    <svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="300" height="190" fill="#080d12" />
      {/* Header */}
      <rect x="0" y="0" width="300" height="36" fill="#0c1218" />
      <text x="16" y="22" fill="#f0f0f0" fontSize="10" fontFamily="sans-serif" fontWeight="700">Portfolio</text>
      <rect x="210" y="10" width="60" height="16" rx="8" fill="#00d4ff" opacity="0.15" />
      <text x="222" y="21" fill="#00d4ff" fontSize="7" fontFamily="monospace">+12.4%</text>
      {/* Balance */}
      <text x="16" y="58" fill="#556" fontSize="7" fontFamily="monospace">TOTAL BALANCE</text>
      <text x="16" y="76" fill="#f0f0f0" fontSize="18" fontFamily="sans-serif" fontWeight="800">$284,921.40</text>
      {/* Candlestick chart */}
      <rect x="16" y="88" width="268" height="70" rx="6" fill="#0c1218" />
      {[
        { x: 28, o: 130, c: 118, h: 108, l: 135 },
        { x: 44, o: 118, c: 124, h: 112, l: 128 },
        { x: 60, o: 124, c: 110, h: 106, l: 127 },
        { x: 76, o: 110, c: 120, h: 104, l: 124 },
        { x: 92, o: 120, c: 105, h: 100, l: 123 },
        { x: 108, o: 105, c: 115, h: 100, l: 118 },
        { x: 124, o: 115, c: 108, h: 103, l: 118 },
        { x: 140, o: 108, c: 116, h: 103, l: 120 },
        { x: 156, o: 116, c: 100, h: 96, l: 118 },
        { x: 172, o: 100, c: 112, h: 95, l: 115 },
        { x: 188, o: 112, c: 104, h: 100, l: 115 },
        { x: 204, o: 104, c: 114, h: 98, l: 117 },
        { x: 220, o: 114, c: 98, h: 94, l: 117 },
        { x: 236, o: 98, c: 108, h: 93, l: 112 },
        { x: 252, o: 108, c: 96, h: 92, l: 112 },
        { x: 268, o: 96, c: 106, h: 91, l: 110 },
      ].map(({ x, o, c, h, l }, i) => {
        const bull = c < o;
        return (
          <g key={i}>
            <line x1={x} y1={h} x2={x} y2={l} stroke={bull ? '#22c55e' : '#ef4444'} strokeWidth="0.8" opacity="0.7" />
            <rect x={x - 4} y={Math.min(o, c)} width="8" height={Math.abs(o - c) || 1} fill={bull ? '#22c55e' : '#ef4444'} opacity="0.85" />
          </g>
        );
      })}
      {/* Holdings */}
      {[
        { sym: 'BTC', pct: '+5.2%', val: '$82,400', color: '#f59e0b' },
        { sym: 'ETH', pct: '+3.1%', val: '$41,200', color: '#8b5cf6' },
        { sym: 'SOL', pct: '-1.4%', val: '$18,100', color: '#ec4899' },
      ].map(({ sym, pct, val, color }, i) => (
        <g key={sym}>
          <circle cx="24" cy={172 + i * 0} r="3" fill={color} />
          <text x="30" y={175 + i * 0} fill="#f0f0f0" fontSize="7" fontFamily="monospace">{sym}</text>
          <text x="60" y={175 + i * 0} fill="#556" fontSize="7" fontFamily="monospace">{val}</text>
          <text x="108" y={175 + i * 0} fill={pct.startsWith('+') ? '#22c55e' : '#ef4444'} fontSize="7" fontFamily="monospace">{pct}</text>
        </g>
      ))}
    </svg>
  );
}

export function EcommerceMockup() {
  return (
    <svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="280" height="180" fill="#fafaf8" />
      {/* Header */}
      <rect x="0" y="0" width="280" height="28" fill="#fafaf8" />
      <text x="16" y="18" fill="#111" fontSize="9" fontFamily="sans-serif" fontWeight="800" letterSpacing="-0.5">AURA</text>
      <text x="70" y="18" fill="#888" fontSize="7" fontFamily="sans-serif">Collection</text>
      <text x="110" y="18" fill="#888" fontSize="7" fontFamily="sans-serif">About</text>
      <text x="148" y="18" fill="#888" fontSize="7" fontFamily="sans-serif">Studio</text>
      <rect x="232" y="8" width="32" height="12" rx="6" fill="#111" />
      <text x="238" y="17" fill="#fff" fontSize="7" fontFamily="sans-serif" fontWeight="600">Shop</text>
      {/* Hero image area */}
      <rect x="0" y="28" width="160" height="100" fill="#e8e4df" />
      <rect x="20" y="60" width="120" height="2" rx="1" fill="#bbb" opacity="0.5" />
      <text x="20" y="55" fill="#444" fontSize="12" fontFamily="sans-serif" fontWeight="700">New</text>
      <text x="20" y="68" fill="#444" fontSize="12" fontFamily="sans-serif" fontWeight="700">Collection</text>
      <text x="20" y="82" fill="#888" fontSize="7" fontFamily="sans-serif">Spring / Summer 2026</text>
      {/* Product cards */}
      {[0, 1].map((i) => (
        <g key={i}>
          <rect x={168 + i * 58} y={28} width="52" height="65" fill={i === 0 ? '#d4c9be' : '#c8d4d8'} rx="2" />
          <rect x={168 + i * 58} y={96} width="52" height="32" fill="#fafaf8" />
          <text x={172 + i * 58} y={108} fill="#111" fontSize="6" fontFamily="sans-serif" fontWeight="600">Item 0{i + 1}</text>
          <text x={172 + i * 58} y={118} fill="#888" fontSize="6" fontFamily="sans-serif">$120</text>
        </g>
      ))}
      {/* Bottom strip */}
      <rect x="0" y="132" width="280" height="48" fill="#111" />
      <text x="16" y="152" fill="#fff" fontSize="8" fontFamily="sans-serif" fontWeight="700">Explore the lookbook</text>
      <text x="16" y="165" fill="#888" fontSize="6" fontFamily="sans-serif">Crafted with intention. Made for life.</text>
      <rect x="200" y="143" width="64" height="18" rx="9" fill="#fff" opacity="0.1" />
      <text x="212" y="155" fill="#fff" fontSize="6" fontFamily="sans-serif">View all →</text>
    </svg>
  );
}

export function CyberMockup() {
  return (
    <svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="300" height="190" fill="#060809" />
      {/* Grid lines */}
      {[0,1,2,3,4].map(i => (
        <line key={`v${i}`} x1={60 * i} y1="0" x2={60 * i} y2="190" stroke="#0f2" strokeWidth="0.3" opacity="0.08" />
      ))}
      {[0,1,2,3].map(i => (
        <line key={`h${i}`} x1="0" y1={48 * i} x2="300" y2={48 * i} stroke="#0f2" strokeWidth="0.3" opacity="0.08" />
      ))}
      {/* Header */}
      <rect x="0" y="0" width="300" height="32" fill="#0a0f0a" />
      <circle cx="16" cy="16" r="6" fill="none" stroke="#0f2" strokeWidth="1" opacity="0.8" />
      <text x="28" y="20" fill="#0f2" fontSize="9" fontFamily="monospace" fontWeight="600" opacity="0.9">GUARDIAN SECURITY</text>
      <circle cx="286" cy="16" r="4" fill="#ef4444" opacity="0.8" />
      <text x="256" y="20" fill="#ef4444" fontSize="6" fontFamily="monospace">ALERT</text>
      {/* Network visualization */}
      {[
        [80, 90], [150, 70], [220, 95], [100, 140], [200, 145], [150, 115],
      ].map(([x, y], i) => (
        <g key={i}>
          {i > 0 && <line x1="150" y1="115" x2={x} y2={y} stroke="#0f2" strokeWidth="0.6" opacity="0.3" />}
          <circle cx={x} cy={y} r={i === 5 ? 6 : 4} fill={i === 5 ? '#0f2' : '#0a160a'} stroke="#0f2" strokeWidth="1" opacity={i === 0 ? 0.9 : 0.5} />
        </g>
      ))}
      {/* Threat log */}
      <rect x="12" y="38" width="276" height="100" rx="6" fill="#0a0f0a" opacity="0.7" />
      {[
        { t: '14:32:01', msg: 'Intrusion attempt blocked — 192.168.1.45', sev: 'HIGH', color: '#ef4444' },
        { t: '14:31:58', msg: 'Port scan detected — external IP', sev: 'MED', color: '#f59e0b' },
        { t: '14:31:44', msg: 'Certificate validated — srv-02', sev: 'OK', color: '#22c55e' },
        { t: '14:31:39', msg: 'Anomaly: unusual traffic pattern', sev: 'MED', color: '#f59e0b' },
      ].map(({ t, msg, sev, color }, i) => (
        <g key={i}>
          <text x="22" y={55 + i * 19} fill="#334" fontSize="6" fontFamily="monospace">{t}</text>
          <text x="68" y={55 + i * 19} fill="#7a8a7a" fontSize="6" fontFamily="monospace">{msg}</text>
          <rect x={252} y={46 + i * 19} width="28" height="10" rx="5" fill={color} opacity="0.15" />
          <text x={255} y={54 + i * 19} fill={color} fontSize="5" fontFamily="monospace">{sev}</text>
        </g>
      ))}
      {/* Stats */}
      {[
        { label: 'BLOCKED', val: '1,847', color: '#ef4444' },
        { label: 'ACTIVE', val: '3', color: '#f59e0b' },
        { label: 'SECURED', val: '99.8%', color: '#0f2' },
      ].map(({ label, val, color }, i) => (
        <g key={label}>
          <rect x={12 + i * 96} y="148" width="82" height="34" rx="6" fill="#0a0f0a" />
          <text x={22 + i * 96} y="163" fill="#556" fontSize="6" fontFamily="monospace">{label}</text>
          <text x={22 + i * 96} y="175" fill={color} fontSize="10" fontFamily="monospace" fontWeight="600">{val}</text>
        </g>
      ))}
    </svg>
  );
}

export function MobileMockup() {
  return (
    <svg viewBox="0 0 120 220" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      {/* Phone frame */}
      <rect x="8" y="4" width="104" height="212" rx="20" fill="#1a1a1a" />
      <rect x="12" y="8" width="96" height="204" rx="17" fill="#0d0d0d" />
      {/* Notch */}
      <rect x="44" y="8" width="32" height="8" rx="4" fill="#1a1a1a" />
      {/* Status bar */}
      <text x="20" y="26" fill="#888" fontSize="6" fontFamily="monospace">9:41</text>
      <text x="88" y="26" fill="#888" fontSize="6" fontFamily="monospace">●●●</text>
      {/* App header */}
      <rect x="12" y="30" width="96" height="28" fill="#141414" />
      <text x="24" y="48" fill="#f0f0f0" fontSize="9" fontFamily="sans-serif" fontWeight="700">Pulse</text>
      <circle cx="96" cy="44" r="7" fill="#00d4ff" opacity="0.15" />
      <text x="91" y="47" fill="#00d4ff" fontSize="8" fontFamily="sans-serif">+</text>
      {/* Summary card */}
      <rect x="20" y="64" width="80" height="44" rx="10" fill="#00d4ff" opacity="0.1" />
      <rect x="20" y="64" width="80" height="44" rx="10" stroke="#00d4ff" strokeWidth="0.5" fill="none" opacity="0.3" />
      <text x="30" y="79" fill="#556" fontSize="5" fontFamily="monospace">TODAY'S TOTAL</text>
      <text x="30" y="94" fill="#00d4ff" fontSize="14" fontFamily="sans-serif" fontWeight="800">$2,840</text>
      <text x="78" y="94" fill="#22c55e" fontSize="6" fontFamily="monospace">+8%</text>
      {/* List items */}
      {[
        { label: 'Coffee', sub: 'Ritual', amt: '-$4.50', color: '#f59e0b' },
        { label: 'Transfer', sub: 'To savings', amt: '-$200', color: '#8b5cf6' },
        { label: 'Salary', sub: 'Acme Inc', amt: '+$3,200', color: '#22c55e' },
      ].map(({ label, sub, amt, color }, i) => (
        <g key={label}>
          <circle cx="28" cy={126 + i * 26} r="8" fill={color} opacity="0.15" />
          <text x="40" y={123 + i * 26} fill="#f0f0f0" fontSize="7" fontFamily="sans-serif" fontWeight="500">{label}</text>
          <text x="40" y={133 + i * 26} fill="#556" fontSize="6" fontFamily="sans-serif">{sub}</text>
          <text x="80" y={128 + i * 26} fill={amt.startsWith('+') ? '#22c55e' : '#888'} fontSize="7" fontFamily="monospace" fontWeight="500">{amt}</text>
          <line x1="20" y1={138 + i * 26} x2="100" y2={138 + i * 26} stroke="#222" strokeWidth="0.5" />
        </g>
      ))}
      {/* Nav bar */}
      <rect x="12" y="188" width="96" height="24" fill="#141414" />
      {['⬤', '○', '○', '○'].map((dot, i) => (
        <text key={i} x={28 + i * 22} y="203" fill={i === 0 ? '#00d4ff' : '#334'} fontSize="6" fontFamily="sans-serif" textAnchor="middle">{dot}</text>
      ))}
    </svg>
  );
}

export function BrandMockup() {
  return (
    <svg viewBox="0 0 280 175" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="280" height="175" fill="#f5f2ee" />
      {/* Top bar */}
      <rect x="0" y="0" width="280" height="22" fill="#f5f2ee" />
      <text x="16" y="15" fill="#111" fontSize="8" fontFamily="serif" fontWeight="700" letterSpacing="2">LUMIS</text>
      <text x="100" y="15" fill="#888" fontSize="6" fontFamily="sans-serif">Work</text>
      <text x="128" y="15" fill="#888" fontSize="6" fontFamily="sans-serif">Studio</text>
      <text x="156" y="15" fill="#888" fontSize="6" fontFamily="sans-serif">Journal</text>
      {/* Hero split */}
      <rect x="0" y="22" width="140" height="110" fill="#e8e3dc" />
      <text x="12" y="70" fill="#111" fontSize="18" fontFamily="serif" fontWeight="800" letterSpacing="-1">We</text>
      <text x="12" y="90" fill="#111" fontSize="18" fontFamily="serif" fontWeight="800" letterSpacing="-1">make</text>
      <text x="12" y="110" fill="#111" fontSize="18" fontFamily="serif" fontWeight="800" letterSpacing="-1">meaning.</text>
      <rect x="140" y="22" width="140" height="110" fill="#c8bfb2" />
      <rect x="155" y="40" width="110" height="70" rx="4" fill="#111" opacity="0.1" />
      {/* Marquee strip */}
      <rect x="0" y="132" width="280" height="16" fill="#111" />
      <text x="8" y="143" fill="#f5f2ee" fontSize="6" fontFamily="sans-serif" letterSpacing="3">BRAND IDENTITY · VISUAL DESIGN · CREATIVE DIRECTION · STRATEGY ·</text>
      {/* Bottom */}
      <rect x="0" y="148" width="280" height="27" fill="#f5f2ee" />
      <text x="16" y="162" fill="#888" fontSize="6" fontFamily="sans-serif">Selected works — 2024/2026</text>
      <rect x="220" y="152" width="48" height="16" rx="8" fill="#111" />
      <text x="228" y="163" fill="#fff" fontSize="6" fontFamily="sans-serif">Explore →</text>
    </svg>
  );
}
