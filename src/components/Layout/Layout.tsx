import { AnimatePresence } from "framer-motion";
import { FC, useCallback } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "components/Navbar";
import useTheme from "hooks/useTheme";
import * as Styles from "./Layout.styles";

const Layout: FC<{}> = () => {
  const { themeProps } = useTheme();
  const { pathname } = useLocation();

  const year = new Date().getFullYear();

  if (typeof window !== "undefined") {
    window.history.scrollRestoration = "manual";
  }

  const handleExitCompleteAnimatePresence = useCallback(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0 });
    }
  }, []);

  return (
    <Styles.Layout>
      <Styles.Header>
        <Navbar />
      </Styles.Header>
      <Styles.Body {...themeProps}>
        <AnimatePresence
          mode="wait"
          initial
          onExitComplete={handleExitCompleteAnimatePresence}
          key={pathname}
        >
          <Styles.ContentContainer
            key={pathname}
            initial={{ opacity: 0, x: 0, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -0, y: 20 }}
            transition={{ duration: 0.4, type: "easeInOut" }}
            style={{ position: "relative" }}
          >
            <Outlet key={pathname} />
          </Styles.ContentContainer>
        </AnimatePresence>
      </Styles.Body>
      <Styles.Footer>
        <Styles.FooterContent {...themeProps}>
          © {year} Henry Nguyen. All Rights Reserved.
        </Styles.FooterContent>
      </Styles.Footer>
    </Styles.Layout>
  );
};

export default Layout;
