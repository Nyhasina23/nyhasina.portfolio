import React, { useEffect } from "react";
import { Drawer, Typography } from "@material-tailwind/react";
import FancyText from "@carefully-coded/react-text-gradient";

export function DrawerNav({ isDrawerOpen = false }) {
  const [open, setOpen] = React.useState(isDrawerOpen);

  const closeDrawer = () => setOpen(false);

  const setDrawerOpen = (drawer) => {
    setOpen(drawer);
  };

  useEffect(() => {
    setDrawerOpen(isDrawerOpen);
  }, [isDrawerOpen]);

  return (
    <React.Fragment>
      <Drawer
        open={open}
        onClose={closeDrawer}
        className="p-4 absolute top-0 z-50 bg-gray-900 h-[50%]"
      >
        <div>
          <a href="#experience" onClick={() => setDrawerOpen(false)}>
            {" "}
            <Typography className="text-xl font-normal text-gray-100 list-none hover:text-[#05828e]">
              <FancyText
                gradient={{
                  from: "rgb(59 238 221)",
                  to: "rgb(33 148 182)",
                  type: "linear",
                }}
                animate
                animateDuration={2000}
                className="text-2xl font-bold text-left mb-8 nyhasina custom-margin"
              >
                H •••••
              </FancyText>
            </Typography>
            <Typography className="text-xl mt-4 font-normal text-gray-100 list-none hover:text-[#05828e]">
              Experiences
            </Typography>
          </a>
          <a href="#project" onClick={() => setDrawerOpen(false)}>
            <Typography className="text-xl font-normal mt-4 text-gray-100 list-none hover:text-[#05828e]">
              Projects
            </Typography>
          </a>
          <a href="#comm" onClick={() => setDrawerOpen(false)}>
            <Typography className="text-xl font-normal mt-4 text-gray-100 list-none hover:text-[#05828e]">
              Community
            </Typography>
          </a>
          <Typography className="text-xl font-normal mt-4 text-gray-100 list-none hover:text-[#05828e]">
            <div class="inline-flex rounded-full shadow">
              <a
                href="https://drive.google.com/file/d/16UVLDtAFuaW39-gymcmuQYA0w7ByRCcn/view?usp=drive_link"
                class="inline-flex items-center px-4 py-2 text-base text-gray-900 bg-[#05828e] border border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50 "
              >
                Contact Me — CV 
              </a>
            </div>
          </Typography>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
