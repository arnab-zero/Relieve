import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import EventDashboard from "../pages/EventDashboard";
import HomePageContainer from "../layouts/HomePageContainer";
import IncidentReports from "../components/Home/IncidentReports";
import VolunteerCalls from "../components/Home/VolunteerCalls";
import DonationCalls from "../components/Home/DonationCalls";
import Alerts from "../components/Home/Alerts";
import CommunityDashboard from "../pages/CommunityDashboard";

const router = createBrowserRouter([
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            element: <HomePageContainer />,
            children: [
              {
                index: true, // This will render IncidentReports at the root of HomePageContainer
                element: <IncidentReports />,
              },
              {
                path: "/volunteer-calls",
                element: <VolunteerCalls />,
              },
              {
                path: "/donation-calls",
                element: <DonationCalls />,
              },
              {
                path: "/alerts",
                element: <Alerts />,
              },
            ],
          },
        ],
      },
      {
        path: "/event-dashboard",
        element: <EventDashboard />,
      },
      {
        path: "/community",
        element: <CommunityDashboard />,
      },
    ],
  },
]);

export default router;
