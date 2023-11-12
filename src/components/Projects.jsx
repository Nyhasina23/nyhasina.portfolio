import React from "react";

const Projects = ({ company, desc, image, link }) => {
  return (
    <div className="mb-4 custom-hover p-4 rounded-md group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="z-10 mb-2  text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
        <header className="z-10 mb-2  text-xl font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
          <img
            src={image}
            alt="project"
            className="rounded-md"
            width={350}
            height={300}
          />
        </header>
      </div>
      <div className="z-10 sm:col-span-6">
        <p className="  font-medium leading-snug text-slate-200 text-xl">
          {company}
        </p>
        <p className="mt-2 text-lg leading-normal text-[#9ba8b8]">{desc}</p>
        <div className="flex flex-wrap mb-3">
          <p className="font-medium   leading-snug text-[#05828e] text-md">
            <a href={link ? link : "/"}>{link}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
