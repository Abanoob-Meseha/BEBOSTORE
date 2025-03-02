import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import categories from "@/staticData/categories";
import { Category } from "@/types";

const CategoriesSection = () => {
  return (
    <div className="mt-2 md:w-[80%] mx-auto w-[90%]">
      <SectionTitle>Categories</SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {/* primary category */}
        <CategoryCard category={categories[0]}/>
        {/* other categories */}
        {categories.map((category, index) => {
          return (
            <CategoryCard key={index} category={category}/>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesSection;

const CategoryCard = ({category} : {category : Category}) => {
  return (
    <div className="bg-white rounded-xl p-2 flex flex-col items-center gap-1">
      <p className="text-blue-950 font-bold">{category.name}</p>
      <Image src={category.img} alt="category img" width={100} height={100} />
      <h1>{category.imgTitle}</h1>
    </div>
  );
};
