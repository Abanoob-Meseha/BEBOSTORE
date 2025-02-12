import Image from "next/image";
import Header from "../components/Header/Header";
import TasksContainer from "../components/TasksContainer/TasksContainer";
import AddTaskBtn from "../components/AddTaskBtn/AddTaskBtn";
import { useState } from "react";
import { TaskType } from "@/types";

export default function Home() {
  const [tasks , setTasks] = useState<TaskType[]>([])
  return (
    <div>
      <div className="container bg-white w-1/2 h-3/4 mx-auto mt-20 p-4 border-slate-200 rounded-md">
        <Header/>
        <TasksContainer tasks={tasks}/>
        <AddTaskBtn/>
      </div>
    </div>
  );
}
