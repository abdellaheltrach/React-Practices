import React from "react";
import "./App.css";
import { Header } from "./Header";
import { Post } from "./Post";
import { Side } from "./Side";

function App() {
  const PostArr: { id?: number; Title?: string; Body?: string }[] = [
    { id: 1, Title: "Hello there", Body: "hi from the body :-)" },
    { id: 2, Title: "how is the day today", Body: "hi from the body :-)" },
    { id: 3, Title: "news", Body: "hi from the body :-)" },
    { id: 4, Title: "React is great", Body: "hi from the body :-)" },
  ];

  const PostList = PostArr.map((p, indedx) => (
    <div key={p.id ?? indedx}>
      <Post Title={p.Title} Body={p.Body} />
    </div>
  ));

  return (
    <div>
      <Header />
      <div className="flex justify-center ">
        <div className="flex justify-center gap-5 w-[70%]">
          <div className="w-[50%]">
            {PostList}
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
