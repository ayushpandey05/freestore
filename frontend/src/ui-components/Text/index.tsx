import { TextProps } from "./index.type";

const Text: React.FC<TextProps> = ({ ...restProps }) => {
  return <div {...restProps} />;
};

export default Text;
