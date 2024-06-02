import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  comments?: number | null;
  content?: string | null;
  likes?: number | null;
  user?: UserWhereUniqueInput | null;
};
