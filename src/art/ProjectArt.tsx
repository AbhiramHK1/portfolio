import type { ReactNode } from 'react';
import type { ArtKey } from '../content/profile';
import { makeCity, roundedPath, type Point } from './city';

/** Text placeholder bar, so the illustrations stay free of invented data. */
function Bar({ x, y, w, h = 7, cls = 'a-mute' }: { x: number; y: number; w: number; h?: number; cls?: string }) {
  return <rect x={x} y={y} width={w} height={h} rx={h / 2} className={cls} />;
}

function Panel({ x, y, w, h, children }: { x: number; y: number; w: number; h: number; children?: ReactNode }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={w} height={h} rx="12" className="a-panel" />
      {children}
    </g>
  );
}

const fleetCity = makeCity({ width: 640, height: 400, angle: 18, spacing: 56, range: 10, seed: 88 });
const fleetRoute = roundedPath(
  ([[-5, 3], [-3, 3], [-3, 1], [-1, 1], [-1, -1], [2, -1], [2, -3]] as [number, number][]).map(
    ([i, j]): Point => fleetCity.at(i, j),
  ),
  12,
);

function FleetArt() {
  const [sx, sy] = fleetCity.at(-5, 3);
  const [ex, ey] = fleetCity.at(2, -3);
  const [vx, vy] = fleetCity.at(-1, 0);
  const [tx, ty] = fleetCity.at(-3, -2);
  const [t2x, t2y] = fleetCity.at(3, 2);

  return (
    <>
      <rect width="640" height="400" className="a-bg" />
      <path d={fleetCity.blocks} className="a-block" />
      <path d={fleetCity.parks} className="a-soft" />
      <path d={fleetCity.streets} className="a-street" />
      <path d={fleetCity.arterials} className="a-arterial" />
      <path d={fleetRoute} className="a-route-casing" />
      <path d={fleetRoute} className="a-route" />

      <circle cx={sx} cy={sy} r="8" className="a-ring" />
      <circle cx={sx} cy={sy} r="4" className="a-ink" />
      <g transform={`translate(${ex} ${ey})`}>
        <path d="M0 0c-13-15-19-23-19-32a19 19 0 0 1 38 0c0 9-6 17-19 32Z" className="a-acc" />
        <circle cy="-32" r="7" className="a-panel" />
      </g>

      {[[vx, vy, 'a-acc'], [tx, ty, 'a-ink'], [t2x, t2y, 'a-ink']].map(([x, y, cls], k) => (
        <g key={k} transform={`translate(${x} ${y})`}>
          <circle r="12" className="a-ring" />
          <circle r="6" className={String(cls)} />
        </g>
      ))}

      <Panel x={420} y={214} w={196} h={162}>
        <Bar x={18} y={20} w={72} cls="a-ink" />
        <Bar x={18} y={36} w={44} />
        <circle cx="154" cy="34" r="16" className="a-gauge" />
        <path d="M154 18a16 16 0 0 1 15.2 21" className="a-gauge-on" />
        <path
          d="M18 118 42 100 66 108 92 78 116 90 142 62 178 72"
          className="a-spark"
        />
        <path d="M18 118 42 100 66 108 92 78 116 90 142 62 178 72V144H18Z" className="a-soft a-fade" />
        <circle cx="142" cy="62" r="5" className="a-acc a-dot" />
      </Panel>
    </>
  );
}

