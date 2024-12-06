import { Route, Routes } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import Welcome from "../components/Welcome";
import Chat from "../components/Chat";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/:id/:name" element={<Chat />} />
    </Routes>
  );
};

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <AllRoutes />
    </div>
  );
};

export default Home;
