import { AccessInfo } from "./accessInfo.d";
import { SaleInfo } from "./saleInfo.d";
import { VolumeInfo } from "./volumeInfo.d";

export interface Book {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
  searchInfo: {
    textSnippet: string;
  };
}

export interface Books {
  kind: string;
  totalItems: number;
  items: [Book];
}
