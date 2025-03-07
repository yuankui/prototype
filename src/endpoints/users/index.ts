import { APIs } from "../types";
import { shaped } from "@/common/shaped";
import { createUser, getUserById, getUsers } from "@/endpoints/users/services/user.service";

export const userEndpoints = shaped<APIs>()({
  "user/list": getUsers,
  "user/get": getUserById,
  "user/create": createUser,
});
