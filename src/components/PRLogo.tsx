// RenderPoint Solutions — Contained RP Monogram
// Clean geometric mark inside a rounded square

export default function PRLogo({ size = 40, color = '#1B5E20' }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
      aria-label="RenderPoint Solutions logo"
    >
      {/* Contained rounded square */}
      <rect width="200" height="200" rx="44" fill={color} />

      {/* Subtle inner highlight for depth */}
      <rect
        x="2" y="2" width="196" height="196" rx="43"
        fill="none"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1.5"
      />

      {/* R letter — left */}
      <path
        d="M42 42h38c22 0 36 12 36 32 0 15-9 25-24 30l26 54H88L66 106H64v52H42V42z
           M64 88h16c10 0 16-6 16-14s-6-14-16-14H64v28z"
        fill="white"
        fillRule="evenodd"
      />

      {/* P letter — right, slightly offset for depth */}
      <path
        d="M110 42h36c22 0 36 12 36 32s-14 32-36 32h-14v52h-22V42z
           M132 88h14c10 0 16-6 16-14s-6-14-16-14h-14v28z"
        fill="white"
        fillRule="evenodd"
        opacity="0.92"
      />

      {/* Accent corner dot */}
      <circle cx="174" cy="170" r="6" fill="rgba(255,255,255,0.25)" />
    </svg>
  );
}
