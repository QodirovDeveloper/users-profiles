import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Home, Profile, SingleImage, Login, Signup } from "./pages/index";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoutes from "./components/ProtectedRoutes";
import MainLayout from "./layout/MainLayout";
import { login, authReady } from "./app/features/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  const dispatch = useDispatch();
  const { user, isAuthReady } = useSelector((store) => store.user);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser} />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home setSelectedUser={setSelectedUser} />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/singleImage/:id",
          element: <SingleImage />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <Signup />,
    },
  ]);

  onAuthStateChanged(auth, (user) => {
    if (user?.displayName && user?.photoURL) {
      dispatch(login(user));
    }
    dispatch(authReady());
  });

  return <>{isAuthReady && <RouterProvider router={routes} />}</>;
}

export default App;

// const ACCESS_KEY = "O2XRyjimvUwQaxKL4TysGBBPrQEa-1mb4d-FKIx3-pY";
// `https://api.unsplash.com/search/photos?query=${seatchParams}&client_id=` +
