import { User } from "../user/User";

export type Connection = {
  connection?: Connection | null;
  connections?: Array<Connection>;
  createdAt: Date;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
