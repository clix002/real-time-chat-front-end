import { Route, Routes } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import Welcome from "../components/Welcome";
import Chat from "../components/Chat";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/chat/:id/:name" element={<Chat />} />
    </Routes>
  );
};

const Home = ({ setLoggedInUser }) => {
  return (
    <div className="flex">
      <Sidebar setLoggedInUser={setLoggedInUser} />
      <AllRoutes setLoggedInUser={setLoggedInUser} />
    </div>
  );
};

export default Home;
