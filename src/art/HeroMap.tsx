import { roles } from '../content/profile';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { makeCity, roundedPath, type Point } from './city';

const WIDTH = 900;
const HEIGHT = 760;

const city = makeCity({ width: WIDTH, height: HEIGHT, angle: -14, spacing: 62, range: 13, seed: 2021 });

// The career route follows real grid intersections, oldest stop first.
const stopCells: [number, number][] = [
  [-6, 2],
  [-2, 1],
  [2, 0],
  [6, -2],
];

const routeCells: [number, number][] = [
  [-6, 2],
  [-4, 2],
  [-4, 1],
  [-2, 1],
  [0, 1],
  [0, 0],
  [2, 0],
  [2, -1],
  [4, -1],
  [4, -2],
  [6, -2],
];

const nextCells: [number, number][] = [
  [6, -2],
  [8, -2],
  [8, -5],
];

const toPoints = (cells: [number, number][]): Point[] => cells.map(([i, j]) => city.at(i, j));

const route = roundedPath(toPoints(routeCells), 16);
const next = roundedPath(toPoints(nextCells), 16);
const trafficA = roundedPath(toPoints([[-8, -4], [4, -4], [4, 4]]), 16);
const trafficB = roundedPath(toPoints([[0, 8], [0, 4], [-8, 4]]), 16);

const stops = [...roles].reverse().map((role, index) => ({
  id: role.id,
  year: role.stopYear,
  label: role.stopLabel,
  current: Boolean(role.current),
  point: city.at(...stopCells[index]),
}));

export function HeroMap() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="hero-map">
      <svg className="hero-map__svg" viewBox={`0 0 ${WIDTH} ${HEIGHT}`} aria-hidden="true">
        <path className="map-block" d={city.blocks} />
        <path className="map-park" d={city.parks} />
        <path className="map-street" d={city.streets} />
        <path className="map-arterial" d={city.arterials} />

        <path className="map-next" d={next} />
        <path className="map-route-casing" d={route} />
        <path className="map-route" d={route} pathLength={1} />

        {!reducedMotion && (
          <>
            <circle r="4" className="map-traffic">
              <animateMotion dur="26s" repeatCount="indefinite" path={trafficA} />
            </circle>
            <circle r="4" className="map-traffic">
              <animateMotion dur="19s" repeatCount="indefinite" path={trafficB} />
            </circle>
            <g>
              <animateMotion dur="11s" begin="1.6s" repeatCount="indefinite" rotate="auto" path={route} />
              <rect x="-11" y="-6" width="22" height="12" rx="3.5" className="map-vehicle" />
              <rect x="3" y="-4" width="5" height="8" rx="1.5" className="map-vehicle-glass" />
            </g>
          </>
        )}

        {stops.map((stop) => (
          <g key={stop.id} transform={`translate(${stop.point[0].toFixed(1)} ${stop.point[1].toFixed(1)})`}>
            {stop.current && !reducedMotion && <circle r="10" className="map-pulse" />}
            <circle r="10" className="map-stop-ring" />
            <circle r="5" className="map-stop" />
          </g>
        ))}
      </svg>

      <ol className="hero-map__labels" aria-label="Career route">
        {stops.map((stop) => (
          <li
            key={stop.id}
            className={`map-label${stop.current ? ' map-label--current' : ''}`}
            style={{ left: `${(stop.point[0] / WIDTH) * 100}%`, top: `${(stop.point[1] / HEIGHT) * 100}%` }}
          >
            <span className="map-label__year">{stop.year}</span>
            <span className="map-label__name">{stop.label}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
