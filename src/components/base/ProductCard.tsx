// import Image from 'next/image';
// import { notFound } from 'next/navigation';
// import { Product } from './types';
// import { Product } from './types';

// async function getData() {
//   const res = await fetch('http://localhost:3000/api/products', {
//     cache: 'no-store',
//   });
//   if (!res.ok) return notFound();
//   return res.json();
// }

export const ProductCards: React.FC = async () => {
  // const data: Product[] = await getData();

  // console.log('data', data);
  const data = [
    {
      _id: '65d0b91d889119a69bd19b59',
      code: '188534',
      category: '3M',
      article: '6975',
      name: 'Захисна стрічка 06975 3М 3939 48ммх55м',
      description: 'упаковка 24 шт',
      brandGroup: '3M',
      brandArticle: '6975',
      price: '625.22',
      availability: '0',
    },
    {
      _id: '65d0b91d889119a69bd19b59',
      code: '188534',
      category: '3M',
      article: '6975',
      name: 'Захисна стрічка 06975 3М 3939 48ммх55м',
      description: 'упаковка 24 шт',
      brandGroup: '3M',
      brandArticle: '6975',
      price: '625.22',
      availability: '0',
    },
    {
      _id: '65d0b91d889119a69bd19b59',
      code: '188534',
      category: '3M',
      article: '6975',
      name: 'Захисна стрічка 06975 3М 3939 48ммх55м',
      description: 'упаковка 24 шт',
      brandGroup: '3M',
      brandArticle: '6975',
      price: '625.22',
      availability: '0',
    },
  ];

  // const products = data.slice(1050, 1200);
  const products = data;

  return (
    <div className="flex flex-col gap-8 text-primaryText">
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
            price,
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
            <p className="w-[100px]">{price}</p>
            <p className="w-[100px]">
              {Number(Number(price) * 1.1).toFixed(2)}
            </p>
            <p className="w-[100px]">{availability}</p>
            {/* <Image
              src={`https://cdn.online.asg.ua/images/products/${code}/805_805/${code}.jpg`}
              width={100}
              height={100}
              alt="product"
            /> */}
          </div>
        ),
      )}
    </div>
  );
};
