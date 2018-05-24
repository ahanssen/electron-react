import Home from "../containers/home";
import Lancamentos from "../containers/lancamentos";
import NotFound from "../containers/not-found";

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
    label: "Lançamentos",
    path: "/lancamentos",
    exact: true,
    strict: true,
    pageTitle: defaultTitle.concat(" | lançamentos"),
    component: Lancamentos
  },
  {
    redirect: true,
    to: "/"
  }
];