function AmlArt() {
  const nodes: [number, number, number][] = [
    [70, 86, 11],
    [168, 54, 8],
    [116, 178, 9],
    [62, 286, 12],
    [186, 300, 9],
    [326, 66, 10],
    [346, 322, 11],
    [230, 190, 18],
    [344, 196, 9],
  ];
  const links = [
    [0, 1], [0, 2], [2, 3], [2, 4], [1, 5], [4, 6], [5, 8], [6, 8], [3, 4],
  ];
  const flagged = [
    [2, 7], [1, 7], [4, 7], [7, 8],
  ];

  return (
    <>
      <rect width="640" height="400" className="a-bg" />
      {links.map(([a, b], k) => (
        <line key={k} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} className="a-link" />
      ))}
      {flagged.map(([a, b], k) => (
        <line key={k} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} className="a-link-warn" />
      ))}
      {nodes.map(([x, y, r], k) =>
        k === 7 ? null : (
          <g key={k}>
            <circle cx={x} cy={y} r={r + 3} className="a-bg" />
            <circle cx={x} cy={y} r={r} className="a-node" />
          </g>
        ),
      )}
      <circle cx="230" cy="190" r="44" className="a-warn-halo" />
      <circle cx="230" cy="190" r="30" className="a-warn-halo" />
      <circle cx="230" cy="190" r="18" className="a-warn" />
      <path d="M224 180v21M224 181h13l-3 5 3 5h-13" className="a-flag" />

      <Panel x={414} y={40} w={198} h={320}>
        <Bar x={20} y={24} w={84} cls="a-ink" />
        <Bar x={20} y={40} w={52} />
        {[76, 124, 172, 220, 268].map((y, k) => (
          <g key={y}>
            {k === 2 && <rect x={10} y={y - 11} width={178} height={42} rx="8" className="a-warn-soft" />}
            <circle cx="36" cy={y + 10} r="10" className={k === 2 ? 'a-warn' : 'a-node'} />
            <Bar x={58} y={y + 1} w={k % 2 ? 82 : 100} cls={k === 2 ? 'a-ink' : 'a-mute'} />
            <Bar x={58} y={y + 14} w={k % 2 ? 48 : 62} h={6} />
          </g>
        ))}
      </Panel>
    </>
  );
}

const qrCells: [number, number][] = (() => {
  const cells: [number, number][] = [];
  let bits = 0x9c3a51e7;
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      const inFinder = (x < 3 && y < 3) || (x > 5 && y < 3) || (x < 3 && y > 5);
      bits = (bits * 1103515245 + 12345) & 0x7fffffff;
      if (!inFinder && (bits >> 12) % 2 === 0) cells.push([x, y]);
    }
  }
  return cells;
})();

function ErpArt() {
  const q = 8;
  const finder = (x: number, y: number) => (
    <g transform={`translate(${x} ${y})`}>
      <rect width={q * 3} height={q * 3} rx="3" className="a-ink" />
      <rect x={q * 0.6} y={q * 0.6} width={q * 1.8} height={q * 1.8} rx="1.5" className="a-panel" />
      <rect x={q} y={q} width={q} height={q} className="a-ink" />
    </g>
  );

  return (
    <>
      <rect width="640" height="400" className="a-bg" />
      <rect x="350" y="302" width="290" height="46" className="a-block" />
      <path d="M350 325h290" className="a-lane" />

      <Panel x={66} y={32} w={232} h={336}>
        <rect width="232" height="10" rx="5" className="a-acc" />
        <Bar x={22} y={34} w={96} h={10} cls="a-ink" />
        <Bar x={22} y={54} w={62} />
        <g transform="translate(138 30)">
          {qrCells.map(([x, y]) => (
            <rect key={`${x}-${y}`} x={x * q} y={y * q} width={q} height={q} className="a-ink" />
          ))}
          {finder(0, 0)}
          {finder(q * 6, 0)}
          {finder(0, q * 6)}
        </g>
        <path d="M22 122h188" className="a-rule" />
        {[140, 170, 200, 230].map((y, k) => (
          <g key={y}>
            <Bar x={22} y={y} w={[104, 82, 112, 72][k]} />
            <Bar x={172} y={y} w={38} cls="a-mid" />
          </g>
        ))}
        <path d="M22 258h188" className="a-rule" />
        <Bar x={22} y={276} w={56} cls="a-ink" />
        <Bar x={146} y={272} w={64} h={14} cls="a-acc" />
        <Bar x={22} y={306} w={132} h={6} />
      </Panel>

      <circle cx="344" cy="200" r="24" className="a-acc" />
      <path d="M333 200l8 8 15-16" className="a-check" />
      <path d="M298 200h22M368 200h34" className="a-link-acc" />

      {[0, 1].map((col) =>
        [0, 1].map((row) => (
          <g key={`${col}-${row}`} transform={`translate(${404 + col * 96} ${58 + row * 84})`}>
            <rect width="84" height="72" rx="10" className="a-panel" />
            <rect x="14" y="14" width="20" height="20" rx="6" className={col === row ? 'a-acc' : 'a-node'} />
            <Bar x={14} y={46} w={52} />
          </g>
        )),
      )}

      <g transform="translate(428 256)">
        <rect width="110" height="64" rx="6" className="a-ink" />
        <path d="M110 18h26c5 0 8 2 11 6l13 18c2 3 3 6 3 9v13h-53Z" className="a-acc" />
        <path d="M120 28h14c2 0 4 1 5 3l8 11h-27Z" className="a-panel" />
        <Bar x={16} y={18} w={58} cls="a-truck-mark" />
        <Bar x={16} y={34} w={36} cls="a-truck-mark" />
        {[28, 134].map((cx) => (
          <g key={cx}>
            <circle cx={cx} cy="68" r="15" className="a-bg" />
            <circle cx={cx} cy="68" r="11" className="a-ink" />
            <circle cx={cx} cy="68" r="4" className="a-panel" />
          </g>
        ))}
      </g>
    </>
  );
}

