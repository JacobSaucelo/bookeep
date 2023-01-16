export interface VolumeInfo {
  title: string;
  subtitle: string;
  authors: [string];
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers: [
    {
      type: string;
      identifier: string;
    }
  ];
  readingModes: {
    text: boolean;
    image: boolean;
  };
  pageCount: number;
  printType: string;
  categories: [string];
  averageRating: number;
  ratingsCount: number;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  dimensions: {
    height: string;
    thickness: string;
    width: string;
  };
  panelizationSummary: {
    containsEpubBubbles: boolean;
    containsImageBubles: boolean;
  };
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
}
