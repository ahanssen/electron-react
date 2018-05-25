import Home from "../containers/home";
import Top10 from "../containers/top10";
import SystemInfo from "../containers/system-info";

const defaultTitle = "electron";

export default [
  {
    label: "Home",
    path: "/",
    exact: true,
    pageTitle: defaultTitle.concat(" | my react app"),
    component: Home
  },
  {
    label: "Top 10 Clientes",
    path: "/top-10",
    exact: true,
    strict: true,
    pageTitle: defaultTitle.concat(" | top 10"),
    component: Top10
  },
  {
    label: "System Info",
    path: "/system-info",
    exact: true,
    strict: true,
    pageTitle: defaultTitle.concat(" | system info"),
    component: SystemInfo
  },
  {
    redirect: true,
    to: "/"
  }
];
