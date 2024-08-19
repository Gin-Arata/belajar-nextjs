import { ProductType } from "@/types/ProductType";
import ProductView from "@/views/Product";

// Penjelasan static site generation
/* Jadi pada static site generation ini data yang baru di upload tidak akan pernah tampil ketika server jalan
    dan akan tampil jika melakukan build ulang. Fungsi static site generation ini adalah jika kita melakukan
    penyimpanan data pada database dan ingin dirender bisa menggunakan static site generation
*/

const ProductPage = ({ products }: { products: ProductType[] }) => {
  return (
    <div className="h-screen">
      <ProductView products={products} />
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const response = await res.json();

  return {
    props: {
      products: response.products,
    },
  };
}

export default ProductPage;
