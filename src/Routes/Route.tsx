import EventDetails from "@/pages/Authorized/EventDetails";
import GoogleMap from "@/pages/Authorized/GoogleMap";
import Landing from "../pages/Guest/Landing";
import AuthorizedLayout from "@/layout/AuthorizedLayout";
import AboutClarissa from "@/pages/Authorized/AboutClarissa";
import Unauthorized from "@/pages/Unauthorized/Unauthorized";
import PhotoCollage from "@/pages/Authorized/PhotoCollage";

export const Route = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/authorized/:token",
    element: <AuthorizedLayout />,
    children: [
      {
        path: "",
        element: <AboutClarissa />,
      },
      {
        path: "photo-collage",
        element: <PhotoCollage />,
      },
      {
        path: "event-details",
        element: <EventDetails />,
      },
      {
        path: "map",
        element: <GoogleMap />,
      },
    ],
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />,
  },
  {
    path: "*",
    element: <Unauthorized />,
  },
];