function RestaurantArt() {
  type Status = 'free' | 'seated' | 'waiting';
  const fill: Record<Status, string> = { free: 'a-node', seated: 'a-acc', waiting: 'a-warn' };
  const round: [number, number, Status][] = [
    [120, 208, 'seated'],
    [120, 326, 'free'],
    [330, 326, 'waiting'],
    [540, 326, 'seated'],
  ];
  const square: [number, number, Status][] = [
    [226, 208, 'waiting'],
    [226, 326, 'seated'],
    [434, 208, 'seated'],
    [434, 326, 'free'],
    [540, 208, 'free'],
    [330, 208, 'free'],
  ];

  return (
    <>
      <rect width="640" height="400" className="a-bg" />
      <rect x="28" y="128" width="584" height="252" rx="14" className="a-floor" />
      <path d="M0 40h640" className="a-rail" />

      {[24, 146, 268, 390, 512].map((x, k) => (
        <g key={x} transform={`translate(${x} 40)`}>
          <rect width="104" height={[74, 62, 82, 58, 70][k]} rx="6" className="a-panel" />
          <rect width="104" height="8" rx="4" className={['a-acc', 'a-warn', 'a-acc', 'a-node', 'a-acc'][k]} />
          <Bar x={12} y={20} w={[62, 74, 54, 70, 58][k]} h={6} cls="a-ink" />
          <Bar x={12} y={34} w={[78, 48, 70, 40, 72][k]} h={6} />
          {k !== 3 && <Bar x={12} y={48} w={[44, 30, 60, 0, 36][k]} h={6} />}
        </g>
      ))}

      {round.map(([x, y, status]) => (
        <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <circle
              key={deg}
              cx={Math.cos((deg * Math.PI) / 180) * 39}
              cy={Math.sin((deg * Math.PI) / 180) * 39}
              r="7"
              className="a-seat"
            />
          ))}
          <circle r="28" className={fill[status]} />
        </g>
      ))}
      {square.map(([x, y, status]) => (
        <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
          {[[-14, -35], [14, -35], [-14, 35], [14, 35]].map(([cx, cy]) => (
            <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="7" className="a-seat" />
          ))}
          <rect x="-31" y="-25" width="62" height="50" rx="9" className={fill[status]} />
        </g>
      ))}
    </>
  );
}

