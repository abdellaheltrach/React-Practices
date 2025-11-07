import React from "react";

export function Post() {
  return (
    <div className="border-4 my-4 py-6 px-3 border-cyan-600 ">
      <h2 className="font-bold text-2xl p-3 flex justify-center ">
        This is the post title
      </h2>
<hr className="border-t-2" />
      <p className="p-3 flex justify-center">this is the body of the post</p>
    </div>
  );
}
