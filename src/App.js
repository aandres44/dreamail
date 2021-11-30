import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import EmailList from './Components/Mail/EmailList/EmailList';
import Mail from './Components/Mail/Mail'
import { Footer } from './Components/Footer/Footer';
import SendMail from './Components/Mail/SendMail/SendMail';
import News from './Components/News/News';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/news" element={<News />} />
      </Switch>
      <div className="app">
        <Switch>
          <Route exact path="/" element={<Header />} />
        </Switch>
        <div className="app-body">
          <Switch>
            <Route exact path="/" element={<Sidebar />} />
          </Switch>
          <Switch>
            <Route exact path="/mail" element={<Mail />} />
            <Route exact path="/" element={<EmailList />} />
          </Switch>
        </div>
        <Switch>
          <Route exact path="/" element={<SendMail />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
