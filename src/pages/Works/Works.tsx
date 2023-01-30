import { FC, useEffect } from "react";

const Works: FC<{}> = () => {
  useEffect(() => {
    document.title = "Henry Nguyen - Works";
  }, []);

  return <div key="works">i works page</div>;
};

export default Works;
