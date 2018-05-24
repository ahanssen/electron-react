import Home from "../containers/home";

const defaultTitle = "electron reactron";

export default [
  {
    label: "Home",
    path: "/",
    exact: true,
    pageTitle: defaultTitle.concat(" | create amazing content using Markdown"),
    component: Home
  }
];
