import './App.css';
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom"
import { Mail } from './Components/Mail/Mail';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Mail} />
      </Switch>
    </Router>
  );
}

export default App;
