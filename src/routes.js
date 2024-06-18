import Directors from "./pages/Directors";
import Home from "./pages/Home"
import Actors from "./pages/Actors"

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/directors",
    element: <Directors />
  },
  {
    path: "/actors",
    element: <Actors />
  }
];

export default routes;
