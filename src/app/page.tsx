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
      <footer className="fixed bottom-0 left-1/2 w-fit px-4 bg-transparent -translate-x-1/2 text-center shadow-md rounded-lg">
        <h1>
          All Rights reserved to{" "}
          <Link href="https://www.linkedin.com/in/abanoob-meseha" className="text-blue-950 font-bold">
            @Abanoub Meseha
          </Link>{" "}
          2025
        </h1>
      </footer>
    </div>
  );
}
