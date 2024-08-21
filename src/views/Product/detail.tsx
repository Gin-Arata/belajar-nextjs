import { ProductType } from "@/types/ProductType";
import SkeletonCardProduct from "./skeleton";

const DetailProductView = ({ product }: { product: ProductType }) => {
  console.log(product);

  return (
    <div>
      <h1>Detail Product View</h1>
      {product && product.price ? (
        <div>
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
        </div>
      ) : (
        <SkeletonCardProduct />
      )}
    </div>
  );
};

export default DetailProductView;
