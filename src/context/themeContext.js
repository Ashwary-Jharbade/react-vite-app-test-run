import React from "react";

const themeContext = React.createContext("light");
const themeContextProvider = themeContext.Provider;
const themeContextConsumer = themeContext.Consumer;

export { themeContext, themeContextConsumer, themeContextProvider };
