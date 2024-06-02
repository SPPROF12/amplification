import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  comments?: number | null;
  content?: string | null;
  likes?: number | null;
  user?: UserWhereUniqueInput | null;
};
