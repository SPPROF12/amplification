import { ConnectionWhereUniqueInput } from "./ConnectionWhereUniqueInput";
import { ConnectionListRelationFilter } from "./ConnectionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ConnectionWhereInput = {
  connection?: ConnectionWhereUniqueInput;
  connections?: ConnectionListRelationFilter;
  id?: StringFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
