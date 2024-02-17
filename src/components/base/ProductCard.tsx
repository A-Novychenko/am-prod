import Image from 'next/image';
import { Product } from './types';

export const ProductCards: React.FC<{ products: Product[] }> = ({
  products,
}) => {
  return (
    <div className="flex flex-col gap-8 text-white">
      {products.map(
        (
          {
            code,
            category,
            article,
            name,
            description,
            brandGroup,
            brandArticle,
            priceIn,
            priceOut,
            availability,
          },
          index,
        ) => (
          <div key={index} className="flex gap-4 bg-accent text-center">
            <p className="w-[50px]">{code}</p>
            <p className="w-[50px]">{category}</p>
            <p className="w-[50px]">{article}</p>
            <p className="w-[300px]">{name}</p>
            <p className="hidden w-[300px]">{description}</p>
            <p className="w-[100px]">{brandGroup}</p>
            <p className="w-[100px]">{brandArticle}</p>
            <p className="w-[100px]">{priceIn}</p>
            <p className="w-[100px]">{priceOut}</p>
            <p className="w-[100px]">{availability}</p>
            <Image
              src={`https://cdn.online.asg.ua/images/products/${code}/805_805/${code}.jpg`}
              width={100}
              height={100}
              alt="product"
            />
          </div>
        ),
      )}
    </div>
  );
};
