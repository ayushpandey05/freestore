import { useRef } from "react";
import createUniqueId from "../utils/createUniqueId";

const useUniqueId = () => {
  const idRef: any = useRef();

  if (!idRef.current) {
    idRef.current = createUniqueId();
  }

  return idRef.current;
};

export default useUniqueId;