function ExpenseArt() {
  const radius = 62;
  const circumference = 2 * Math.PI * radius;
  const segments = [
    { share: 0.42, cls: 'a-donut-acc' },
    { share: 0.26, cls: 'a-donut-ink' },
    { share: 0.2, cls: 'a-donut-mid' },
    { share: 0.12, cls: 'a-donut-warn' },
  ];
  let offset = 0;
  const heights = [96, 132, 84, 158, 118, 186, 148];

  return (
    <>
      <rect width="640" height="400" className="a-bg" />
      <Panel x={36} y={36} w={222} h={328}>
        <Bar x={22} y={24} w={90} cls="a-ink" />
        <Bar x={22} y={40} w={54} />
        <g transform="translate(111 148) rotate(-90)">
          {segments.map(({ share, cls }) => {
            const length = share * circumference;
            const node = (
              <circle
                key={cls}
                r={radius}
                className={cls}
                strokeDasharray={`${Math.max(length - 5, 0)} ${circumference}`}
                strokeDashoffset={-offset}
              />
            );
            offset += length;
            return node;
          })}
        </g>
        {segments.map(({ cls }, k) => (
          <g key={cls} transform={`translate(22 ${236 + k * 21})`}>
            <rect width="11" height="11" rx="3" className={cls.replace('donut-', '')} />
            <Bar x={20} y={2} w={[96, 72, 84, 58][k]} />
            <Bar x={150} y={2} w={28} cls="a-mid" />
          </g>
        ))}
      </Panel>

      <Panel x={278} y={36} w={326} h={328}>
        <Bar x={22} y={24} w={104} cls="a-ink" />
        <Bar x={22} y={40} w={64} />
        <rect x={236} y={22} width={68} height={26} rx="13" className="a-soft" />
        <Bar x={250} y={31} w={40} h={8} cls="a-acc" />
        {[92, 148, 204, 260].map((y) => (
          <path key={y} d={`M22 ${y}H304`} className="a-rule" />
        ))}
        {heights.map((h, k) => (
          <path
            key={k}
            d={`M${32 + k * 39} 288v-${h - 5}a5 5 0 0 1 5-5h16a5 5 0 0 1 5 5v${h - 5}Z`}
            className={k === 5 ? 'a-acc' : 'a-node'}
          />
        ))}
        <path d="M22 288H304" className="a-axis" />
        <Bar x={32} y={302} w={58} h={6} />
        <Bar x={246} y={302} w={58} h={6} />
      </Panel>
    </>
  );
}

function ChatArt() {
  const clients: [number, number, string][] = [
    [522, 66, 'a-acc'],
    [590, 200, 'a-ink'],
    [522, 334, 'a-node'],
  ];
  const hex = 'M0-44 38-22V22L0 44-38 22V-22Z';

  return (
    <>
      <rect width="640" height="400" className="a-bg" />
      <Panel x={36} y={30} w={298} h={340}>
        <circle cx="42" cy="40" r="16" className="a-acc" />
        <Bar x={68} y={28} w={88} cls="a-ink" />
        <Bar x={68} y={44} w={48} h={6} />
        <circle cx="272" cy="40" r="5" className="a-acc" />
        <path d="M0 74H298" className="a-rule" />

        <rect x={22} y={94} width={176} height={54} rx="14" className="a-bubble" />
        <Bar x={38} y={108} w={136} />
        <Bar x={38} y={126} w={88} />

        <rect x={126} y={160} width={150} height={40} rx="14" className="a-acc" />
        <Bar x={142} y={176} w={110} cls="a-on-accent" />

        <rect x={22} y={212} width={200} height={40} rx="14" className="a-bubble" />
        <Bar x={38} y={228} w={150} />

        <rect x={22} y={264} width={72} height={34} rx="14" className="a-bubble" />
        {[42, 58, 74].map((cx) => (
          <circle key={cx} cx={cx} cy={281} r="4.5" className="a-mid" />
        ))}
      </Panel>

      <path d="M334 200H420" className="a-link-acc" />
      {clients.map(([x, y], k) => (
        <path key={k} d={`M420 200L${x} ${y}`} className="a-link" />
      ))}
      <circle cx="372" cy="200" r="6" className="a-acc" />
      <circle cx="473" cy="131" r="6" className="a-acc" />

      <path d={hex} transform="translate(420 200)" className="a-ink" />
      <path d="M426 174 406 204h14l-6 22 20-30h-14Z" className="a-on-ink" />

      {clients.map(([x, y, cls]) => (
        <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
          <circle r="33" className="a-bg" />
          <circle r="26" className="a-panel" />
          <circle cy="-6" r="8" className={cls} />
          <path d="M-13 15c2-8 7-11 13-11s11 3 13 11Z" className={cls} />
        </g>
      ))}
    </>
  );
}

const scenes: Record<ArtKey, () => ReactNode> = {
  fleet: FleetArt,
  aml: AmlArt,
  erp: ErpArt,
  restaurant: RestaurantArt,
  expense: ExpenseArt,
  chat: ChatArt,
};

export function ProjectArt({ art, alt }: { art: ArtKey; alt: string }) {
  const Scene = scenes[art];
  return (
    <svg className="art" viewBox="0 0 640 400" role="img" aria-label={alt} preserveAspectRatio="xMidYMid slice">
      <Scene />
    </svg>
  );
}
