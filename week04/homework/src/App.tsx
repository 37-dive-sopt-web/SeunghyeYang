import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import MyPage from "./pages/MyPage";
import Login from "./pages/Login";
import Users from "./pages/Users";
import SignUp from "./pages/SignUp";

// 라우터 설정
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/mypage",
    element: <MyPage />,
  },
  {
    path: "/users",
    element: <Users />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
