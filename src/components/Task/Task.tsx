import { TaskType } from "@/types";
import TaskStatus from "../TaskStatus/TaskStatus";
import { TbCalendarDue } from "react-icons/tb";
import { IoPersonOutline } from "react-icons/io5";

const Task = ({ title, description, due, assignedTo }: TaskType) => {
  return (
    <div className="container border-blue-900 mb-2 border-b-2 pb-4">
      <div className="flex w-full items-center gap-4">
        <h1 className="font-bold text-lg basis-4/5 text-blue-950">{title}</h1>
        <TaskStatus status="Done"/>
      </div>
      <p className="italic">{description}</p>
      <div className="flex flex-row items-center gap-4 text-blue-950 text-sm">
        <span className="flex items-center gap-2"><TbCalendarDue/> {due}</span>
        <span className="flex items-center gap-2"><IoPersonOutline/> {assignedTo}</span>
      </div>
    </div>
  );
};

export default Task;
