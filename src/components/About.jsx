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
          My Experiences
          </p>
        </div>

        <div >
                <div className="py-4">
                    <div className="text-xl font-bold">Jr. Software Engineer (July 2023 – Present)</div>
                    <div className="text-lg py-1">RedGreen Technology Ltd.</div>
                    <div className="text-md">
                        <ul className="list-disc pl-6">
                            <li>Proficient in Frontend Development using React JS, Tailwind CSS, and JavaScript.</li>
                            <li>Collaborating on projects to enhance user interfaces and user experiences.</li>
                            <li>Implementing responsive and visually appealing designs.</li>
                            <li>Ensuring cross-browser compatibility and optimal performance.</li>
                            <li>Adapting to emerging technologies and industry best practices.</li>
                            <li>Working collaboratively with cross-functional teams to achieve project goals.</li>
                        </ul>
                    </div>
                </div>
                <div className="py-4">
                    <div className="text-xl font-bold">Student Associate (February 2022 – May 2022)</div>
                    <div className="text-lg py-1">International Affairs, Daffodil International University</div>
                    <div className="text-md">
                        <ul className="list-disc pl-6">
                            <li>Collaborated with team members to execute various tasks related to international affairs at Daffodil International University.</li>
                            <li>Contributed to the planning and organization of events, programs, and initiatives within the International Affairs department.</li>
                            <li>Assisted in maintaining effective communication channels between the university and international stakeholders.</li>
                            <li>Coordinated logistics and provided support for meetings, conferences, and other relevant activities.</li>
                            <li>Conducted research and analysis on international policies, trends, and educational partnerships to keep the team informed.</li>
                            <li>Engaged in cross-cultural communication to enhance the internationalization efforts of the university.</li>
                        </ul>
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default About;
