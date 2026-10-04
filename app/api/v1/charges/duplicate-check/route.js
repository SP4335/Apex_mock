import { NextResponse } from 'next/server';

export async function POST(req) {
  const body = await req.json().catch(() => ({}));
  return NextResponse.json({
    user_id: body.user_id || 'priya_01',
    duplicates_found: 1,
    duplicates: [
      {
        transaction_id_1: 'TXN_99182',
        transaction_id_2: 'TXN_99183',
        merchant: 'StyleKart',
        amount_inr: 2499,
        date: '2026-09-21',
        status: 'POTENTIAL_DUPLICATE',
      },
    ],
  });
}
