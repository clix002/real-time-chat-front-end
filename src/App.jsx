import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Auth } from "./pages/Auth";
import Home from "./pages/Home";

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState(
    localStorage.getItem("jwt") ? true : false
  );
  return (
    <>
      {loggedInUser ? (
        <Home setLoggedInUser={setLoggedInUser} />
      ) : (
        <Auth setLoggedInUser={setLoggedInUser} />
      )}
    </>
  );
}
