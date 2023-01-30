export type GetProductsType = {
  data: ProductsDataType;
  links: LinksPaginatedType;
  meta: MetaType;
};

export type ProductsDataType = {
  products: ProductType[];
};

export type ProductType = {
  productId: string;
  effectiveFrom?: string;
  effectiveTo?: string;
  lastUpdated: string;
  productCategory: ProductCategory;
  name: string;
  description: string;
  brand: string;
  brandName?: string;
  applicationUri?: string;
  isTailored: boolean;
  additionalInformation?: AdditionalInformationType;
};

export enum ProductCategory {
  TRANS_AND_SAVINGS_ACCOUNTS,
  TERM_DEPOSITS,
  CRED_AND_CHRG_CARDS,
}

export type AdditionalInformationType = {
  overviewUri?: string;
  termsUri?: string;
  eligibilityUri?: string;
  feesAndPricingUri?: string;
  bundleUri?: string;
};

export type LinksPaginatedType = {
  self: string;
  first?: string;
  prev?: string;
  next?: string;
  last?: string;
};

export type MetaType = {
  totalRecords: number;
  totalPages: number;
};

export enum EffectiveDate {
  CURRENT,
  FUTURE,
  ALL,
}

export type GetProductsQueryParameters = {
  effective?: EffectiveDate; // default: CURRENT
  "updated-since"?: string;
  brand?: string;
  "product-category"?: ProductCategory;
  page?: number; // default: 1
  "page-size"?: number; // default: 25
};

export type GetProductDetailsType = {
  data: ProductType;
  links: LinksPaginatedType;
  meta: MetaType;
};
