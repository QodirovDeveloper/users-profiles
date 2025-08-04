import { useSelector } from "react-redux";
import { useLogout } from "../hooks/useLogout";
import { Link } from "react-router-dom";
import ThemeMode from './ThemeMode'

function Navbar() {
  const { isPending, logout } = useLogout();
  const { user } = useSelector((state) => state.user);

  return (
    <nav className="flex justify-between items-center px-4 py-3 bg-gray-900 text-white">
      <Link to="/" className="text-xl font-bold">
        MyApp
      </Link>

      <div className="flex items-center gap-4">
        <ThemeMode />
         {user?.displayName}
        <img src={user?.photoURL} alt="user name" width={60} className="rounded-full" />
        {!isPending && (
          <button onClick={logout} className="btn btn-ghost">
            Logout
          </button>
        )}
        {isPending && (
          <button className="btn btn-ghost disabled" disabled>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
