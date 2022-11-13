import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "lorem ipsum is simply dummy data to import from online and use in your website automatically buddies",
      img: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "lorem ipsum is simply dummy data to import from online and use in your website automatically buddies",
      img: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "lorem ipsum is simply dummy data to import from online and use in your website automatically buddies",
      img: whitening,
    },
  ];

  return (
    <div>
      <div className="mt-16 text-center">
        <h3 className="font-4xl font-bold text-primary uppercase">
          Our Services
        </h3>
        <h2 className="font-5xl text-black ">Services we provide</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {serviceData.map((serv) => (
          <Service key={serv.id} serv={serv}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
