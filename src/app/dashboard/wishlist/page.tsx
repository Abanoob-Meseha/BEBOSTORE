import FilterSection from "@/components/FilterSection/FilterSection";
import ProductCard from "@/components/ProductCard/ProductCard";
import products from "@/staticData/products";

const Wishlist = () => {
  return (
    <div className="mt-4">
      <FilterSection />
      {/* products Container Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 md:w-[80%] w-[95%] p-2 gap-4 mx-auto mt-2">
        {products.map((product, index) => {
          return <ProductCard product={product} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Wishlist;
