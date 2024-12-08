import React from "use client";
import Layout from "../../components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="px-6 py-10">
        <h1 className="text-4xl font-bold text-center text-yellow-600 mb-6">
          About Urban Avenue Lighting
        </h1>
        <div className="flex flex-wrap justify-center items-center text-center">
          <div className="lg:w-1/2 px-6">
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              Urban Avenue Lighting is at the forefront of innovative lighting
              design, blending aesthetic beauty with functional elegance. Our
              mission is to illuminate your spaces in ways that transform
              ordinary environments into extraordinary experiences.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              We believe in sustainability and innovation, ensuring our products
              not only meet the highest standards of efficiency but also
              contribute to a greener planet.
            </p>
          </div>
          <div className="lg:w-1/2 px-6 mt-6 lg:mt-0">
            <img
              src="/about-img.jpg"
              alt="About Urban Avenue Lighting"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
