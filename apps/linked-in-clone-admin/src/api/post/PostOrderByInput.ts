import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  comments?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  likes?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
