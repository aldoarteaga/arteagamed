import type { Dictionary } from '@/i18n';
import { site } from '@/content/site';
import { Icon } from '@/components/ui/Icon';
import styles from './ServiceArea.module.css';

/**
 * Coastline traced from real coordinates (Oliva → Villajoyosa), projected to SVG units.
 * Only towns we actually serve are marked.
 */
const COAST =
  'M212,48 C255,69 408,142 470,173 C532,205 568,222 583,237 C598,252 555,243 562,261 C570,279 624,332 628,347 C632,362 607,340 587,352 C567,364 519,404 508,419 C498,435 530,438 524,445 C519,453 494,457 475,464 C456,471 420,483 412,488 C404,493 422,491 427,494 C432,497 441,504 440,507 C439,510 430,513 422,514 C414,515 401,511 393,512 C385,513 389,515 375,520 C362,525 328,537 312,544 C296,551 287,552 277,563 C268,574 255,595 255,608 C255,621 283,635 275,643 C267,652 224,656 206,659 C188,663 182,661 169,664 C157,667 151,667 131,675 C111,683 64,706 50,712';

const TOWNS: {
  name: string;
  x: number;
  y: number;
  lx: number;
  ly: number;
  anchor: 'start' | 'end' | 'middle';
}[] = [
  { name: 'Teulada', x: 465, y: 352, lx: 447, ly: 344, anchor: 'end' },
  { name: 'Benissa', x: 398, y: 384, lx: 380, ly: 394, anchor: 'end' },
  { name: 'Moraira', x: 506, y: 420, lx: 526, ly: 430, anchor: 'start' },
  { name: 'Calpe', x: 404, y: 485, lx: 386, ly: 474, anchor: 'end' },
  { name: 'Benidorm', x: 170, y: 659, lx: 186, ly: 626, anchor: 'middle' },
];

export function ServiceArea({ t }: { t: Dictionary['area'] }) {
  return (
    <section className="section section--sand" aria-labelledby="area-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.text}>
          <h2 id="area-title">{t.title}</h2>
          <p className={styles.body}>{t.body}</p>
          <ul role="list" className={styles.towns}>
            {site.towns.map((town) => (
              <li key={town}>
                <Icon name="pin" size={24} />
                {town}
              </li>
            ))}
          </ul>
          <p className={styles.note}>
            {t.note}{' '}
            <a href={site.phone.href} className={styles.phone}>
              {site.phone.display}
            </a>
          </p>
        </div>

        <figure className={styles.mapCard}>
          <svg
            viewBox="100 290 580 430"
            role="img"
            aria-labelledby="map-title map-desc"
            className={styles.map}
          >
            <title id="map-title">{t.mapTitle}</title>
            <desc id="map-desc">{t.mapDescription}</desc>
            <rect x="0" y="0" width="760" height="800" fill="#DCEBE9" />
            <path d={`${COAST} L-60,800 L-60,-60 L212,-60 Z`} fill="#F8F7F3" />
            <path d={COAST} fill="none" stroke="#356764" strokeWidth="3" strokeLinejoin="round" />
            {/* Peñón de Ifach: the small headland just east of Calpe */}
            <path d="M443 511 L470 534" stroke="#356764" strokeWidth="2" />
            <text x="474" y="548" className={styles.minorLabel}>
              {t.ifach}
            </text>
            <text x="372" y="652" className={styles.seaLabel}>
              {t.sea}
            </text>
            {/* North arrow */}
            <g transform="translate(640 600)" className={styles.north} aria-hidden="true">
              <path d="M0 -22 L9 6 L0 0 L-9 6 Z" />
              <text y="28" textAnchor="middle">
                N
              </text>
            </g>
            {TOWNS.map((town) => (
              <g key={town.name}>
                <circle cx={town.x} cy={town.y} r="18" fill="#174A5B" opacity="0.14" />
                <circle
                  cx={town.x}
                  cy={town.y}
                  r="9"
                  fill="#174A5B"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                />
                <text x={town.lx} y={town.ly} textAnchor={town.anchor} className={styles.townLabel}>
                  {town.name}
                </text>
              </g>
            ))}
          </svg>
          <figcaption className={styles.legend}>
            <span className={styles.dot} aria-hidden="true" />
            {t.legend}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
