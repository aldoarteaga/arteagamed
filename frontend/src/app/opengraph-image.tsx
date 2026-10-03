import { ImageResponse } from 'next/og';

export const alt = 'ArteagaMed: healthcare assistance for visitors on the Costa Blanca';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 72,
        background: '#F8F7F3',
        color: '#174A5B',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{ display: 'flex', alignItems: 'center', gap: 20, fontSize: 40, fontWeight: 700 }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 18,
            background: '#174A5B',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: 34,
              height: 17,
              marginBottom: 20,
              borderRadius: '34px 34px 0 0',
              background: '#E8D8BD',
            }}
          />
        </div>
        ArteagaMed
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, maxWidth: 900 }}>
          Enjoy Alicante. We’ll take care of the rest.
        </div>
        <div style={{ fontSize: 32, color: '#4A5A61' }}>
          Healthcare assistance in Calpe, Moraira, Benissa, Teulada and Benidorm
        </div>
      </div>
      <div style={{ display: 'flex', height: 14, background: '#4F8F8B', borderRadius: 7 }} />
    </div>,
    size,
  );
}
