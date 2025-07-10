import React, { useContext, useEffect, useState } from "react";
import ErrorPage from "./ErrorPage";
import { useNavigate, useParams } from "react-router";
import Loading from "../Components/Loading";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const TipDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [tip, setTip] = useState(null);
  const [liked, setLiked] = useState(false);
  const [likedTips, setLikedTips] = useState([]);
  const navigate = useNavigate();

  // Fetch Tip Info
  useEffect(() => {
    fetch(`https://green-circle-server-mocha.vercel.app/tips/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTip(data);
      });
  }, [id]);

  // Fetch Gardener's likedTips
  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://green-circle-server-mocha.vercel.app/gardeners/${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          const likedTipIds = data?.likedTips || [];
          setLikedTips(likedTipIds);
          if (likedTipIds.includes(id)) {
            setLiked(true);
          }
        });
    }
  }, [user, id]);

  const handleLike = () => {
    if (!user || liked) return; // prevent if not logged in or already liked

    fetch(`https://green-circle-server-mocha.vercel.app/tips/${id}/like`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userEmail: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setTip((prev) => ({
            ...prev,
            totalLiked: (prev.totalLiked || 0) + 1,
          }));
          setLiked(true);
          setLikedTips((prev) => [...prev, id]);
        }
      });
  };

  if (!tip)
    return (
      <div className="text-center py-10">
        <Loading />
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
      <div className="flex items-center justify-center mt-4  gap-1">
        <button onClick={handleLike}>
          {liked ? (
            <FaHeart className="text-red-600" size={23} />
          ) : (
            <FaRegHeart className="text-red-600" size={23} />
          )}
        </button>
        <span className="text-xl">{tip.totalLiked || 0} </span>
      </div>
      <p className="mt-4 text-sm text-gray-300">
        By: {tip.userName} ({tip.userEmail})
      </p>
    </div>
  );
};

export default TipDetails;
