import { format } from "date-fns";
import React from "react";

const AvailableAppointments = ({ selectedDate }) => {
  return (
    <section className="mt-16">
      <h1 className="text-center text-secondary font-bold">
        Available Appointments on {format(selectedDate, "PP")}
      </h1>
    </section>
  );
};

export default AvailableAppointments;
