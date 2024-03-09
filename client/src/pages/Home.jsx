import Hero from "../components/Hero";
import BookRide from "../components/BookRide";
import RentSteps from "../components/RentSteps";
import Vehicles from "../components/Vehicles";
import Offer from "../components/Offer";
import Testimonials from "../components/Testimonials";
import Banner from "../components/Banner";
import Faq from "../components/Faq";

const Home = () => {
  return (
    <>
      <Hero />
      <BookRide />
      <RentSteps />
      <Vehicles />
      <Banner
        title="Save your cash and never crash !"
        textColor="Better"
        description="than competitors, we have things that they do not"
      />
      <Offer />
      <Testimonials />
      <Faq />
    </>
  );
};
export default Home;
