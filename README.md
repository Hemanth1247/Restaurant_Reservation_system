# **Restaurant Reservation System**  

This is a **React-based Restaurant Reservation System** that allows customers to book tables, track available seats, and manage check-in/check-out seamlessly.  

## **Features**  

- **Table Booking:** Customers can enter their name, phone number, and guest count to reserve a table.  
- **Seats Management:** The system updates the available seats dynamically based on reservations.  
- **Live Reservation Display:** Shows all active reservations with customer details.  
- **Check-out Functionality:** Updates the available seats when a customer checks out.  
- **Delete Reservation:** Allows removal of a reservation while adjusting seat count accordingly.  
- **Guest Limit Validation:** Prevents overbooking by ensuring guest count does not exceed available seats.  

## **Usage**  

- Customers enter their details and book a table.  
- The system decreases the available seats based on the guest count.  
- Reservations are displayed in a table with check-in time and checkout options.  
- Clicking "Checkout" logs the checkout time and updates available seats.  
- Reservations can be deleted, adjusting seat availability accordingly.  

This application is built using **React.js** with a focus on state management and dynamic UI updates. No backend is used.
