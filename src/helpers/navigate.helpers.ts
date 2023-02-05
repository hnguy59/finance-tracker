import { NavigateFunction, To } from "react-router-dom";

export const navigateTo = (path: string | To, navigate: NavigateFunction) => {
  setTimeout(() => {
    navigate(path);
  }, 0);
};
