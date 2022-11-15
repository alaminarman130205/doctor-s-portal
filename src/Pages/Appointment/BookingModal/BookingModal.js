import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatement, selectedDate, setTreatment }) => {
  const { name, slots } = treatement;
  const date = format(selectedDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const slot = form.slot.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      treatment: name,
      patientName: name,
      phone,
      email,
      slot,
    };

    //TODO:send data to the server;

    console.log(booking);
    setTreatment(null);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-6"
          >
            <input
              name="date"
              type="text"
              value={date}
              className="input w-full input-bordered "
            />
            <select className="select select-info w-full" name="slot">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="input w-full input-bordered "
            />
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              className="input w-full input-bordered "
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input w-full input-bordered "
            />
            <br />
            <input
              className="btn btn-info w-full "
              type="submit"
              value="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
