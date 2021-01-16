import React from "react";
import "./App.css";
import { Feed, Header, Login, Sidebar, Widgets } from "./components";
import { useStateValue } from "./context/StateProvider";

function App() {
  // const user = null;
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
