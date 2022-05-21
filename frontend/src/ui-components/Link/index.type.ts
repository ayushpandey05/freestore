interface LinkProps {
  path: string;
  search?: string;
  onCLick?: (event?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  children?: any;
  target?: "_self" | "_blank";
  state?: { [keyName: string]: string };
}

export type { LinkProps };
