import "./components/styles/App.css";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage.js";
import RegisterPage from "./components/RegisterPage.js";
import DashboardRoute from "./components/DashboardRoute.js";
import Dashboard from "./components/Dashboard.js";
import Home from "./components/Home.js";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fuild m-0 p-0">
        <Navbar />
        <Switch>

          <DashboardRoute exact path="/" component={Dashboard}/>

          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/register">
            <RegisterPage/>
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
