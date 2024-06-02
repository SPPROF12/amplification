import { Connection } from "../connection/Connection";
import { Post } from "../post/Post";
import { Profile } from "../profile/Profile";
import { JsonValue } from "type-fest";

export type User = {
  connections?: Array<Connection>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  posts?: Array<Post>;
  profiles?: Array<Profile>;
  roles: JsonValue;
  supertokensId: string | null;
  updatedAt: Date;
  username: string;
};
