export type TypeAlbum = {
  id: number;
  userId: number;
  title: string;
};

export type TypePhotosAlbum = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
