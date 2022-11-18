import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import AppointOption from "./AppointOption";

const AvailableAppointments = ({ selectedDate }) => {
  const [treatement, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");

  // use react query new style in js part
  const {
    data: appointmentOption = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentsOptions"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointmentsOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

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
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;
