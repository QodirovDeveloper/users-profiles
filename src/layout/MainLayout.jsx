import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
function MainLayout({ selectedUser, setSelectedUser }) {
  return (
    <>
      <Navbar selectedUser={selectedUser} />
      <main>
        <Outlet context={{ setSelectedUser }} />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
