import { appRoutes, adminRoutes } from ".";

export const APPS = [
  {
    subdomain: "",
    app: appRoutes,
    main: true,
  },
  {
    subdomain: "admin",
    app: adminRoutes,
    main: false,
  },
];
