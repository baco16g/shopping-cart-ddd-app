declare type ProductVolumeInfoSchema = {
  name: string,
  description: string,
  category: string
}

declare type ProductSaleInfoSchema = {
  amount: number,
  currencyCode: string
}

declare type ProductStockInfoSchema = {
  quantity: number
}

declare type ProductSchema = {
  productCode: string,
  volumeInfo: ProductVolumeInfoSchema,
  saleInfo: ProductSaleInfoSchema,
  stockInfo: ProductStockInfoSchema
}

/* eslint-disable */
declare class ProductModel extends Entity {
  getProductCode: () => string,
  getVolumeInfo: () => ProductVolumeInfo,
  getSaleInfo: () => ProductSaleInfo,
  getStockInfo: () => ProductStockInfo,
  reduceStockQuantity: (n: number) => ProductModel
}

/* eslint-disable */
declare class ProductViewModel extends ProductModel {
  /* eslint-disable */
  getThumbnailUrl: () => string,
  getFormattedPrice: () => string,
  getStockQuantityLabel: () => InnerHTMLString
}

/* eslint-disable */
declare class ProductSaleInfo {
  /* eslint-disable */
  getAmount: () => number,
  getCurrencyCode: () => string
}

/* eslint-disable */
declare class ProductStockInfo {
  /* eslint-disable */
  getQuantity: () => number
}

/* eslint-disable */
declare class ProductVolumeInfo {
  /* eslint-disable */
  getName: () => string,
  getDescription: () => string,
  getCategory: () => string
}

declare class ProductsViewModel {
  getProductListSize: () => number,
  getProductList: () => List<ProductViewModel>,
  getProductListJS: () => any[],
  getProductByProductCode: string => ProductViewModel,
  pushProduct: ({ product: ProductSchema }) => ProductsViewModel
}
