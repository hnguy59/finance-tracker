import { FC, useEffect } from "react";

const PageNotFound: FC<{}> = () => {
  useEffect(() => {
    document.title = "Henry Nguyen - Page not found";
  }, []);

  return <div key="page not found">page not found</div>;
};

export default PageNotFound;
