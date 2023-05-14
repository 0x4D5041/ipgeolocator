import { useState } from "react";

import { validateIp } from "@/utils";

const Input = ({ setIpAddress, setErrorMessage, setShowError }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateIp(value)) {
      setIpAddress(value);
    } else {
      setErrorMessage("Invalid IP Address format");
      setShowError(true);
    }
  };

  return (
    <div>
      <div className="relative">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            id="default-search"
            className="block w-96 p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="192.168.0.1"
            required
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Input;
