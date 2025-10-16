import EventDetails from "@/pages/Authorized/EventDetails";
import GoogleMap from "@/pages/Authorized/GoogleMap";
import Landing from "../pages/Guest/Landing";
import AuthorizedLayout from "@/layout/AuthorizedLayout";
import GiftIdeas from "@/pages/Authorized/GiftIdeas";
import Unauthorized from "@/pages/Unauthorized/Unauthorized";
import PhotoCollage from "@/pages/Authorized/PhotoCollage";

export const Route = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/collage",
    element: <PhotoCollage />,
  },
  {
    path: "/authorized/:token",
    element: <AuthorizedLayout />,
    children: [
      {
        path: "",
        element: <EventDetails />,
      },
      {
        path: "map",
        element: <GoogleMap />,
      },
      {
        path: "gift-ideas",
        element: <GiftIdeas />,
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
