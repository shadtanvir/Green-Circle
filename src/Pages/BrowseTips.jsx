import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaEye } from "react-icons/fa";

const BrowseTips = () => {
  const [tips, setTips] = useState([]);
  const [filteredTips, setFilteredTips] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  useEffect(() => {
    fetch("http://localhost:3000/public-tips")
      .then((res) => res.json())
      .then((data) => {
        setTips(data);
        setFilteredTips(data);
      });
  }, []);

  useEffect(() => {
    if (selectedDifficulty === "All") {
      setFilteredTips(tips);
    } else {
      const filtered = tips.filter(
        (tip) =>
          tip.difficulty.toLowerCase() === selectedDifficulty.toLowerCase()
      );
      setFilteredTips(filtered);
    }
  }, [selectedDifficulty, tips]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-20 font-lora">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-6">
        <h2 className="text-2xl font-merriweather text-success font-bold">
          Community Garden Tips
        </h2>
        <div>
          <label className="mr-2 font-semibold">Filter by Difficulty:</label>
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="select select-success max-w-xs"
          >
            <option value="All">All</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
      </div>
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
            {filteredTips.map((tip, index) => (
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
