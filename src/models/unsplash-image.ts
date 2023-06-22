export interface UnsplashImage {
  description: string;
  id: string;
  user: {
    username: string;
  };
  urls: {
    raw: string;
  };
  width: number;
  height: number;
}

export interface UnsplashResponse {
  results: UnsplashImage[];
}
