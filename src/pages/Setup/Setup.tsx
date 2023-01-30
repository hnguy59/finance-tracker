import { FC, useEffect } from "react";

const Setup: FC<{}> = () => {
  useEffect(() => {
    document.title = "Henry Nguyen - Setup";
  }, []);

  return (
    <div>
      i Setup page
      <div>
        Hardware - M1 Macbook Pro 14 inch - Quntis lightbar - anko webcam - GMMK
        pro 75 keyboard - Logitech Master MX 3 - Audio technica AT2020
      </div>
      <div>
        IDE setup - VSCode - - Git Blame - - Indent-rainbow - - INline Parameter
        for VSCode - - Tokyo Night theme - Rectangle - Fork - iTerm
      </div>
    </div>
  );
};

export default Setup;
