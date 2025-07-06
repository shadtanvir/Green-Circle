import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaEye } from "react-icons/fa";

const BrowseTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/public-tips")
      .then((res) => res.json())
      .then((data) => setTips(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-20 font-lora">
      <div className="overflow-x-auto bg-base-100 shadow-md rounded-lg">
        <table className="table w-full">
          <thead className="bg-success  text-white text-lg">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Difficulty</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {tips.map((tip, index) => (
              <tr key={tip._id} className="hover">
                <td>{index + 1}</td>
                <td>
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                </td>
                <td>{tip.title}</td>
                <td>{tip.category}</td>
                <td>{tip.difficulty}</td>
                <td>
                  <Link to={`/tips/${tip._id}`}>
                    <button className="btn btn-sm btn-outline btn-success flex items-center gap-2">
                      See more
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
            {tips.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center text-gray-400 py-4">
                  No public tips found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseTips;
