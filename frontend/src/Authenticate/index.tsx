import { useEffect, useState } from "react";
import { useLocation } from "../context/Location";
import View from "../ui-components/View";

const Authenticate = ({ children }: any) => {
  const { location, replaceLocation } = useLocation();
  const { pathname, search } = location;
  const [isAuth, setIsAtuh] = useState(false);

  useEffect(() => {
    if (location.origin) {
      if (pathname === "/login" || pathname === "/signup") {
        replaceLocation(pathname, "", { pathname: "/dashboard" });
      } else {
        replaceLocation("/login", "", { pathname });
      }
      setIsAtuh(true);
    }
  }, [location.origin]);

  if (isAuth) {
    return children;
  }

  return <View style={{ flex: 1 }}></View>;
};

export default Authenticate;
