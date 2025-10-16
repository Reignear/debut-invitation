import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Route } from "./Routes/Route";

const router = createBrowserRouter(Route);
export default function App() {
  return <RouterProvider router={router} />;
}
