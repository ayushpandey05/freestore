import React, { CSSProperties } from "react";
import { defaultStyles } from "../utility";
import { FlatListProps } from "./index.type";

const FlatList: React.FC<FlatListProps> = ({
  style,
  contentContainerStyle,
  children = void 0,
  horizontal,
  data,
  renderItem,
  ...restProps
}) => {
  const styles: CSSProperties = {
    ...defaultStyles,
    ...style,
    overflowX: !horizontal ? "hidden" : "auto",
    overflowY: horizontal ? "hidden" : "auto",
    // [horizontal ? "max-width" : "max-height"]: "100%",
  };
  const contentContainerStyles: CSSProperties = {
    ...defaultStyles,
    ...style,
    flexDirection: horizontal ? "row" : "column",
  };

  return (
    <div style={styles}>
      <div style={contentContainerStyles}>
        {Array.isArray(data)
          ? data.map((item, index) => {
              return renderItem({ item, index });
            })
          : void 0}
      </div>
    </div>
  );
};

export default FlatList;
