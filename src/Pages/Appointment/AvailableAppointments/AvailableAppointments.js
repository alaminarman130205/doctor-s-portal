import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppointOption from "./AppointOption";

const AvailableAppointments = ({ selectedDate }) => {
  const [appointmentOption, setAppointmentOption] = useState([]);

  const [treatement, setTreatment] = useState(null);

  useEffect(() => {
    fetch("Services.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOption(data));
  }, []);
  return (
    <section className="mt-16">
      <h1 className="text-center text-secondary font-bold">
        Available Appointments on {format(selectedDate, "PP")}
      </h1>
      <div className=" grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {appointmentOption.map((option) => (
          <AppointOption
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          ></AppointOption>
        ))}
      </div>
      {treatement && (
        <BookingModal
          selectedDate={selectedDate}
          treatement={treatement}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;
