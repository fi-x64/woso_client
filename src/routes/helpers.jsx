import { APPS } from "./constants";

export const getApp = () => {
  const subdomain = getSubdomain(window.location.hostname);
  const main = APPS.find((app) => app.main == true);

  if (!main) throw new Error("Must have main app");

  if (subdomain == "") return { isAdmin: false, routes: main.app };

  const app = APPS.find((app) => subdomain === app.subdomain);

  return { isAdmin: subdomain == "admin", routes: app.app };
};

const getSubdomain = (location) => {
  const locationParts = location.split(".");
  // let sliceTill = -2;

  // const isLocalHost = locationParts.slice(-1)[0] === "localhost";

  // if (isLocalHost) sliceTill = -1;
  if (location.includes("admin")) {
    return "admin";
  } else return "";
};
