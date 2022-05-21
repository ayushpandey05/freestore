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
}

export default App;
