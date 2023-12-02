import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";

import { db } from "../../firebase";

const Transaction = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [walletAddressError, setWalletAddressError] = useState("");
  const [amount, setAmount] = useState("");
  const [amountError, setAmountError] = useState("");

  // Function to validate the wallet address format
  const validateWalletAddress = (address) => {
    const regex = /^0x[a-fA-F0-9]{4}$/;
    return regex.test(address);
  };

  // Function to validate the amount format
  const validateAmount = (value) => {
    const parsedValue = parseFloat(value);
    return !isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 10000;
  };

  // Event handler for input blur (when user clicks outside the input)
  const handleBlur = () => {
    // Check if wallet address is empty
    if (walletAddress.trim() === "") {
      setWalletAddressError("Wallet address field cannot be empty");
    }
    // Check if wallet address is valid
    else if (!validateWalletAddress(walletAddress)) {
      setWalletAddressError("Invalid wallet address");
    } else {
      setWalletAddressError(""); // Clear error if no issues
    }

    // Check if amount is empty
    if (amount.trim() === "") {
      setAmountError("Amount field cannot be empty");
    }
    // Check if amount is valid
    else if (!validateAmount(amount)) {
      setAmountError("Invalid amount. Must be between 0 and 10,000");
    } else {
      setAmountError(""); // Clear error if no issues
    }
  };

  // Event handler for form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate wallet address
    const isWalletAddressValid =
      walletAddress.trim() !== "" && validateWalletAddress(walletAddress);
    setWalletAddressError(!isWalletAddressValid);

    // Validate amount
    const isAmountValid = amount.trim() !== "" && validateAmount(amount);
    setAmountError(!isAmountValid);

    if (isWalletAddressValid && isAmountValid) {
      try {
        // Create a new document in the "transactions" collection
        const transactionRef = await addDoc(collection(db, "transactions"), {
          walletAddress,
          amount: parseFloat(amount),
        });

        console.log("Document written with ID: ", transactionRef.id);

        // Perform any additional actions after successful submission
        setWalletAddress("");
        setAmount("");
        setWalletAddressError(false);
        setAmountError(false);
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };
  return (
    <div className="flex flex-col max-w-md mx-auto h-screen justify-center items-center overflow-hidden">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label htmlFor="walletAddress" className="block mb-2">
            Wallet Address
          </label>
          <input
            id="walletAddress"
            type="text"
            className={`w-full border ${
              walletAddressError ? "border-red-500" : ""
            } rounded px-3 py-2 focus:outline-none focus:border-blue-500`}
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            onBlur={handleBlur}
            required
          />
          {walletAddressError && (
            <p className="text-red-500">{walletAddressError}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="block mb-2">
            Amount
          </label>
          <input
            id="amount"
            type="number"
            className={`w-full border ${
              amountError ? "border-red-500" : ""
            } rounded px-3 py-2 focus:outline-none focus:border-blue-500`}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            onBlur={handleBlur}
            required
          />
          {amountError && <p className="text-red-500">{amountError}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Transaction;
