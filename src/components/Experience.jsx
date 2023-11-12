import React from "react";

const Experience = ({ poste, date, company, desc, tech }) => {
  return (
    <div className="mb-4 custom-hover p-4 rounded-md group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="z-10 mb-2  text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
        <header className="z-10 mb-2  text-sm font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
          {date}
        </header>
      </div>
      <div className="z-10 sm:col-span-6">
        <p className="  font-medium leading-snug text-slate-200 text-xl">
          {poste}
        </p>
        <p className="text-slate-500">{company}</p>
        <p className="mt-2 text-lg leading-normal text-[#9ba8b8]">{desc}</p>
        <div className="flex flex-wrap mb-3">
          {tech.map((t) => (
            <span class="flex items-center rounded-full bg-teal-400/10 px-4 py-1 text-sm font-medium leading-5 text-teal-300 mr-1.5 mt-2">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
