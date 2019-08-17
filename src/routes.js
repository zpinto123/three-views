import App from "./pages/App";
import { ROUTES } from "./shared/constants/navigation";

const routes = [
  {
    component: App,
    routes: [
      {
        path: ROUTES.ROOT,
        exact: true,
        component: App
      }
    ]
  }
];

export default routes;
