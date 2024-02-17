'use client';

import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { Product } from './types';
import { ProductCards } from './ProductCard';

export const FileUpload: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = e => {
      if (!e.target?.result) return;
      const data = new Uint8Array(e.target.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet, {
        header: 1,
      }) as string[][];
      // Assume the data structure in Excel is like: [ [name, description, price], [product1, desc1, 10], [product2, desc2, 20], ... ]
      const products = parsedData.slice(1).map(row => ({
        code: row[0],
        category: row[1],
        article: row[2],
        name: row[3],
        description: row[4],
        brandGroup: row[5],
        brandArticle: row[6],
        priceIn: Number(row[7]),
        priceOut: Number((Number(row[7]) * 1.1).toFixed(2)),
        availability: row[8],
      }));
      setProducts(products);
    };
    reader.readAsArrayBuffer(file);
  };

  const firstProducts = products.slice(1000, 1100);

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      {products.length > 0 && <ProductCards products={firstProducts} />}
    </div>
  );
};
