import { RoleConstants } from "@celeris/constants";
import type { FakeUserInfo } from "../../models/auth/FakeUserInfo";

export const fakeUserList: FakeUserInfo[] = [
  {
    id: "1",
    username: "kirklin",
    fullName: "Kirk Lin",
    phone: "15912345678",
    avatarUrl: "https://avatars.githubusercontent.com/u/17453452",
    homePageUrl: "/dashboard/index",
    roles: [
      {
        name: RoleConstants.ADMIN,
        description: "Admin",
      },
    ],
    token: "adminFakeToken",
    extraInfo: {
      password: "123456",
    },
  },
  {
    id: "2",
    username: "user",
    fullName: "Celeris User",
    phone: "13887654321",
    avatarUrl: "https://avatars.githubusercontent.com/u/17453452",
    roles: [
      {
        name: RoleConstants.USER,
        description: "User",
      },
    ],
    token: "userFakeToken",
    extraInfo: {
      password: "123456",
    },
  },
  {
    id: "3",
    username: "guest",
    fullName: "Guest",
    roles: [
      {
        name: RoleConstants.GUEST,
        description: "Guest",
      },
    ],
    token: "guestFakeToken",
    extraInfo: {
      password: "123456",
    },
  },
];
