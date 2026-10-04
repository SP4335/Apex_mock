import { NextResponse } from 'next/server';

export async function POST(req) {
  const body = await req.json().catch(() => ({}));
  return NextResponse.json({
    raw_descriptor: body.raw_descriptor || 'POS_39182_SK',
    enriched_merchant: 'StyleKart',
    category: 'Shopping & Apparel',
  });
}
