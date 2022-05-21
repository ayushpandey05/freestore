import { CSSProperties } from "react";
import { defaultStyles } from "../utility";
import { TouchProps } from "./index.type";

const Touch: React.FC<TouchProps> = ({ style, onPress, ...restProps }) => {
  const styles: CSSProperties = {
    ...defaultStyles,
    maxWidth: "100%",
    maxHeight: "100%",
    ...style,
  };

  return <div style={styles} {...restProps} onClick={onPress} />;
};

export default Touch;
