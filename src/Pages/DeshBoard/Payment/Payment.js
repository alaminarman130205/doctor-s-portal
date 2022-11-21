import React from "react";
import { useLoaderData } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const booking = useLoaderData();
  const { treatment, price, appointmentDate, slot } = booking;

  return (
    <div>
      <h1 className="text-3xl">
        payment for <span className="text-orange-400">{treatment}</span>{" "}
      </h1>
      <p className="mt-5">
        Please pay <strong>${price}</strong> for your appointment{" "}
        <strong>{appointmentDate}</strong> at <strong>{slot}</strong>
      </p>
      <div className="w-96 my-6">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
