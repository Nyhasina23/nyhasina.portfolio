import React, { useState } from "react";
import FancyText from "@carefully-coded/react-text-gradient";
import { DrawerNav } from "./Drawer";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div>
      <div class="px-4 mx-auto max-w-7xl sm:px-6">
        <div class="relative pt-6 pb-16 navbar-responsive">
          <nav
            class="relative flex items-center justify-between sm:h-10 md:justify-center"
            aria-label="Global"
          >
            <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div class="flex items-center justify-between w-full md:w-auto">
                <a href="/">
                  <span class="sr-only">Company Name</span>
                  <FancyText
                    gradient={{
                      from: "rgb(59 238 221)",
                      to: "rgb(33 148 182)",
                      type: "linear",
                    }}
                    animate
                    animateDuration={2000}
                    className="text-2xl font-bold text-left mb-4 nyhasina custom-margin"
                  >
                    H •••••
                  </FancyText>
                </a>
                <div class="flex items-center -mr-2 md:hidden">
                  <button
                    class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-[#05828e] "
                    type="button"
                    aria-expanded="false"
                    onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                  >
                    <span class="sr-only">Open main menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="hidden md:flex md:space-x-10 list-none">
              <li>
                <a
                  href="#experience"
                  class="text-base font-normal text-gray-500 list-none hover:text-[#05828e]"
                >
                  Experiences
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  class="text-base font-normal text-gray-500 list-none hover:text-[#05828e]"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#comm"
                  class="text-base font-normal text-gray-500 list-none hover:text-[#05828e]"
                >
                  Community
                </a>
              </li>
            </div>
            <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
              <div class="inline-flex rounded-full shadow">
                <a
                  href="https://drive.google.com/file/d/11t8Q_Dy1dLLObaNypttFmqB5vx5Qa7u7/view?usp=sharing"
                  class="inline-flex items-center px-4 py-2 text-base text-gray-900 bg-[#05828e] border border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50 "
                >
                  Contact Me — CV
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="custom-drawer">
        <DrawerNav isDrawerOpen={isDrawerOpen} />
      </div>
    </div>
  );
};

export default NavBar;
