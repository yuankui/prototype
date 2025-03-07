"use client";

import { useQuery } from "@tanstack/react-query";
import { endpointClient } from "@/endpoints/client";
import { User } from "@prisma/client";

export const UserList = () => {
  const { data: users } = useQuery({
    queryFn: async () => {
      return endpointClient.call("user/list");
    },
    queryKey: ["user/list"],
  });
  return (
    <ul>
      {users?.map((user: User) => (
        <li key={user.id}>
          {user.name} - {user.id}
        </li>
      )) ?? <li>No users found</li>}
    </ul>
  );
};
