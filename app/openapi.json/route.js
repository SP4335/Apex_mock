import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    openapi: '3.0.0',
    info: { title: 'Paisa Pal Custom Mock API', version: '1.0.0' },
    paths: {
      '/api/v1/merchants/enrich': { post: { summary: 'Enrich Merchant Name', responses: { '200': { description: 'Success' } } } },
      '/api/v1/charges/duplicate-check': { post: { summary: 'Check Duplicate Charges', responses: { '200': { description: 'Success' } } } },
      '/api/v1/returns/refund-eta': { post: { summary: 'Check Return Refund Status', responses: { '200': { description: 'Success' } } } }
    }
  });
}
