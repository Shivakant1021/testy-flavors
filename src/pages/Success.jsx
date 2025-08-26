import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { useNavigate } from "react-router-dom"; 

const Success = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

const handleButton = () => {
    navigate("/")
}

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div>
          <h1 className="text-3xl font-medium mb-4 text-center">
            !ThankYou for Choosing  Quick Bites We Deliver Happiness and Food 😊✌️
          </h1>
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Order Successful!
          </h2>
          <p className="text-center">Your order has been sucessfully placed</p>
          <div className="">
          <button onClick={handleButton} className="bg-blue-500 flex text-white py-2 px-4 rounded hover:bg-blue-700 justify-self-center">Home</button>
        </div>

        </div>
      )}
    </div>
  );
};

export default Success;