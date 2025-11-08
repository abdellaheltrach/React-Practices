import React from "react";

function Button({ children }: { children?: React.ReactNode }) {
  return (
    <div>
      <button
        className="bg-purple-600 text-white w-28 font-semibold py-2 my-4 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300
      flex flex-col items-center"
      >
        {children ? children : "Button"}
      </button>
    </div>
  );
}

const buttonArr: {
  key?: number;
  Children?: React.ReactNode;
  Title?: string;
}[] = [
  {
    key: 1,
    Title: "Woow",
    Children: (
      <div>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn.naturettl.com/wp-content/uploads/2023/06/29133512/macro-flower-photography-8-800x593.jpg"
            alt="flower"
            width={100}
            height={75}
          />
        </a>
      </div>
    ),
  },
  {
    key: 2,
    Title: "Amazing",
    Children: (
      <div>
        <a href="https://example.org" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
            alt="cat"
            width={100}
            height={75}
          />
        </a>
      </div>
    ),
  },
];

const ButtonList = buttonArr.map((btn, index) => {
  return (
    <Button key={btn.key ?? index}>
      <h3>{btn.Title}</h3>
      {btn.Children}
    </Button>
  );
});

export function Side() {
  return (
    <div className="border-4 my-4 py-6 border-cyan-600 p-4">
      <div className="flex flex-wrap gap-3">{ButtonList}</div>
    </div>
  );
}
