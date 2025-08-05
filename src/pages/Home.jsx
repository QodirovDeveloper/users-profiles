import { Fragment } from "react";
import { useCollection } from "../hooks/useCollection";
import LastSeen from "../components/LastSeen";

function Home({ selectedUser, setSelectedUser }) {
  const { data: users } = useCollection("users");

  if (!users) {
    return <h1 className="text-3xl">Loading...</h1>;
  }

  return (
    <div className="bg-[url(./bg.png)] bg-center bg-cover bg-no-repeat h-screen">
      {users.map((user) => {
        const isSelected = selectedUser?.id === user.id;

        return (
          <Fragment key={user.id}>
            <ul
              className="menu bg-base-200 sm:w-70 p-2 cursor-pointer"
              onClick={() => setSelectedUser(user)}
            >
              <li>
                <a className="flex items-center gap-3">
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
          </Fragment>
        );
      })}
    </div>
  );
}

export default Home;
