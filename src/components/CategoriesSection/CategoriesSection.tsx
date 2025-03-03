import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import categories from "@/staticData/categories";
import { Category } from "@/types";
import Button from "../Button/Button";
import { LuShoppingBag } from "react-icons/lu";

const CategoriesSection = () => {
  return (
    <div className="mt-2 md:w-[80%] mx-auto w-[90%]">
      <SectionTitle>Categories</SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {/* primary category */}
        <PrimaryCategoryCard
          category={{
            name: "Shoes",
            img: "/products/nike2.png",
            imgTitle: "Sneakers",
          }}
        />
        {/* other categories */}
        {categories.map((category, index) => {
          return <CategoryCard key={index} category={category} />;
        })}
      </div>
    </div>
  );
};

export default CategoriesSection;

const CategoryCard = ({
  category,
  primary,
}: {
  category: Category;
  primary?: boolean;
}) => {
  return (
    <div className="bg-white rounded-xl p-2 flex flex-col items-center justify-between duration-400 transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer">
      <p className="text-blue-950 font-bold">{category.name}</p>
      <div className="flex flex-col items-center gap-4">
        <Image src={category.img} alt="category img" width={150} height={100} />
        <h1 className="mt-2">{category.imgTitle}</h1>
      </div>
    </div>
  );
};

const PrimaryCategoryCard = ({ category }: { category: Category }) => {
  return (
    <div className="px-8 bg-white col-span-2 rounded-xl p-2 flex flex-row items-center justify-between duration-400 transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer">
      <div>
        <p className="text-blue-950 font-bold mb-5">{category.name}</p>
        <h1 className="text-4xl font-bold mb-4">{category.imgTitle}</h1>
        <Button type="primary">
          {" "}
          Shop Now <LuShoppingBag />{" "}
        </Button>
      </div>
      <Image src={category.img} className="md:w-[300]" alt="category img" width={200} height={200} />
    </div>
  );
};
