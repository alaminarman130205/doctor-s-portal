import React from "react";
import Banner from "../Banner/Banner";
import Exceptional from "../Exceptional/Exceptional";
import InfoCarts from "../InfoCarts/InfoCarts";
import MakeAppintment from "../MakeAppointment/MakeAppintment";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCarts></InfoCarts>
      <Services></Services>
      <Exceptional></Exceptional>
      <MakeAppintment></MakeAppintment>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
