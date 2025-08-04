import { useSelector } from "react-redux";
import { SlMenu } from "react-icons/sl";
import { useLogout } from "../hooks/useLogout";
import { TbLogout } from "react-icons/tb";

function Menu() {
  const { user } = useSelector((state) => state.user);
  const { isPending, logout } = useLogout();

  return (
    <div className="font-semibold">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn  m-1 btn-circle">
          <SlMenu />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a>
              <img
                src={user?.photoURL}
                alt="user name"
                width={24}
                className="rounded-full "
              />
              <p className="pl-2">{user?.displayName}</p>
            </a>
          </li>
          <li>
            <a>
              <span className="pl-2">
                <TbLogout />
              </span>
              <span className="pl-2">
                {!isPending && <button onClick={logout}>Logout</button>}
                {isPending && <button disabled>Logout</button>}
              </span>
            </a>
          </li>
          {/* <li>
            <a></a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
