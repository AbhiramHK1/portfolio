/** Procedural street maps shared by the hero and the fleet illustration. */

export type Point = [number, number];

function seededRandom(seed: number) {
  let t = seed;
  return () => {
    t = (t + 0x6d2b79f5) | 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

interface CityOptions {
  width: number;
  height: number;
  angle: number;
  spacing: number;
  range: number;
  seed: number;
}

export function makeCity({ width, height, angle, spacing, range, seed }: CityOptions) {
  const random = seededRandom(seed);
  const rad = (angle * Math.PI) / 180;
  const u: Point = [Math.cos(rad), Math.sin(rad)];
  const v: Point = [-Math.sin(rad), Math.cos(rad)];
  const jitter = () => (random() - 0.5) * spacing * 0.34;

  const offsets = (count: number) =>
    Array.from({ length: count * 2 + 1 }, (_, k) => (k - count) * spacing + jitter());
  const a = offsets(range);
  const b = offsets(range);

  /** Intersection of north-south street i and east-west street j. */
  const at = (i: number, j: number): Point => {
    const ai = a[i + range];
    const bj = b[j + range];
    return [width / 2 + u[0] * ai + v[0] * bj, height / 2 + u[1] * ai + v[1] * bj];
  };

  const segment = (p: Point, q: Point) => `M${p[0].toFixed(1)} ${p[1].toFixed(1)}L${q[0].toFixed(1)} ${q[1].toFixed(1)}`;

  const streets: string[] = [];
  const arterials: string[] = [];
  for (let k = -range; k <= range; k++) {
    const target = k % 4 === 0 ? arterials : streets;
    target.push(segment(at(k, -range), at(k, range)));
    target.push(segment(at(-range, k), at(range, k)));
  }

  const blocks: string[] = [];
  const parks: string[] = [];
  for (let i = -range; i < range; i++) {
    for (let j = -range; j < range; j++) {
      const roll = random();
      if (roll > 0.3) continue;
      const inset = 6;
      const p1 = at(i, j);
      const p2 = at(i + 1, j);
      const p3 = at(i + 1, j + 1);
      const p4 = at(i, j + 1);
      const shrink = ([x, y]: Point, sx: number, sy: number): Point => [
        x + u[0] * inset * sx + v[0] * inset * sy,
        y + u[1] * inset * sx + v[1] * inset * sy,
      ];
      const corners = [shrink(p1, 1, 1), shrink(p2, -1, 1), shrink(p3, -1, -1), shrink(p4, 1, -1)];
      const d = `M${corners.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join('L')}Z`;
      (roll < 0.07 ? parks : blocks).push(d);
    }
  }

  return { at, streets: streets.join(''), arterials: arterials.join(''), blocks: blocks.join(''), parks: parks.join('') };
}

/** Polyline with softened corners, like a vehicle following streets. */
export function roundedPath(points: Point[], radius: number): string {
  let d = `M${points[0][0].toFixed(1)} ${points[0][1].toFixed(1)}`;
  for (let k = 1; k < points.length - 1; k++) {
    const [px, py] = points[k - 1];
    const [cx, cy] = points[k];
    const [nx, ny] = points[k + 1];
    const toPrev = Math.hypot(px - cx, py - cy);
    const toNext = Math.hypot(nx - cx, ny - cy);
    const r = Math.min(radius, toPrev / 2, toNext / 2);
    const inX = cx + ((px - cx) / toPrev) * r;
    const inY = cy + ((py - cy) / toPrev) * r;
    const outX = cx + ((nx - cx) / toNext) * r;
    const outY = cy + ((ny - cy) / toNext) * r;
    d += `L${inX.toFixed(1)} ${inY.toFixed(1)}Q${cx.toFixed(1)} ${cy.toFixed(1)} ${outX.toFixed(1)} ${outY.toFixed(1)}`;
  }
  const last = points[points.length - 1];
  return `${d}L${last[0].toFixed(1)} ${last[1].toFixed(1)}`;
}
