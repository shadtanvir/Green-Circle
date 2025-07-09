import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router";
import Swal from "sweetalert2";
import { FaEdit, FaTrashAlt, FaLock, FaUnlock } from "react-icons/fa";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { AuthContext } from "../Provider/AuthProvider";

const MyTips = () => {
  const { user, loading } = useContext(AuthContext);
  const [tips, setTips] = useState([]);

  useEffect(() => {
    if (!loading && user?.email) {
      fetch(`http://localhost:3000/tips?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setTips(data));
    }
  }, [loading, user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This tip will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/tips/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setTips((prev) => prev.filter((tip) => tip._id !== id));
              Swal.fire("Deleted!", "Your tip has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto my-15 p-4 font-lora">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-green-700 flex justify-center items-center gap-2 font-merriWeather">
          <MdOutlineTipsAndUpdates className="text-4xl" />
          My Garden Tips
        </h2>
        <p className="text-shadow-gray-700 ">
          All your public and private tips are listed here.
        </p>
      </div>

      <div className="overflow-x-auto shadow-lg rounded-lg border border-green-200">
        <table className="table w-full text-sm">
          <thead className="bg-green-100 font-merriWeather text-green-800">
            <tr className="text-base font-semibold">
              <th className="py-3 px-4 text-left">#</th>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tips.map((tip, index) => (
              <tr key={tip._id} className=" bg-info transition duration-150">
                <td className="py-2 px-4 font-medium">{index + 1}</td>
                <td className="py-2 px-4 flex items-center gap-2 font-semibold text-green-700">
                  {tip.title}
                </td>
                <td className="py-2 px-4 italic text-neutral">
                  {tip.category}
                </td>
                <td className="py-2 px-4">
                  {tip.availability === "Public" ? (
                    <span className="badge badge-success gap-1 text-white">
                      <FaUnlock />
                      Public
                    </span>
                  ) : (
                    <span className="badge badge-error gap-1 text-white">
                      <FaLock />
                      Private
                    </span>
                  )}
                </td>
                <td className=" flex gap-2 py-2 px-4">
                  <Link to={`/update-tip/${tip._id}`}>
                    <button className="btn btn-sm btn-warning flex items-center gap-1">
                      <FaEdit /> Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(tip._id)}
                    className="btn btn-sm btn-error flex items-center gap-1"
                  >
                    <FaTrashAlt /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!loading && tips.length === 0 && (
          <div className="text-center py-6 text-gray-500">
            You haven’t added any tips yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTips;
