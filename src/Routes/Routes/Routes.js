import { createBrowserRouter } from "react-router-dom";
import DeshboardLayout from "../../Layout/DeshboardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import DeshBoard from "../../Pages/DeshBoard/DeshBoard/DeshBoard";
import Myappointment from "../../Pages/DeshBoard/Myappointment/Myappointment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
    ],
  },
  {
    path: "/deshboard",
    element: (
      <PrivateRoute>
        <DeshboardLayout></DeshboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/deshboard",
        element: <Myappointment></Myappointment>,
      },
    ],
  },
]);

export default router;
