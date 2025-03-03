import { CiSearch } from "react-icons/ci";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

const FilterSection = () => {
  return (
    <div className="w-full bg-white text-center h-16 py-2 flex items-center px-10 justify-between">
        <Searchbar />
        <HiOutlineAdjustmentsHorizontal size={35}/>
    </div>
  )
}

export default FilterSection

const Searchbar = ()=>{
    return(
        <div className="md:w-[30%] w-[70%] bg-slate-200 shadow-lg rounded-lg flex gap-1 px-2 py-1 items-center">
            <input className="w-full p-1 border-none pl-2 bg-slate-200" type="search" id="productName" name="ProductName" placeholder="Product name .."/>
            <CiSearch size={35}/>
        </div>
    )
}