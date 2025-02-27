import Header from "../components/Header/Header";
import TasksContainer from "../components/TasksContainer/TasksContainer";
import AddTaskBtn from "../components/AddTaskBtn/AddTaskBtn";
import { tasksData } from "../staticData/tasksData";
import Banner from "@/components/Banner/Banner";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import ReviewSection from "@/components/Slider/Slider";
import Modal from "@/components/Modal/Modal";
import Cart from "@/components/Cart/Cart";
import reviews from "@/staticData/reviews" ;
import Slider from "@/components/Slider/Slider";

export default function Home() {
  return (
    <div>
      <Modal/>
      <Cart />
      <Banner />
      <FeatureSection/>
      <h1 className="text-2xl text-blue-950 font-bold mt-20 text-center">Our Clients Reviews</h1>
      <Slider itemsList={reviews} intervalDuration={2000}/>
    </div>
  );
}
