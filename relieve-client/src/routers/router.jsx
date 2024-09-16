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
            path: '/',
            element: <HomePageContainer />,
            children: [
              {
                path: '/',
                element: <IncidentReports></IncidentReports>
              },
              {
                path: '/volunteer-calls',
                element: <VolunteerCalls></VolunteerCalls>
              },
              {
                path: '/donation-calls',
                element: <DonationCalls></DonationCalls>
              }
            ]
          }
        ]
      },
      {
        path: "/event-dashboard",
        element: <EventDashboard />,
      },
    ],
  },
]);

export default router;
