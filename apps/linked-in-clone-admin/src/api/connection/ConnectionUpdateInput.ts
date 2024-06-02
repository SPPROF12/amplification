import { ConnectionWhereUniqueInput } from "./ConnectionWhereUniqueInput";
import { ConnectionUpdateManyWithoutConnectionsInput } from "./ConnectionUpdateManyWithoutConnectionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ConnectionUpdateInput = {
  connection?: ConnectionWhereUniqueInput | null;
  connections?: ConnectionUpdateManyWithoutConnectionsInput;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
