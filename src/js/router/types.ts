export interface RouteProps {
  key: string;
  path: string;
  component: React.LazyExoticComponent<React.FC>;
  children?: RouteProps[];
}
