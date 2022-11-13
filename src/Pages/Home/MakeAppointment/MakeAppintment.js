import React from "react";
import doctor from "../../../assets/images/doctor.png";
import Appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const MakeAppintment = () => {
  return (
    <section
      className="mt-16"
      style={{
        background: `url(${Appointment})`,
      }}
    >
      <div className="hero mt-5">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="max-w-sm  -mt-32 rounded-lg shadow-2xl"
            alt="none"
          />
          <div className="text-white">
            <h4 className="text-lg text-primary font-bold">Appointment</h4>
            <h1 className="text-4xl font-bold">Make an Appointment today</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppintment;
