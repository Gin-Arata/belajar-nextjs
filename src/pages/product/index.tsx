import { fetcher } from "@/lib/swr/fetcher";
import ProductView from "@/views/Product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  });

  const { data, isLoading } = useSWR("/api/products", fetcher);

  return (
    <div className="h-screen">
      <ProductView products={isLoading ? [] : data.products} />
    </div>
  );
};

export default ProductPage;
