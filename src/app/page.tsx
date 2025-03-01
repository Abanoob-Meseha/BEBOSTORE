import Banner from "@/components/Banner/Banner";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import Modal from "@/components/Modal/Modal";
import CartBtn from "@/components/CartBtn/CartBtn";
import reviews from "@/staticData/reviews" ;
import Slider from "@/components/Slider/Slider";
export default function Home() {
  return (
    <div>
      <Modal/>
      <CartBtn />
      <Banner />
      <FeatureSection/>
      <h1 className="text-2xl text-blue-950 font-bold mt-20 text-center">Our Clients Reviews</h1>
      <Slider itemsList={reviews} intervalDuration={2000}/>
    </div>
  );
}
