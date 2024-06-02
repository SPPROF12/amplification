import { ConnectionWhereUniqueInput } from "./ConnectionWhereUniqueInput";
import { ConnectionCreateNestedManyWithoutConnectionsInput } from "./ConnectionCreateNestedManyWithoutConnectionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ConnectionCreateInput = {
  connection?: ConnectionWhereUniqueInput | null;
  connections?: ConnectionCreateNestedManyWithoutConnectionsInput;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
