import EventDetails from "@/pages/Authorized/EventDetails";
import GoogleMap from "@/pages/Authorized/GoogleMap";
import Landing from "../pages/Guest/Landing";
import AuthorizedLayout from "@/layout/AuthorizedLayout";
import GiftIdeas from "@/pages/Authorized/GiftIdeas";
import Unauthorized from "@/pages/Unauthorized/Unauthorized";

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
