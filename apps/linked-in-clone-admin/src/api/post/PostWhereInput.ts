import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostWhereInput = {
  comments?: IntNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  likes?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
