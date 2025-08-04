import ThemeMode from "./ThemeMode";
import Menu from "./Menu";
import Search from "./Search";
import LastSeen from "./LastSeen";
import { useSelector } from "react-redux";

function Navbar({ selectedUser }) {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="flex justify-between items-center px-4  ">
      <div className="flex items-center gap-3">
        <Menu />
        <Search />
      <div className="flex items-center justify-center gap-3 m-1">
        <img
          src={selectedUser ? selectedUser?.photoURL : user?.photoURL}
          alt={selectedUser ? selectedUser?.displayName : user?.displayName}
          className="w-10 rounded-full"
        />
        <div>
          {selectedUser && (
            <div>
              <p>{selectedUser.displayName}</p>
              <p>
                {selectedUser.online ? (
                  "Online"
                ) : (
                  <LastSeen timestamp={selectedUser.lastSeen} />
                )}
              </p>
            </div>
          )}
        </div>
      </div>
      </div>

      <div className="flex items-center gap-4">
        <ThemeMode />
      </div>
    </div>
  );
}

export default Navbar;
