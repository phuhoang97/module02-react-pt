import React, { createContext, useState } from "react";
// import CompB from "./CompB";
import CompC from "./CompC";

export const themeContext = createContext();

function ExUseContext() {
  // Truyền props từ componet EXUseContext => CompB => CompC
  // useReducer + useContext == Redux
  const [theme, setTheme] = useState("light");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // theme === "light" ? "dark" : "light"
  //  => if(theme === "light") {
  //   theme = "dark"
  // } else {
  //   theme = "light"
  // }

  return (
    <div>
      <h3>useContext</h3>
      {/* <button onClick={handleToggleTheme}>Click Change Style</button>
      <CompB themeProps={theme}></CompB> */}

      {/* Truyền props từ cha xuống compC bằng useContext */}
      <themeContext.Provider value={theme}>
        <button onClick={handleToggleTheme}>Click Change Style</button>
        <CompC />
      </themeContext.Provider>
    </div>
  );
}

export default ExUseContext;
