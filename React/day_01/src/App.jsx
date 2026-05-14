import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import LoginComponent from "./components/login";
import RegisterComponent from "./components/register";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route path="/register" component={RegisterComponent} exact />
            <Route path="/login" component={LoginComponent} exact />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
