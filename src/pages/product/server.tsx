import { ProductType } from "@/types/ProductType";
import ProductView from "@/views/Product";

const ProductPage = (props: {products: ProductType[]}) => {
  const { products } = props;

  return (
    <div className="h-screen">
      <ProductView products={products} />
    </div>
  );
};

// This function gets called at build time that will fetch the data from the API but with server sided rendering
export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const response = await res.json();

  return {
    props: {
      products: response.products,
    },
  };
}

export default ProductPage;
