import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import FancyText from "@carefully-coded/react-text-gradient";
import Experience from "./Experience";
import { dataXP } from "../data/xp.data";
import { projects } from "../data/project.data";
import Projects from "./Projects";
import { communityData } from "../data/community.data";
import Community from "./Community";
const MainSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const calculateGradient = () => {
    const offsetX = (mousePosition.x / window.innerWidth) * 100;
    const offsetY = (mousePosition.y / window.innerHeight) * 100;

    const size = 40; 

    return `radial-gradient(circle at ${offsetX}% ${offsetY}%, #162229, #080b11 ${size}%)`;
  };
  return (
    <div className="bg-[#162229] h-full flex flex-col w-full">
      <div
        className="relative h-screen flex items-center justify-center"
        style={{
          background: calculateGradient(),
        }}
      >
        <div className="flex flex-col ">
          <NavBar />
          <div className="flex px-4 mx-auto max-w-7xl sm:px-6 justify-between custom-responsive">
            <div className="">
              <FancyText
                gradient={{
                  from: "rgb(59 238 221)",
                  to: "rgb(33 148 182)",
                  type: "linear",
                }}
                animate
                animateDuration={2000}
                className="text-7xl font-bold text-left mb-4 nyhasina"
              >
                Ny Hasina
              </FancyText>
              <h1 className="text-5xl text-[#e7eaef] mb-4 nyhasina">
                Web developer
              </h1>
              <h1 className="text-lg font-extralight text-[#e7eaef]">
                • Front developer • Backend developer •
              </h1>
              <div className="relative z-10">
                <ul class="flex justify-start mt-5 space-x-5">
                  <li>
                    <a
                      href="https://web.facebook.com/nyhasina.finaritra/"
                      class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                    >
                      <svg
                        class="w-10 h-10"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://github.com/Nyhasina23"
                      class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                    >
                      <svg
                        class="w-10 h-10"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/ny-hasina-andriamasimanana-622bb11ab/"
                      class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                    >
                      <svg
                        class="w-10 h-10"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <rect
                          width="24"
                          height="24"
                          stroke="none"
                          fill="#000000"
                          opacity="0"
                        />

                        <g transform="matrix(0.83 0 0 0.83 12 12)">
                          <path
                            transform=" translate(-12, -12)"
                            d="M 21.800781 0 L 2.199219 0 C 1 0 0 1 0 2.199219 L 0 21.800781 C 0 23 1 24 2.199219 24 L 21.800781 24 C 23 24 24 23 24 21.800781 L 24 2.199219 C 24 1 23 0 21.800781 0 Z M 7 20 L 3 20 L 3 9 L 7 9 Z M 5 7.699219 C 3.800781 7.699219 3 6.898438 3 5.898438 C 3 4.800781 3.800781 4 5 4 C 6.199219 4 7 4.800781 7 5.800781 C 7 6.898438 6.199219 7.699219 5 7.699219 Z M 21 20 L 17 20 L 17 14 C 17 12.398438 15.898438 12 15.601563 12 C 15.300781 12 14 12.199219 14 14 C 14 14.199219 14 20 14 20 L 10 20 L 10 9 L 14 9 L 14 10.601563 C 14.601563 9.699219 15.601563 9 17.5 9 C 19.398438 9 21 10.5 21 14 Z"
                            stroke-linecap="round"
                          />
                        </g>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-[60%] overflow-y-scroll h-[calc(100vh-10rem)] scrollbar-hide full-width-responsive">
              <p className="text-[#e7eaef] text-xl font-extralight">
                Passionate full-stack JavaScript developer, I craft innovative
                IT solutions that blend simplicity with performance. My mission
                is to deliver tangible value to each project, leveraging strong
                technical expertise and a pragmatic approach to software
                development.
              </p>
              <div id="experience">
                <FancyText
                  gradient={{
                    from: "#9ba8b8",
                    to: "#05828e",
                    type: "linear",
                  }}
                  animate
                  animateDuration={2000}
                  className="text-7xl mt-8 font-bold text-left nyhasina"
                >
                  Experiences
                </FancyText>
              </div>
              <div className="mt-12">
                {dataXP.map((xp) => (
                  <Experience
                    poste={xp.poste}
                    date={xp.date}
                    company={xp.company}
                    desc={xp.description}
                    tech={xp.tech}
                  />
                ))}
              </div>
              <div id="project">
                <FancyText
                  gradient={{
                    from: "#9ba8b8",
                    to: "#05828e",
                    type: "linear",
                  }}
                  animate
                  animateDuration={2000}
                  className="text-7xl mt-4 font-bold text-left mb-8 nyhasina"
                >
                  Projects
                </FancyText>
              </div>
              <div>
                {projects.map((p) => (
                  <Projects
                    company={p.company}
                    desc={p.description}
                    image={p.image}
                    link={p.link}
                  />
                ))}
              </div>
              <div id="comm">
                <FancyText
                  gradient={{
                    from: "#9ba8b8",
                    to: "#05828e",
                    type: "linear",
                  }}
                  animate
                  animateDuration={2000}
                  className="text-7xl mt-4 font-bold text-left mb-4 nyhasina"
                >
                  Community
                </FancyText>
              </div>
              <div>
                {communityData.map((c) => (
                  <Community
                    date={c.date}
                    company={c.company}
                    desc={c.description}
                    image={c.image}
                    poste={c.poste}
                  />
                ))}
              </div>
              <div className="text-center mb-4 mt-4">
                <p className="text-slate-600 text-sm font-extralight">
                  Ny Hasina • Copyright 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
