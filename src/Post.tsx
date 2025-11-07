import React from "react";

export function Post({
  Title = "no title",
  Body = "this is a body",
}: {
  Title?: string;
  Body?: string;
}) {
  return (
    <div className="border-4 my-4 py-6 px-3 border-cyan-600 ">
      <h2 className="font-bold text-2xl p-3 flex justify-center ">{Title}</h2>
      <hr className="border-t-2" />
      <p className="p-3 flex justify-center">{Body}</p>
    </div>
  );
}
