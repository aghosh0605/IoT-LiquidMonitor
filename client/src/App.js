import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import routes from "./routes.js"
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

function App() {
  return (
    <div className=" bg-background-gray">
      <div>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={withTracker((props) => {
                return (
                  <route.layout {...props}>
                    <route.component {...props} />
                  </route.layout>
                );
              })}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
