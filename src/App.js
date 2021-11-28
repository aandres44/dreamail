import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import EmailList from './Components/Mail/EmailList/EmailList';
import Mail from './Components/Mail/Mail'
import { Footer } from './Components/Footer/Footer';


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar />
          <Switch>
            <Route exact path="/mail" element={<Mail/>} />
            <Route exact path="/" element={<EmailList/>} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
