import React from "react";
import "./App.css";
import { Feed, Header, Sidebar, Widgets } from "./components";

function App() {
  const user = "ravi";
  return (
    <div className="app">
      {!user ? (
        <h1>Login</h1>
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
