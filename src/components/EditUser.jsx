import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const { state: user } = useLocation();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);

  const handleUpdate = async () => {
    try {
      await axios.put(`https://reqres.in/api/users/${user.id}`, { first_name: firstName, last_name: lastName, email });
      navigate("/users");
    } catch (error) {
      console.error("Failed to update user.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h2 className="text-xl font-semibold text-center text-gray-700">Edit User</h2>
        <input value={firstName} onChange={(e) => setFirstName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:ring-2 focus:ring-blue-400" />
        <input value={lastName} onChange={(e) => setLastName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:ring-2 focus:ring-blue-400" />
        <input value={email} onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:ring-2 focus:ring-blue-400" />
        <button onClick={handleUpdate}
          className="w-full bg-green-500 text-white p-2 rounded-md mt-4 hover:bg-green-600 transition">Update</button>
      </div>
    </div>
  );
};

export default EditUser;
