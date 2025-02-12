import { FaPlus } from "react-icons/fa6";

const AddTaskBtn = () => {
  return (
    <div className="absolute bottom-2 right-8 bg-blue-900 p-4 rounded-full shadow-md hover:bg-blue-700 cursor-pointer">
      <FaPlus className="text-white"/>
    </div>
  );
};

export default AddTaskBtn;
