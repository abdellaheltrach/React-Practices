import React, { useState } from "react";

export default function LoanForm() {
  interface ILoanRequest {
    FullName?: string;
    Phone?: string;
    Age?: number;
    isEmployee?: boolean;
    Salary?: number;
  }

  const [LoanRequest, SetLoanRequest] = useState<ILoanRequest>({
    isEmployee: false,
  });

  function HundleTextAndNumberChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value, type } = event.target;
    SetLoanRequest({
      ...LoanRequest,
      [name]: type === "number" ? Number(value) : value,
    });
  }
  function hundleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.checked;
    SetLoanRequest({ ...LoanRequest, isEmployee: value });
  }
  const [showPopup, setShowPopup] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const age = LoanRequest.Age ?? 0;
    const phone = LoanRequest.Phone ?? "";

    const phoneStr = String(phone).trim();
    const ageValid = age > 17 && age < 46;
    const phoneValid = phoneStr.length >= 10 && phoneStr.length <= 12;

    setSuccess(ageValid && phoneValid);
    setShowPopup(true);
  }

  return (
    <div className="bg-purple-700 text-white w-[400px] mx-auto mt-10 p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Requesting a Loan</h1>
      <hr className="border-gray-400 mb-4" />

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1">Full Name</label>
          <input
            type="text"
            name="FullName"
            value={LoanRequest.FullName}
            onChange={HundleTextAndNumberChange}
            required
            className="w-full border border-gray-300 text-black rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1">Phone Number</label>
          <input
            type="text"
            name="Phone"
            value={LoanRequest.Phone}
            onChange={HundleTextAndNumberChange}
            required
            className="w-full border border-gray-300 text-black rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1">Age</label>
          <input
            type="number"
            name="Age"
            value={LoanRequest.Age}
            onChange={HundleTextAndNumberChange}
            required
            className="w-full border border-gray-300 text-black rounded px-3 py-2"
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="isEmployee"
            checked={LoanRequest.isEmployee}
            onChange={hundleCheckboxChange}
          />
          <label>Are you an Employee?</label>
        </div>

        <div>
          <label className="block mb-1">Salary</label>
          <input
            type="number"
            name="Salary"
            value={LoanRequest.Salary}
            disabled={!LoanRequest.isEmployee}
            onChange={HundleTextAndNumberChange}
            className="w-full border border-gray-300 text-black rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className={`w-full py-2 rounded-lg font-semibold text-white transition-colors 
            ${
              !LoanRequest.Age || !LoanRequest.FullName || !LoanRequest.Phone
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          disabled={
            !LoanRequest.Age || !LoanRequest.FullName || !LoanRequest.Phone
          }
        >
          Submit
        </button>
      </form>
      {/* Popup */}
      {showPopup && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          onClick={() => setShowPopup(false)}
        >
          <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></div>
          <div className="bg-white p-6 rounded-lg shadow-lg z-10">
            <p
              className={`text-center font-semibold ${
                success ? "text-green-600" : "text-red-600"
              }`}
            >
              {success
                ? "Form submitted successfully!"
                : !(
                    LoanRequest.Age &&
                    LoanRequest.Age > 17 &&
                    LoanRequest.Age < 46
                  )
                ? "Submission failed: Age must be between 18 and 45."
                : !(
                    LoanRequest.Phone &&
                    LoanRequest.Phone.trim().length >= 10 &&
                    LoanRequest.Phone.trim().length <= 12
                  )
                ? "Phone number is not valid!"
                : ""}
            </p>
            {/* <button
              onClick={() => setShowPopup(false)}
              className="mt-4 w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
            >
              Close
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
}
