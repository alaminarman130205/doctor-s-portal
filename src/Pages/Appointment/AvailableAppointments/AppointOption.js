import React from "react";

const AppointOption = ({ option, setTreatment }) => {
  const { name, slots } = option;

  return (
    <div>
      <div className="card shadow-xl">
        <div className="card-body text-center mt-10">
          <h2 className="card-title text-secondary font-bold font-2xl">
            {name}
          </h2>
          <p>{slots.length > 0 ? slots[0] : "try another day"}</p>
          <p>
            {slots.length} {slots.length > 1 ? "spaces" : "space"}
          </p>
          <div className="card-actions justify-center">
            <label
              disabled={slots.length === 0}
              onClick={() => setTreatment(option)}
              htmlFor="booking-modal"
              className="btn btn-primary text-white"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointOption;
