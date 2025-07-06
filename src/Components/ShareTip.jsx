import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { div } from "framer-motion/client";

const ShareTip = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const tipData = {
      ...data,
      userEmail: user.email,
      userName: user.displayName,
      date: new Date(),
    };

    fetch("http://localhost:3000/tips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tipData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Your tip is shared!",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to share the tip!",
          });
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto my-20 p-6 bg-base-100 shadow-lg rounded-md">
      <h2 className="text-2xl font-merriweather font-bold text-success mb-6">
        Share a Garden Tip
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-lora">
        <div>
          <label className="label">Title</label>
          <input
            {...register("title", { required: true })}
            type="text"
            className="input input-bordered w-full"
            placeholder="e.g., How I Grow Tomatoes Indoors"
          />
        </div>

        <div>
          <label className="label">Plant Type / Topic</label>
          <input
            {...register("plantType", { required: true })}
            type="text"
            className="input input-bordered w-full"
            placeholder="e.g., Tomatoes, Basil"
          />
        </div>

        <div>
          <label className="label">Difficulty Level</label>
          <select
            {...register("difficulty", { required: true })}
            className="select select-bordered w-full"
          >
            <option value="">Select one</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        <div>
          <label className="label">Description</label>
          <textarea
            {...register("description", { required: true })}
            className="textarea textarea-bordered w-full"
            rows="4"
            placeholder="Describe your tip here..."
          />
        </div>

        <div>
          <label className="label">Image URL</label>
          <input
            {...register("image", { required: true })}
            type="url"
            className="input input-bordered w-full"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div>
          <label className="label">Category</label>
          <select
            {...register("category", { required: true })}
            className="select select-bordered w-full"
          >
            <option value="">Choose a category</option>
            <option>Composting</option>
            <option>Plant Care</option>
            <option>Vertical Gardening</option>
            <option>Indoor Gardening</option>
            <option>Soil Preparation</option>
          </select>
        </div>

        <div>
          <label className="label">Availability</label>
          <select
            {...register("availability", { required: true })}
            className="select select-bordered w-full"
          >
            <option value="">Select</option>
            <option>Public</option>
            <option>Hidden</option>
          </select>
        </div>

        <div>
          <label className="label">Your Name</label>
          <input
            type="text"
            value={user.displayName}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        <div>
          <label className="label">Your Email</label>
          <input
            type="email"
            value={user.email}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        <div className="text-right">
          <button className="btn btn-success text-white" type="submit">
            Share Tip
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShareTip;
