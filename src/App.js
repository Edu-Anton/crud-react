import React from 'react';
import './App.scss';
import Header from './partials/header';
import Main from './partials/main'
import Footer from './partials/footer';
import { BrowserRouter} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
