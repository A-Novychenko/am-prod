import { NextResponse } from 'next/server';

import connect from '@/actions/mongoDb/db';

import ASGproduct from '@/actions/mongoDb/models/Product';

export const GET = async () => {
  try {
    await connect();

    const products = await ASGproduct.find();

    return new NextResponse(JSON.stringify(products), {
      status: 200,
    });
  } catch (e) {
    return new NextResponse(`Error in fetching products: ${e}`, {
      status: 500,
    });
  }
};
