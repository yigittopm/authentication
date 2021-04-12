import "./components/styles/App.css";
import Navbar from "./components/Navbar";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fuild m-0 p-0">
        <Navbar />
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/register">
            <RegisterPage/>
          </Route>

          <Route exact path="/dashboard">
            <Dashboard/>
          </Route>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="*">
            <h1>Error Page</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
