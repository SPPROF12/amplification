import { ConnectionUpdateManyWithoutUsersInput } from "./ConnectionUpdateManyWithoutUsersInput";
import { PostUpdateManyWithoutUsersInput } from "./PostUpdateManyWithoutUsersInput";
import { ProfileUpdateManyWithoutUsersInput } from "./ProfileUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  connections?: ConnectionUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  posts?: PostUpdateManyWithoutUsersInput;
  profiles?: ProfileUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  supertokensId?: string | null;
  username?: string;
};
