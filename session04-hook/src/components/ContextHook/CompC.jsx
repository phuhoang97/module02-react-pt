import React, { useContext } from "react";
import { themeContext } from "./ExUseContext";

function CompC() {
  const theme = useContext(themeContext);
  return (
    <div>
      <p className={theme}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi culpa
        impedit minima numquam aperiam pariatur maxime ea id facere enim odio
        est aut autem dolores, ipsum adipisci placeat omnis quia!
      </p>
    </div>
  );
}

export default CompC;
