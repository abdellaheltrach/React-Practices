import { useState } from "react";

interface Iproduct {
  id: number;
  name: string;
  count: number;
}

const initialProducts: Iproduct[] = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState<Iproduct[]>(initialProducts);

  function handleIncreaseClick(productId: number) {
    setProducts(
      products.map((p) => {
        return p.id === productId ? { ...p, count: p.count + 1 } : p;
      })
    );
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
        </li>
      ))}
    </ul>
  );
}
