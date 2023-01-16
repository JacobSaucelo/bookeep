export interface BookShelfTypes {
  items: VolumeTypes;
}

export interface VolumeTypes {
  access: string;
  created: string;
  id: number;
  kind: string;
  title: string;
  updated: string;
  volumeCount: number;
  volumesLastUpdated: string;
  volumes?: any;
}
