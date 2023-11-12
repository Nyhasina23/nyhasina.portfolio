import React from "react";

const Community = ({ poste, company, desc, image, date }) => {
  return (
    <div className="mb-4 custom-hover p-4 rounded-md group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="z-10 mb-2  text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
        <header className="z-10 mb-2  flex items-center text-md mr-2 font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
          <img
            src={image}
            alt="project"
            className="rounded-full"
            width={50}
            height={50}
          />
          <p className="z-10 ml-2  text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
            {date}
          </p>
        </header>
      </div>
      <div className="z-10 sm:col-span-6">
        <p className="  font-medium leading-snug text-slate-200 text-xl">
          {poste}
        </p>
        <p className="  font-medium leading-snug text-slate-200 text-xl">
          {company}
        </p>
      </div>
    </div>
  );
};

export default Community;
