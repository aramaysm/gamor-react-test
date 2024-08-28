import React from 'react';
import logo from './logo.svg';
import "./styles/styles.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Portal } from './features/Portal';
import "./App.css"
import { Login } from './features/Auth/Login';
import { CreateAccount } from './features/Auth/CreateAcccount';


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
          <Route path='/login' element={<Login />} />    
          <Route path='/create' element={<CreateAccount />} />                
      </Routes>
    </BrowserRouter>
  );
}

export default App;
