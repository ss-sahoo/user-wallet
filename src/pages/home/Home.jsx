import React from "react";
import img1 from "../../img/img1.png";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.webp";

const Home = () => {
  return (
    <div className="p-8 bg-gray-200">
      <div className="bg-gray-100 text-center py-8 mb-4">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to our Data Analytics Platform
        </h1>
        <h4 className="text-xl">
          Analyze, visualize, and generate custom reports for your data.
        </h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        <div className="bg-white p-4 text-center">
          <img
            src={img1}
            alt="Real-time Analytics"
            className="max-w-full mb-2"
          />
          <h5 className="text-xl font-bold mb-2">Real-time Analytics</h5>
          <p>
            Track and analyze your data in real-time with our powerful analytics
            tools.
          </p>
          <button className="bg-pink-500 text-white mt-4 px-4 py-2 hover:bg-pink-700">
            Learn More
          </button>
        </div>

        <div className="bg-white p-4 text-center">
          <img
            src={img2}
            alt="Data Visualization"
            className="max-w-full mb-2"
          />
          <h5 className="text-xl font-bold mb-2">Data Visualization</h5>
          <p>
            Visualize your data with stunning charts and graphs for better
            insights.
          </p>
          <button className="bg-pink-500 text-white mt-4 px-4 py-2 hover:bg-pink-700">
            Learn More
          </button>
        </div>

        <div className="bg-white p-4 text-center">
          <img src={img3} alt="Custom Reports" className="max-w-full mb-2" />
          <h5 className="text-xl font-bold mb-2">Custom Reports</h5>
          <p>
            Create custom reports tailored to your business needs with ease.
          </p>
          <button className="bg-pink-500 text-white mt-4 px-4 py-2 hover:bg-pink-700">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
