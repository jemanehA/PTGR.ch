import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const TestPaypal = () => {
  // PayPal configuration options
  const initialOptions = {
    "client-id": "EHOunktnfCoRKICZ7ZZobzTFkRczm-h8hG8DVBejvkgE7u7vDHr5wOVDltwoWptew7oO-6ohvG8zlhtG", // Replace with your PayPal client ID
    currency: "CHF", // Currency code
    intent: "capture", // Payment intent
  };

  // Function to log transaction details to the API
  const logTransaction = async (details) => {
    try {
      // Send the transaction details to the API
      const response = await fetch("https://email.ptgr-test.com/log_transaction.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details), // Send the PayPal response as JSON
      });

      // Check if the request was successful
      if (response.ok) {
        console.log("Transaction logged successfully");
      } else {
        console.error("Failed to log transaction");
      }
    } catch (error) {
      console.error("Error logging transaction:", error);
    }
  };

  // Function to test the API call
  const testApiCall = async () => {
    const testData = {
      transaction_id: "test_12345",
      payer: {
        name: {
          given_name: "Test",
          surname: "User",
        },
        email: "test.user@example.com",
      },
      amount: {
        value: "1.00",
        currency: "CHF",
      },
      status: "completed",
    };

    try {
      const response = await fetch("https://email.ptgr-test.com/log_transaction.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(testData),
      });

      if (response.ok) {
        alert("Test API call successful! Check the log.txt file.");
      } else {
        alert("Test API call failed. Check the console for details.");
      }
    } catch (error) {
      console.error("Error during test API call:", error);
      alert("An error occurred during the test API call.");
    }
  };

  return (
    <div style={{marginTop:'300px'}}>
      <h1>Pay with PayPal</h1>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          createOrder={(data, actions) => {
            // Create a PayPal order
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "1.00", // Set the amount you want to charge
                    currency_code: "CHF", // Currency code
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            // Capture the transaction after approval
            return actions.order.capture().then((details) => {
              // Show a success message to the user
              alert(`Transaction completed by ${details.payer.name.given_name}`);

              // Log the transaction details to the API
              logTransaction(details);
            });
          }}
          onError={(error) => {
            // Handle errors
            console.error("PayPal error:", error);
            alert("An error occurred during the payment process. Please try again.");
          }}
        />
      </PayPalScriptProvider>

      {/* Add a button to test the API call */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={testApiCall} style={{ padding: "10px 20px", fontSize: "16px" }}>
          Test API Call
        </button>
      </div>
    </div>
  );
};

export default TestPaypal;