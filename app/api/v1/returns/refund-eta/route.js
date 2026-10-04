import { NextResponse } from 'next/server';

export async function POST(req) {
  const body = await req.json().catch(() => ({}));
  const waybill = body.waybill || '';

  if (waybill.endsWith('002')) {
    return NextResponse.json({
      waybill,
      seller_received: false,
      status: 'IN_TRANSIT',
      refund_due_by: null,
      message: 'Item in transit to seller.',
    });
  }

  return NextResponse.json({
    waybill: waybill || 'DLV000000001',
    seller_received: true,
    received_on: '2026-09-26',
    refund_due_by: '2026-10-01',
    status: 'REFUND_OVERDUE',
    amount_inr: 1799,
  });
}
