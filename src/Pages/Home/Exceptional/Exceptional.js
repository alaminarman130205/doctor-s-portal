import React from "react";
import baby from "../../../assets/images/dribbble_1.gif";
import "./Exceptional.css";

const Exceptional = () => {
  return (
    <div>
      <div className="hero  mt-16">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            alt="pic"
            src={baby}
            className="max-w-lg rounded-lg shadow-2xl babyPic"
          />
          <div>
            <h1 className="text-5xl w-3/2 font-bold">
              Exceptional Dental Care, On your terms
            </h1>
            <p className="py-6">
              it's a long establishment fact that can't be a reader will be
              distracted by the readable content of the page when looking at
              it's layout. The point of using lorem ipsum that is has a more or
              less normal distribution of letter and some other part's sir ...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exceptional;
