import React from "react";

const Repository = ({ repository }) => {
  const { name, description, language, repo, live } = repository;
  const myDescription =
    "This project's description is unavailable at this moment....";
  return (
    <div className="text-justify bg-black text-white px-4 py-3 rounded-md duration-600 transform hover:-translate-y-1 cursor-grab">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p>{description ? description.slice(0, 71) : myDescription}...</p>
      <p className="text-lg">
        Language: {language ? `${language}` : `Not Found`}
      </p>
      <div className="flex gap-3 pt-2 items-center">
        <a
          href={repo}
          target="blank"
          className="bg-white text-black rounded-sm px-1 cursor-pointer border-2 border-white hover:bg-transparent hover:border-white hover:text-white duration-600 transform hover:-translate-x-0"
        >
          {repo ? "Code" : "Private"}
        </a>
        <a
          href={live}
          target="blank"
          className="bg-transparent text-white rounded-sm px-1 cursor-pointer border-2 hover:border-white hover:bg-white hover:text-black duration-600 transform hover:-translate-x-0"
        >
          {live ? "Live" : "No Live"}
        </a>
      </div>
    </div>
  );
};

export default Repository;
