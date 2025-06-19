export type StaticPageKey =
  | 'home'
  | 'vinRequest'
  | 'cart'
  | 'checkout'
  | 'checkoutResult'
  | 'searchProducts';

export interface MetaPageData {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  noindex: boolean;
}

export interface MetaStdData {
  locale: string;
  images: {
    url: string;
    width: number;
    height: number;
    alt: string;
  }[];
}

// ✅ Правильна типізація JSON
export interface MetaJson {
  stdData: MetaStdData;
  home: MetaPageData;
  vinRequest: MetaPageData;
  cart: MetaPageData;
  checkout: MetaPageData;
  checkoutResult: MetaPageData;
  searchProducts: MetaPageData;
}
