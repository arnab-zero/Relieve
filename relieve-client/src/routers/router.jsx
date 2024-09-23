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
import Network from "../pages/Network";
import Communities from "../components/Network/Communities";
import Events from "../components/Network/Events";
import Shelter from "../pages/Shelter";
import ShelterDashboard from "../pages/ShelterDashboard";
import MapPage from "../components/Map/MapPage";
import ShelterInhabitant from "../components/Shelter/ShelterInhabitant";


// Define the routes
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
                index: true,
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
        path: "/event-dashboard/:eventId",
        element: <EventDashboard />,
      },
      {
        path: "/community/:orgId",
        element: <CommunityDashboard />,
      },
      {
        path: "/network",
        element: <Network />,
        children: [
          {
            index: true,
            element: <Communities />,
          },
          {
            path: "events",
            element: <Events />,
          },
        ],
      },
      {
        path: "/map",
        element: <MapPage />,
      },
      {
        path: "/shelter",
        element: <Shelter />,
      },
      {
        path: "shelter/:shelterId",
        element: <ShelterDashboard />,
      }
    ],
  },
]);

export default router;
