/**
 * Photography used on the public site. Alt text lives in the dictionaries
 * (it is translated); this file holds the files, focal points and licensing.
 *
 * Current images are CC0 (public domain) stock from StockSnap: free for
 * commercial use, no attribution required. Replace them with photos of the
 * real ArteagaMed team and members (with written consent) when available.
 */
export type PhotoAsset = {
  src: string;
  /** CSS object-position: keeps the subject in frame as the crop changes per breakpoint. */
  position: string;
  source: string;
  license: 'CC0';
};

export const photos = {
  hero: {
    src: '/images/hero-couple-beach.jpg',
    position: '78% 50%',
    source: 'https://stocksnap.io/photo/senior-couple-EAOC66MRHB',
    license: 'CC0',
  },
  audience: {
    src: '/images/audience-couple-seaside.jpg',
    position: '72% 40%',
    source: 'https://stocksnap.io/photo/senior-couple-P3RGV0VYYU',
    license: 'CC0',
  },
  why: {
    src: '/images/why-carer-conversation.jpg',
    position: '50% 35%',
    source: 'https://stocksnap.io/photo/caregiver-nurse-QQEQNVMB0I',
    license: 'CC0',
  },
  teleassistance: {
    src: '/images/teleassistance-senior-phone.jpg',
    position: '50% 12%',
    source: 'https://stocksnap.io/photo/senior-smartphone-XFLPCWOOVY',
    license: 'CC0',
  },
} satisfies Record<string, PhotoAsset>;
