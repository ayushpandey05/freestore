import { createContext, useContext, useEffect, useState } from "react";

type stateType = { [keyName: string]: string };

type locationType = {
  origin: string;
  pathname: string;
  search: string;
  state: stateType;
};
// @ts-ignore:next-line

const defaultLocation: locationType = {
  origin: "",
  pathname: "",
  search: "",
  state: {},
};

const Context = createContext({
  location: defaultLocation,
  changeLocation: (pathName: string, search?: string, state?: stateType) => {},
  replaceLocation: (pathName: string, search?: string, state?: stateType) => {},
});

const LocationProvider = ({ children }: any) => {
  const [location, setLocation] = useState(defaultLocation);

  const changeLocation = (
    pathname: string,
    search?: string,
    state?: stateType
  ) => {
    setLocation({
      ...location,
      pathname,
      search: search || "",
      state: state || {},
    });
    window.history.pushState(
      state || {},
      "",
      `${pathname}${search ? "?" + search : ""}`
    );
  };

  const replaceLocation = (
    pathname: string,
    search?: string,
    state?: stateType
  ) => {
    setLocation({
      ...location,
      pathname,
      search: search || "",
      state: state || {},
    });
    window.history.replaceState(
      state || {},
      "",
      `${pathname}${search ? "?" + search : ""}`
    );
  };

  const updateLocation = () => {
    const { state } = window.history;
    const { origin, pathname, search } = window.location;
    setLocation({ origin, pathname, search, state });
  };

  useEffect(() => {
    const { state } = window.history;
    const { origin, pathname, search } = window.location;
    setLocation({ origin, pathname, search, state });

    window.addEventListener("popstate", updateLocation);
    return () => window.removeEventListener("popstate", updateLocation);
  }, []);

  return (
    <Context.Provider value={{ location, changeLocation, replaceLocation }}>
      {location?.origin && children ? children : void 0}
    </Context.Provider>
  );
};

const useLocation = () => {
  const { location, changeLocation, replaceLocation } = useContext(Context);
  return { location, changeLocation, replaceLocation };
};

export { LocationProvider, useLocation };
