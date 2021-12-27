export interface IBlog {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  likes: string[];
  comments: {
    username: string;
    avatar: string;
    text: string;
    date: string;
  }[];
}

export interface IBlogs {
  blogs: IBlog[];
}
