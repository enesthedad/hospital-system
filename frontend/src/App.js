import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ErrorPage from "./pages/ErrorPage";
import { useAuthContext } from "./hooks/useAuthContext";
function App() {
  const { user } = useAuthContext();
  const router = createBrowserRouter([
    {
      path: "/",
      element: user ? <Home /> : <Navigate to={"/login"} />,
    },
    {
      path: "/login",
      element: !user ? <Login /> : <Navigate to={"/"} />,
    },
    {
      path: "/signup",
      element: !user ? <Signup /> : <Navigate to={"/"} />,
    },
    {
      path: "/*",
      element: <ErrorPage />,
    },
  ]);
  return (
    <div className="App overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
