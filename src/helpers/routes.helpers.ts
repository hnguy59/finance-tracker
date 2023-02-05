import { To } from "react-router-dom";

type NavbarItemsType = {
  title: string;
  path: To;
};

export const navbarItems: NavbarItemsType[] = [
  {
    title: "Works",
    path: "/works",
  },
  { title: "Setup", path: "/setup" },
];
