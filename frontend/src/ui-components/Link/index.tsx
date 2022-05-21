import { useLocation } from "../../context/Location";
import { LinkProps } from "./index.type";

const Link: React.FC<LinkProps> = ({
  path,
  search,
  onCLick,
  children,
  target,
  state
}) => {
  const { changeLocation } = useLocation();

  const onClickEvent = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (typeof onCLick === "function") {
      onCLick(event);
    } else if (event.nativeEvent.button === 0) {
      event.preventDefault();
      event.stopPropagation();
      changeLocation(path, search, state);
    }
  };

  const styles = {};

  return (
    <a
      style={styles}
      href={`${path}${search ? "?" + search : ""}`}
      onClick={onClickEvent}
      target={target}
    >
      {children}
    </a>
  );
};

export default Link;
