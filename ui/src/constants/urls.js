import Home from "../containers/home";
import Top10 from "../containers/top10";

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
    redirect: true,
    to: "/"
  }
];
