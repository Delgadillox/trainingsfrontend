import { RouteObject } from "react-router-dom";
export type CustomRouter = {
  title: string;
  path: string;
  element: JSX.Element;
  children?: CustomRouteObject[];
};

export type CustomRouteObject = RouteObject & {
  icon: JSX.Element;
  children?: CustomRouteObject[];
};
