import { Outlet } from "react-router-dom";
import Navbar from "../../components/instructor/Navbar.jsx";
import Sidebar from "../../components/instructor/Sidebar.jsx";
import Footer from "../../components/instructor/Footer.jsx";

const Instructor = () => {
  return (
    <div className="text-default min-h-screen bg-white">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">{<Outlet />}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Instructor;
