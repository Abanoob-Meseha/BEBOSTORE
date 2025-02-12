import { TaskType } from "@/types";
const Task = ({title ,  description , due , assignedTo}: TaskType) => {
  return (
    <div className="container border-blue-900">
      <h1 className="font-bold ">{title}</h1>
      <p>{description}</p>
      <div className="flex flex-row items-center space-x-2">
        <span>{due}</span>
        <span>{assignedTo}</span>
      </div>
    </div>
  );
};

export default Task;
