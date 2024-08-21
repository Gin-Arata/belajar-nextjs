const SkeletonCardProduct = () => {
  return (
    <>
      <div className="w-96">
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
  );
};

export default SkeletonCardProduct;
