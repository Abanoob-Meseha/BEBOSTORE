import Header from "../components/Header/Header";
import TasksContainer from "../components/TasksContainer/TasksContainer";
import AddTaskBtn from "../components/AddTaskBtn/AddTaskBtn";
import { tasksData } from "../../public/tasksData";
import Link from "next/link";
import Banner from "@/components/Banner/Banner";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="relative bg-white w-1/2 mx-auto mt-20 border-slate-200 rounded-lg h-96 pb-20 shadow-lg">
        <Header />
        <TasksContainer tasks={tasksData} />
        <AddTaskBtn />
      </div>
      <AddTaskBtn />
    </div>
  );
}
