export interface SaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
  listPrice: {
    amount: number;
    currencyCode: string;
  };
  retailPrice: {
    amount: number;
    currencyCode: string;
  };
  buyLink: string;
  offers: [
    {
      finskyOfferType: number;
      listPrice: {
        amountInMicros: number;
        currencyCode: string;
      };
      retailPrice: {
        amountInMicros: number;
        currencyCode: string;
      };
    }
  ];
}
