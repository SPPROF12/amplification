import { User } from "../user/User";

export type Post = {
  comments: number | null;
  content: string | null;
  createdAt: Date;
  id: string;
  likes: number | null;
  updatedAt: Date;
  user?: User | null;
};
