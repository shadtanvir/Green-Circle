import React, { useEffect, useState } from "react";
import ErrorPage from "./ErrorPage";
import { useParams } from "react-router";
import Loading from "../Components/Loading";

const TipDetails = () => {
  const { id } = useParams();
  const [tip, setTip] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/tips/${id}`)
      .then((res) => res.json())
      .then((data) => setTip(data));
  }, [id]);

  if (!tip)
    return (
      <div className="text-center py-10">
        <Loading></Loading>
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto p-6 text-center font-lora">
      <h2 className="text-3xl font-merriweather text-success font-bold mb-4">
        {tip.title}
      </h2>
      <img
        src={tip.image}
        alt={tip.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p>
        <strong>Category:</strong> {tip.category}
      </p>
      <p>
        <strong>Difficulty:</strong> {tip.difficulty}
      </p>
      <p className="mt-4 text-xl">{tip.description}</p>
      <p className="mt-4 text-sm text-gray-500">
        By: {tip.userName} ({tip.userEmail})
      </p>
    </div>
  );
};

export default TipDetails;
