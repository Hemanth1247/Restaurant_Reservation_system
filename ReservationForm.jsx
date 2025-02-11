import React, { useState } from "react";

function ReservationForm({ onReserve }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !guests || guests <= 0) {
      alert("Please enter valid details.");
      return;
    }
    onReserve(name, phone, parseInt(guests));
    setName("");
    setPhone("");
    setGuests("");
  };

  return (
    <form onSubmit={handleSubmit} className="reservation-form">
      <input
        type="text"
        placeholder="Customer Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Guest Count"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />
      <button type="submit">Reserve</button>
    </form>
  );
}

export default ReservationForm;
