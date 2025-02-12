import Header from "../components/Header/Header";
import TasksContainer from "../components/TasksContainer/TasksContainer";
import AddTaskBtn from "../components/AddTaskBtn/AddTaskBtn";
import { TaskType } from "@/types";
import { tasksData } from "../../public/tasksData";

export default function Home() {
  return (
      <div className="container relative bg-white w-1/2 mx-auto mt-20 border-slate-200 rounded-lg">
        <Header/>
        <TasksContainer tasks={tasksData}/>
        <AddTaskBtn/>
      </div>
  );
}
