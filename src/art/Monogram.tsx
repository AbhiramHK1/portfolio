/** The "AH" mark: the two letters joined by one route line. */
export function Monogram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 44" aria-hidden="true">
      <g className="mono-letters">
        <path d="M4 41 17 4l13 37" />
        <path d="M41 4v37M60 4v37" />
      </g>
      <path className="mono-route" d="M9.5 27H60" />
    </svg>
  );
}
