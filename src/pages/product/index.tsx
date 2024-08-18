import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = {
  id: number;
  name: string;
  price: number;
  size: string;
};

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [products, setProducts] = useState([]);
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  });

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <div>
      <h1>Product Page</h1>
      {products.map((product: ProductType) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <p>{product.size}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
