import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=1").then((response) => {
      setUsers(response.data.data);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">User Directory</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="bg-white shadow-lg p-4 rounded-lg flex flex-col items-center transform transition duration-500 hover:scale-105">
            <img src={user.avatar} alt={user.first_name} className="rounded-full w-24 h-24 border-4 border-blue-500" />
            <p className="text-lg font-semibold mt-2">{user.first_name} {user.last_name}</p>
            <p className="text-gray-500">{user.email}</p>
            <div className="mt-4 space-x-2">
              <button onClick={() => navigate(`/edit/${user.id}`, { state: user })} 
                className="bg-yellow-500 px-4 py-2 text-white rounded-md hover:bg-yellow-600">Edit</button>
              <button onClick={() => setUsers(users.filter((u) => u.id !== user.id))} 
                className="bg-red-500 px-4 py-2 text-white rounded-md hover:bg-red-600">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
