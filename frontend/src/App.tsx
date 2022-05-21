import React from "react";
import logo from "./logo.svg";
import "./App.css";
import createNavigator from "./navigator";
import Dashboard from "./pages/dashboard";
import Setting from "./pages/setting";
import { LocationProvider } from "./context/Location";
import PageNotFound from "./pages/pageNotFound";
import Authenticate from "./Authenticate";
import Login from "./pages/login";
import Signup from "./pages/signup";

const MainNavigator = createNavigator({
  pages: [
    {
      path: "/dashboard",
      component: Dashboard,
    },
    {
      path: "/setting",
      component: Setting,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/signup",
      component: Signup,
    },
  ],
  pageNotFound: PageNotFound,
  // pages: {
  //   dashboard: {
  //     component: Dashboard,
  //   },
  //   setting: {
  //     component: Setting,
  //   },
  // },
});

function App() {
  return (
    <LocationProvider>
      <Authenticate>
        <MainNavigator />
      </Authenticate>
    </LocationProvider>
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
