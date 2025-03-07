import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";

const Details = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setItem(res.data));
  }, [id]);

  if (!item)
    return <p className="text-center text-gray-500 mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white ">
      <button
        onClick={() => navigate("/")}
        className="bg-gray-500 text-white p-2 mb-4 rounded hover:bg-gray-600 transition duration-300 cursor-pointer flex gap-1 flex-nowrap items-center"
      >
        <FaArrowLeft size={20} /> Go Back
      </button>
      <div className="shadow p-4 rounded-lg flex flex-col md:flex-row">
        <div className="w-[400px] ">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-60 object-cover rounded mb-4"
          />
        </div>
        <div className="">
          <h1 className="text-3xl font-bold mb-4">{item.title}</h1>

          <p className="text-gray-700 mb-4">{item.description}</p>
          <p className="text-xl font-bold text-gray-900">
            Price: ${item.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
