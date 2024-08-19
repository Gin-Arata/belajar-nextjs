import { ProductType } from "@/types/ProductType";


const ProductView = ({ products }: { products: ProductType[] }) => {
  const skeletonArray = Array.from({ length: 6 });

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-4">Product</h1>
      <div className="grid grid-cols-3 gap-2 px-10">
        {products.length > 0 ? (
          <>
            {products.map((product: ProductType) => (
              <div key={product.id}>
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
            ))}
          </>
        ) : (
          <>
            {skeletonArray.map((_, index) => (
              <>
                <div className="w-96" key={index}>
                  <div className="w-full">
                    <div className="w-96 aspect-square bg-gray-300 animate-pulse"></div>
                    <div className="flex flex-col mt-2">
                      <p className="text-lg font-bold w-full h-6 bg-gray-300 animate-pulse"></p>
                      <p className="w-full h-4 bg-gray-300 animate-pulse mt-2"></p>
                      <p className="w-1/2 h-4 bg-gray-300 animate-pulse mt-2"></p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductView;
