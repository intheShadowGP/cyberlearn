export function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true" className="logo">
      <path d="M16 2 4 6.5v8.2c0 7.3 5 13.4 12 15.3 7-1.9 12-8 12-15.3V6.5L16 2Z" className="logo-shield" />
      <path d="M11 16.5l3.4 3.4L21.5 12.6" className="logo-check" />
    </svg>
  );
}
