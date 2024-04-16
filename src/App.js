import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom/cjs/react-router-dom.min";

import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Register from "./Register";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
          <Header />
           <Checkout/>
          </Route>
          <Route path="/login">
           <Login/>
          </Route>
          <Route path="/register">
           <Register/>
          </Route>
          <Route path="/">
            <Header />
            <Home/>  
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
