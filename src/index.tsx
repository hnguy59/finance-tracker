import React from "react";
import { CircularProgress } from "@mui/material";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import ThemeProvider from "ThemeProvider";
import { store } from "reducers/store";
import { router } from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <ThemeProvider>
      <RouterProvider
        key={window.location.pathname}
        router={router}
        fallbackElement={<CircularProgress />}
      />
    </ThemeProvider>
  </Provider>
);
