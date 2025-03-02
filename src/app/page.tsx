import Banner from "@/components/Banner/Banner";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import Modal from "@/components/Modal/Modal";
import CartBtn from "@/components/CartBtn/CartBtn";
import reviews from "@/staticData/reviews";
import Slider from "@/components/Slider/Slider";
import CategoriesSection from "@/components/CategoriesSection/CategoriesSection";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
export default function Home() {
  return (
    <div>
      <Banner />
      <CategoriesSection />
      <FeatureSection />
      <SectionTitle>Our Clients Reviews</SectionTitle>
      <Slider itemsList={reviews} intervalDuration={2000} />
    </div>
  );
}
