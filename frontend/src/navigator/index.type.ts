import { JSXElementConstructor, ReactElement } from "react";

type componentType =
  | ReactElement<any, string | JSXElementConstructor<any>>
  | (() => Element)
  | (() => JSX.Element);

type pageType = {
  path: string;
  component: componentType;
}[];

interface NavigatorProps {
  pages?: pageType;
  pageNotFound?: any;
}

interface CreateNavigatorProps {
  pages: pageType;
  pageNotFound: any;
}
export type { NavigatorProps, CreateNavigatorProps };
