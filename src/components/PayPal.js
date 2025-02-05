import React, { useEffect, useRef } from 'react';

export default function PayPal() {
  const paypalRef = useRef(null);

  useEffect(() => {
    // Ensure PayPal button is only initialized once and not on every render
    if (!window.paypal) return; // Avoid errors if PayPal isn't loaded

    if (paypalRef.current) {
      // Initialize PayPal button only if it's not already initialized
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: 'Certified Crypto Program',
                amount: {
                  value: '1.00' // Adjust to your actual course price
                }
              }
            ]
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            alert('Transaction completed by ' + details.payer.name.given_name);
          });
        }
      }).render(paypalRef.current); // Render the PayPal button inside the div
    }

    // Cleanup PayPal button to avoid double render when modal is closed and reopened
    return () => {
      if (paypalRef.current) {
        paypalRef.current.innerHTML = ''; // Clear the PayPal button if modal is closed
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      {/* Render PayPal button in this div */}
      <div ref={paypalRef}></div>
    </div>
  );
}
