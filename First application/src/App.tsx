import React from "react";
import "./App.css";
import { Header } from "./Header";
import { Post } from "./Post";
import { Side } from "./Side";

function App() {
  return (
    <div>
      <Header />
      <div className="flex justify-center ">
        <div className="flex justify-center gap-5 w-[70%]">
          <div className="w-[50%]">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
          <div className="w-[30%]">
            <Side />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
