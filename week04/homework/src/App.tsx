import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Login from "./pages/login";
import MyPage from "./pages/mypage";
import Users from "./pages/users";
import SignUp from "./pages/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/mypage",
    element: <MyPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/users",
    element: <Users />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
