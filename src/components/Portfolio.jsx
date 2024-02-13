import React from "react";
import Gamer from "../assets/portfolio/2.jpg";
import Travel from "../assets/portfolio/3.jpg";
import Refactory from "../assets/portfolio/6.png";
import BikeZone from "../assets/portfolio/5.png";
import FruitBrust from "../assets/portfolio/1.jpg";
import Petrol from "../assets/portfolio/4.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Travel,
      link: 'https://travel-website-using-react-js-tailwind-css.vercel.app/',
      repo: 'https://github.com/farzanaYesminn/Travel_website-using-React-Js_Tailwind-CSS'
    },
    {
      id: 2,
      src: FruitBrust,
      link: 'https://farzanayesminn.github.io/FruitBrust_HTML-TailwindCSS_Responsive/',
      repo: 'https://github.com/farzanaYesminn/FruitBrust_HTML-TailwindCSS_Responsive'
    },
    {
      id: 3,
      src: Gamer,
      link: 'https://github.com/farzanaYesminn/Travel_website-using-React-Js_Tailwind-CSS',
      repo: 'https://travel-website-using-react-js-tailwind-css.vercel.app/'
    },
    {
      id: 4,
      src: Petrol,
      link: 'https://petrol-website-using-css.vercel.app/',
      repo: 'https://github.com/farzanaYesminn/Petrol_Website-using-CSS'
    },
    {
      id: 5,
      src: BikeZone,
      link: 'https://farzanayesminn.github.io/Petrol_Website-using-CSS/',
      repo: 'https://github.com/farzanaYesminn/Petrol_Website-using-CSS'
    },
    {
      id: 6,
      src: Refactory,
      link: 'https://refactory.ae/',
      repo: 'https://refactory.ae/'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
