import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Customers from './components/Customers';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//['Home', 'Dashboard', 'Products', 'Customers']
function App() {
  console.log(logo)
  return (
    <div className="App">
      <Layout/>
      <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Dashboard" component={Dashboard} />
              <Route path="/Products" component={Products} />
              <Route path="/Customers" component={Customers} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
