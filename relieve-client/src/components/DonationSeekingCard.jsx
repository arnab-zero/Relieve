import React, { useEffect, useState } from "react";

const DonationSeekingCard = ({ fundCall }) => {
  const {
    title,
    eventId,
    receivedAmount: initialReceivedAmount,
    targetAmount,
    description,
    createdAt,
    deadline,
    fundCallId, // Assuming this is passed in fundCall for the PUT request
  } = fundCall;

  const [eventName, setEventName] = useState("default");
  const [showDonationFields, setShowDonationFields] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");
  const [errors, setErrors] = useState({});
  const [updatedReceivedAmount, setUpdatedReceivedAmount] = useState(
    initialReceivedAmount
  ); // Track updated received amount

  useEffect(() => {
    fetch(`http://localhost:8080/events/${eventId}`)
      .then((res) => res.json())
      .then((data) => {
        setEventName(data.eventName);
      })
      .catch((error) => console.error("Error fetching event:", error));
  }, [eventId]);

  const percentageCollected = Number(
    (updatedReceivedAmount / targetAmount) * 100
  );

  const handleDonateClick = () => {
    setShowDonationFields((prev) => !prev);
    setErrors({});
  };

  const handleCancelClick = () => {
    setShowDonationFields(false);
    setPaymentMethod("");
    setPaymentAmount("");
    setErrors({});
  };

  const validateFields = () => {
    const newErrors = {};
    if (!paymentMethod) newErrors.paymentMethod = "Payment method is required.";
    if (!paymentAmount || paymentAmount <= 0) {
      newErrors.paymentAmount = "Please enter a valid payment amount.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitDonation = () => {
    if (validateFields()) {
      const newReceivedAmount =
        Number(updatedReceivedAmount) + Number(paymentAmount); // Update the amount
      setUpdatedReceivedAmount(newReceivedAmount);

      // Prepare the updated fundCall object
      const updatedFundCall = {
        ...fundCall,
        receivedAmount: newReceivedAmount,
      };

      // Send a PUT request to update the fund call
      fetch(`http://localhost:8080/fund-call/${fundCallId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFundCall),
      })
        .then((response) => {
          if (response.ok) {
            console.log("Fund call updated successfully");
            // Reset donation fields and hide form
            setShowDonationFields(false);
            setPaymentMethod("");
            setPaymentAmount("");
            setErrors({});
          } else {
            console.error("Failed to update fund call");
          }
        })
        .catch((error) => console.error("Error updating fund call:", error));
    }
  };

  return (
    <div className="border-2 border-[#86bbd8] w-full mb-4 rounded overflow-hidden shadow-lg p-8">
      <div className="text-sm mb-4 font-normal">Posted at {createdAt}</div>
      <div className="mb-4">
        <div className="text-3xl font-semibold mb-2 items-center">
          <span>{title} </span>
          <span className="text-xs bg-[#1f8d0c] text-white px-2 py-1 rounded-full">
            Verified
          </span>
        </div>
        <h3 className="text-lg text-gray-700 mb-2">{eventName}</h3>

        <p className="text-base text-gray-600 mb-2">{description}</p>
      </div>

      <h3 className="text-lg text-gray-900 mb-2">
        Collected <span className="font-bold">{updatedReceivedAmount}</span>/
        {targetAmount} Tk
      </h3>

      <div className="">
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full ${
              percentageCollected < 80 ? "bg-yellow-500" : "bg-green-500"
            }`}
            style={{ width: `${percentageCollected}%` }}
          ></div>
        </div>
        <p className="text-right text-sm text-gray-500 mt-1">
          {percentageCollected.toFixed(2)}% collected
        </p>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={handleDonateClick}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
            showDonationFields ? "hidden" : ""
          }`}
        >
          Donate
        </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Share Link
        </button>
      </div>

      {/* Conditionally render donation fields */}
      {showDonationFields && (
        <div className="mt-4">
          <div>
            <label
              htmlFor="paymentMethod"
              className="block text-sm font-medium"
            >
              Payment Method
            </label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className={`mt-1 block w-full rounded-md border-black border-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                errors.paymentMethod ? "border-red-500" : ""
              }`}
            >
              <option value="">Select a payment method</option>
              <option value="Bkash">Bkash</option>
              <option value="Rocket">Rocket</option>
              <option value="Nagad">Nagad</option>
              <option value="Upay">Upay</option>
              <option value="Visa">Visa</option>
            </select>
            {errors.paymentMethod && (
              <p className="text-red-500 text-sm">{errors.paymentMethod}</p>
            )}
          </div>

          <div className="mt-4">
            <label
              htmlFor="paymentAmount"
              className="block text-sm font-medium"
            >
              Payment Amount (BDT)
            </label>
            <input
              type="number"
              id="paymentAmount"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
              className={`mt-1 block w-full rounded-md border-black border-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-5 ${
                errors.paymentAmount ? "border-red-500" : ""
              }`}
            />
            {errors.paymentAmount && (
              <p className="text-red-500 text-sm">{errors.paymentAmount}</p>
            )}
          </div>

          <div className="flex justify-end space-x-2 mt-4">
            <button
              onClick={handleSubmitDonation}
              className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white font-bold rounded"
            >
              Submit
            </button>
            <button
              onClick={handleCancelClick}
              className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white font-bold rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationSeekingCard;
