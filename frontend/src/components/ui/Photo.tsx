import Image from 'next/image';
import { config } from '@/config';
import type { PhotoAsset } from '@/content/photos';
import styles from './Photo.module.css';

type PhotoProps = {
  /** Image file and focal point (see content/photos.ts). Leave undefined until a real photo exists. */
  asset?: PhotoAsset | undefined;
  alt: string;
  /** Art direction for the photographer; shown in development only while `asset` is missing. */
  brief: string;
  /** CSS aspect ratio, e.g. "4 / 5". Omit to control it from CSS via `--ratio`. */
  ratio?: string | undefined;
  sizes: string;
  priority?: boolean | undefined;
  className?: string | undefined;
};

const showBriefs = config.NODE_ENV !== 'production';

/**
 * Art-directed photo slot. Until a photograph is supplied, a quiet
 * Mediterranean illustration stands in.
 */
export function Photo({ asset, alt, brief, ratio, sizes, priority, className }: PhotoProps) {
  return (
    <div
      className={[styles.frame, className].filter(Boolean).join(' ')}
      style={ratio ? ({ '--ratio': ratio } as React.CSSProperties) : undefined}
    >
      {asset ? (
        <Image
          src={asset.src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority ?? false}
          className={styles.image ?? ''}
          style={{ objectPosition: asset.position }}
        />
      ) : (
        <>
          <CoastScene />
          {showBriefs && <p className={styles.brief}>{brief}</p>}
        </>
      )}
    </div>
  );
}

/** Flat illustration: sun, sea and the silhouette of the Peñón de Ifach. */
function CoastScene() {
  return (
    <svg
      className={styles.placeholder}
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="400" height="500" fill="#EFE4D1" />
      <circle cx="292" cy="150" r="54" fill="#E8D8BD" />
      <path
        d="M0 300 L120 300 C150 300 168 236 196 182 C206 162 220 160 228 178 C246 220 262 286 300 300 L400 300 V500 H0 Z"
        fill="#174A5B"
      />
      <rect y="300" width="400" height="200" fill="#4F8F8B" />
      <path
        d="M0 336 C60 328 110 344 170 336 S290 328 400 338 M0 380 C70 372 130 388 200 380 S320 372 400 382 M0 428 C60 420 140 436 210 428 S330 420 400 430"
        stroke="#DCEBE9"
        strokeWidth="3"
        fill="none"
        opacity="0.55"
      />
      <path d="M0 460 C100 440 220 446 400 470 V500 H0 Z" fill="#E8D8BD" />
    </svg>
  );
}
