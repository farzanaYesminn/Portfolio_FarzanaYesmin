import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
            I am a Junior Software Engineer at Redgreen Technology, specializing in web frontend development. Committed to continuous learning, I eagerly embrace new technologies to enhance my skills. I thrive on crafting solutions from scratch, transforming ideas into reality. Open to working with diverse web technologies, I bring a dynamic approach to projects.
        </p>

        <br />

        <p className="text-xl pb-10">
        As a professional dedicated to excellence, I invite you to connect for your project needs. I prioritize minimalistic designs, thoughtful content branding, and a customer-centric experience to elevate your project. Let's collaborate to unlock its full potential. <br /> <br />
    
        I excel in creating distinct identities for products/services, optimizing visibility on search engines and social platforms. Join me in the journey of enhancing your project's impact and conversion rates.
        </p>
      </div>
    </div>
  );
};

export default About;
