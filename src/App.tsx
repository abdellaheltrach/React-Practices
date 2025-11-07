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
            <Post Title="Hello there" Body="hi from the body :-)" />
            <Post Title="how is the day today" Body="hi from the body :-)" />
            <Post Title="news" Body="hi from the body :-)" />
            <Post Title="React is great" Body="hi from the body :-)" />
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
