import { Fragment } from "react";
import { useCollection } from "../hooks/useCollection";
import LastSeen from "../components/LastSeen";

function Home({ selectedUser, setSelectedUser }) {
  const { data: users } = useCollection("users");

  if (!users) {
    return <h1 className="text-3xl">Loading...</h1>;
  }

  return (
    <div>
      {users.map((user) => {
        const isSelected = selectedUser?.id === user.id;

        return (
          <Fragment key={user.id}>
            <div
              onClick={() => setSelectedUser(user)}
              className="cursor-pointer"
            >
              <ul className="menu bg-base-200 sm:w-70  rounded-box p-2">
                <li>
                  <a
                    className={`flex items-center gap-3 ${
                      isSelected ? " rounded-md" : ""
                    }`}
                  >
                    <div
                      className={`avatar ${
                        user.online ? "avatar-online" : "avatar-offline"
                      }`}
                    >
                      <div className="sm:w-14 max-sm:w-11 rounded-full">
                        <img src={user?.photoURL} alt={user?.displayName} />
                      </div>
                    </div>
                    <div className="sm:flex  max-sm:hidden inline-block">
                      <p className="font-semibold">{user.displayName}</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}

export default Home;
