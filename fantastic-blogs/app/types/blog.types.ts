export interface BlogProps {
  title: string;
  id: number;
  likes: number;
  author: string;
  url: string;
}

export interface PageParams {
  params: Promise<{ id: string }>;
}
