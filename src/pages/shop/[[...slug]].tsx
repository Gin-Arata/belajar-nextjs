import { useRouter } from "next/router";

const ShopDetailsPage = () => {
  const { query } = useRouter();

  return (
    <div>
      <h1>Shop Details Page</h1>
      <h2>Product: {query.slug ? query.slug[0] + " - " + query.slug[1] : ""}</h2>
    </div>
  );
};

export default ShopDetailsPage;
