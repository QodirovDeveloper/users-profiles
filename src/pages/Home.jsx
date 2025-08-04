import { Fragment } from "react";
import { useCollection } from "../hooks/useCollection";

function Home() {
  const { data: users } = useCollection("users");
  if (!users) {
    return <h1 className="text-3xl">Loading...</h1>;
  }
  return (
    <div>
      {users &&
        users.map((user) => {
          return (
            <Fragment key={user.id}>
              {user.online && (
                <div className="avatar avatar-online">
                  <div className="w-24 rounded-full">
                    <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                  </div>
                </div>
              )}
              {!user.online && (
                <div className="avatar avatar-offline">
                  <div className="w-24 rounded-full">
                    <img src="https://img.daisyui.com/images/profile/demo/idiotsandwich@192.webp" />
                  </div>
                </div>
              )}
            </Fragment>
          );
        })}
    </div>
  );
}

export default Home;
