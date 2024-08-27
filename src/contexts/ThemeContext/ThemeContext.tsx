import React, { createContext, useState } from "react";

interface ContextProps {
  theme: string;   //En este caso podria ser un boolean ya que solo existen dos themes, pero si en algun momento el proyecto necesita escalarse y se requiere aumentar los temas, no sería útil un Boolean
  toggleTheme: () => void;
}


export const ThemeContext = createContext<ContextProps>({
  theme: "dark",
  toggleTheme: () => {},
});

type Props = {
  children: React.ReactNode;
};


export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [themeActive, setThemeActive] = useState("dark");

  const toggleThemeHandler = () => {

    setThemeActive((prevState) => prevState === "dark" ? "light" : "dark");
    document.documentElement.setAttribute(
      "data-theme",
      themeActive === "dark" ?  "light" : "dark"
    );
    
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: themeActive,
        toggleTheme: toggleThemeHandler,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
