import { CSSProperties } from "react";
import { defaultStyles } from "../utility";
import { ViewProps } from "./index.type";

const View: React.FC<ViewProps> = ({ style, ...restProps }) => {
  const styles: CSSProperties = {
    ...defaultStyles,
    maxWidth: "100%",
    maxHeight: "100%",
    ...style,
  };

  return <div style={styles} {...restProps} />;
};

export default View;
