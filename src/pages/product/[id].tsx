import { fetcher } from "@/lib/swr/fetcher";
import { ProductType } from "@/types/ProductType";
import DetailProductView from "@/views/Product/detail";
import SkeletonCardProduct from "@/views/Product/skeleton";
import { useRouter } from "next/router";
import useSWR from "swr";

const DetailProductPage = ({ product }: {product : ProductType}) => {
    const { query } = useRouter();

    // const { data, error, isLoading } = useSWR(`/api/product/${query.id}`, fetcher);

  return (
    <div>
      {/* Client Side Rendering */}
      {/* <DetailProductView product={isLoading ? [] : data.products} /> */}

      {/* Server Side Rendering */}
      <DetailProductView product={product} />
    </div>
  );
};


export async function getServerSideProps({ params }: { params: any }) {
  const res = await fetch(`http://localhost:3000/api/products/${params.id}`);
  const response = await res.json();

  return {
    props: {
      product: response.products,
    },
  };
}

export default DetailProductPage;
