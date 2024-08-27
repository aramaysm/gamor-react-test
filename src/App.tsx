import React from 'react';
import logo from './logo.svg';
import "./styles/styles.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Portal } from './features/Portal';



function App() {


  React.useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      "dark" 
    );
  }, []);

  /*
  const { theme,  toggleTheme} = React.useContext(ThemeContext);

  React.useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme ? "dark" : "light"
    );
  }, [theme]);

  */

  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Portal />} />                  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
