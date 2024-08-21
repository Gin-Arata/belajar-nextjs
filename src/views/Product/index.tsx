import { ProductType } from "@/types/ProductType";
import Link from "next/link";
import SkeletonCardProduct from "./skeleton";


const ProductView = ({ products }: { products: ProductType[] }) => {
  const skeletonArray = Array.from({ length: 6 });

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-4">Product</h1>
      <div className="grid grid-cols-3 gap-2 px-10">
        {products.length > 0 ? (
          <>
            {products.map((product: ProductType) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <div className="w-96">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="flex flex-col mt-2">
                  <p className="text-lg font-bold">{product.name}</p>
                  <p className="text-gray-600">{product.category}</p>
                  <p className="font-semibold mt-2">
                    {product.price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </p>
                </div>
              </Link>
            ))}
          </>
        ) : (
          <>
            {skeletonArray.map((_, index) => (
              <SkeletonCardProduct key={index}/>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductView;
