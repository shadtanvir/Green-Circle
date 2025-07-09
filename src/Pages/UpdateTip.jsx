import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Components/Loading";

const UpdateTip = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [tip, setTip] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/tips/${id}`)
      .then((res) => res.json())
      .then((data) => setTip(data));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedTip = {
      title: form.title.value,
      plantType: form.plantType.value,
      difficulty: form.difficulty.value,
      description: form.description.value,
      image: form.image.value,
      category: form.category.value,
      availability: form.availability.value,
    };

    fetch(`http://localhost:3000/tips/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTip),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("PUT response:", data);
        if (data.modifiedCount > 0) {
          Swal.fire("Success!", "Tip updated successfully.", "success");
          navigate("/my-tips");
        }
      });
  };

  if (!tip)
    return (
      <div className="text-center mt-10">
        <Loading></Loading>
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto p-6 my-15 bg-info shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-green-700 mb-6 text-center font-merriWeather">
        Update Garden Tip
      </h2>

      <form onSubmit={handleUpdate} className="space-y-4">
        {/* Title & Plant Type */}
        <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
          <div>
            <label className="label  text-shadow-gray-700 ">Title</label>
            <input
              type="text"
              name="title"
              defaultValue={tip.title}
              placeholder="Tip Title"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label text-shadow-gray-700">
              Plant Type / Topic
            </label>
            <input
              type="text"
              name="plantType"
              defaultValue={tip.plantType}
              placeholder="Plant Type / Topic"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* Difficulty & Image URL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="label text-shadow-gray-700">
              Difficulty Level
            </label>
            <select
              name="difficulty"
              defaultValue={tip.difficulty}
              className="select select-bordered w-full"
              required
            >
              <option disabled value="">
                Select Difficulty
              </option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <div>
            <label className="label text-shadow-gray-700">Image URL</label>
            <input
              type="text"
              name="image"
              defaultValue={tip.image}
              placeholder="Image URL"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* Category & Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="label text-shadow-gray-700">Category</label>
            <select
              name="category"
              defaultValue={tip.category}
              className="select select-bordered w-full"
              required
            >
              <option disabled value="">
                Select Category
              </option>
              <option value="Composting">Composting</option>
              <option value="Plant Care">Plant Care</option>
              <option value="Vertical Gardening">Vertical Gardening</option>bd
              <option value="Seasonal Tips">Seasonal Tips</option>
              <option value="General">General</option>
              <option value="Indoor Gardening">Indoor Gardening</option>
              <option value="Soil Preparation">Soil Preparation</option>
            </select>
          </div>

          <div>
            <label className="label text-shadow-gray-700">Availability</label>
            <select
              name="availability"
              defaultValue={tip.availability}
              className="select select-bordered w-full"
              required
            >
              <option disabled value="">
                Availability
              </option>
              <option value="Public">Public</option>
              <option value="Hidden">Hidden</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="label text-shadow-gray-700">Description</label>
          <textarea
            name="description"
            defaultValue={tip.description}
            placeholder="Tip Description"
            rows="4"
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
        </div>

        {/* Read-Only User Info */}
        <div className="grid grid-cols-1 TEXT-LG md:grid-cols-2 gap-4">
          <input
            type="text"
            readOnly
            value={user.displayName || "N/A"}
            className="input input-bordered w-full text-gray-500"
          />
          <input
            type="email"
            readOnly
            value={user.email}
            className="input input-bordered w-full text-gray-500"
          />
        </div>

        <div className="text-center">
          <button className="btn btn-success px-10 mt-4">Update Tip</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateTip;
