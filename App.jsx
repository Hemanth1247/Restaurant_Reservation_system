import React, { useState } from "react";
import ReservationTable from "./ReservationTable";
import "./styles.css";

function App() {
  const [reservations, setReservations] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("");
  const [seatsLeft, setSeatsLeft] = useState(20); // Initial available seats

  const handleReservation = () => {
    const guestCount = parseInt(guests);

    if (!name || !phone || !guestCount) {
      alert("Please fill all fields!");
      return;
    }

    if (guestCount > seatsLeft) {
      alert("Not enough seats available!");
      return;
    }

    const newReservation = {
      id: Date.now(),
      name,
      phone,
      guests: guestCount,
      checkIn: new Date().toLocaleTimeString(),
      checkOut: null,
    };

    setReservations([...reservations, newReservation]);
    setSeatsLeft(seatsLeft - guestCount); // Deduct booked seats

    // Clear form
    setName("");
    setPhone("");
    setGuests("");
  };

  const handleCheckout = (id) => {
    setReservations(
      reservations.map((res) =>
        res.id === id ? { ...res, checkOut: new Date().toLocaleTimeString() } : res
      )
    );

    // Increase available seats after checkout
    const checkedOutRes = reservations.find((res) => res.id === id);
    if (checkedOutRes) {
      setSeatsLeft(seatsLeft + checkedOutRes.guests);
    }
  };

  const handleDelete = (id) => {
    const deletedRes = reservations.find((res) => res.id === id);

    if (deletedRes) {
      if (!deletedRes.checkOut) {
        // If customer hasn't checked out, return their seats
        setSeatsLeft(seatsLeft + deletedRes.guests);
      }
      setReservations(reservations.filter((res) => res.id !== id));
    }
  };

  return (
    <div className="container">
      <h1>Restaurant Reservation System</h1>
      <h2>Seats Left: {seatsLeft}</h2>
      <div className="reservation-form">
        <input
          type="text"
          placeholder="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="number"
          placeholder="Guest Count"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
        <button onClick={handleReservation}>Book Table</button>
      </div>
      <ReservationTable
        reservations={reservations}
        onCheckout={handleCheckout}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
