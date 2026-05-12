/* 
  Conceptual Vercel Edge Function for Dynamic OG Images
  This would be deployed as a Vercel Function at /api/og
*/

import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // Extract audit data from search params (passed from the share URL)
    const savings = searchParams.get('savings') || '0';
    const count = searchParams.get('count') || '0';
    const grade = searchParams.get('grade') || 'N/A';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFCF5', // Vyay Cream
            fontFamily: 'serif',
          }}
        >
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            padding: '60px',
            border: '2px solid #1A1A1A',
            borderRadius: '40px',
            backgroundColor: '#fff',
            boxShadow: '20px 20px 0px #1A1A1A'
          }}>
            <div style={{ fontSize: 24, color: '#F59E0B', marginBottom: 20, letterSpacing: 4, fontWeight: 'bold' }}>
              VYAY AUDIT REPORT
            </div>
            <div style={{ fontSize: 80, fontStyle: 'italic', marginBottom: 10 }}>
              ${Number(savings).toLocaleString()}
            </div>
            <div style={{ fontSize: 24, opacity: 0.6, marginBottom: 40 }}>
              Projected Annual Recovery
            </div>
            
            <div style={{ display: 'flex', gap: '40px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ fontSize: 14, opacity: 0.4, letterSpacing: 2 }}>RECOMMENDATIONS</div>
                <div style={{ fontSize: 32, fontWeight: 'bold' }}>{count}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ fontSize: 14, opacity: 0.4, letterSpacing: 2 }}>EFFICIENCY GRADE</div>
                <div style={{ fontSize: 32, fontWeight: 'bold' }}>{grade}</div>
              </div>
            </div>
          </div>
          
          <div style={{ position: 'absolute', bottom: 40, fontSize: 18, opacity: 0.5 }}>
            vyay.ai · Strategic Infrastructure Auditing
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
