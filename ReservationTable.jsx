import React from "react";

function ReservationTable({ reservations, onCheckout, onDelete }) {
  return (
    <table className="reservation-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Guest Count</th>
          <th>Check-in Time</th>
          <th>Checkout Time</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {reservations.map((res) => (
          <tr key={res.id}>
            <td>{res.name}</td>
            <td>{res.phone}</td>
            <td>{res.guests}</td>
            <td>{res.checkIn}</td>
            <td>{res.checkOut || "Pending"}</td>
            <td>
              {!res.checkOut && (
                <button className="checkout" onClick={() => onCheckout(res.id)}>Checkout</button>
              )}
              <button className="delete" onClick={() => onDelete(res.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ReservationTable;
