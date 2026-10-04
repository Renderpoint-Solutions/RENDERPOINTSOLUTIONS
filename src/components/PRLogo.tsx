// PR Monogram Logo SVG Component
// Derived from the brand logo: interlocked P and R in forest green

export default function PRLogo({ size = 40, color = '#1B5E20' }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      {/* P letter */}
      <path
        d="M30 20h45c30 0 50 15 50 42s-20 42-50 42H65v76H30V20z
           M65 82h10c12 0 20-6 20-20s-8-20-20-20H65v40z"
        fill={color}
        fillRule="evenodd"
      />
      {/* R letter — overlapping */}
      <path
        d="M90 40h45c28 0 46 14 46 38 0 18-10 30-28 36l32 66h-38l-28-60h-4v60H90V40z
           M125 100h10c12 0 18-6 18-18s-6-18-18-18h-10v36z"
        fill={color}
        fillRule="evenodd"
        opacity="0.85"
      />
    </svg>
  );
}
