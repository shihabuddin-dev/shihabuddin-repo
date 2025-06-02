import React, { use, useEffect, useState } from "react";
import Repository from "../repository/Repository";
import CountUp from "react-countup";
import { Typewriter } from "react-simple-typewriter";

const Repositories = ({ repositoriesPromise }) => {
  const repositoriesData = use(repositoriesPromise);
  const [repositories, setRepositories] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    if (showAll) setRepositories(repositoriesData);
    else setRepositories(repositoriesData.slice(0, 16));
  }, [showAll, repositoriesData]);
  return (
    <div className=" text-center mt-6">
      <h2 className="text-2xl font-bold space-x-1">
        <Typewriter
          words={[
            "Total Repositories",
            "My Projects",
            "New Projects",
            "Total Projects",
          ]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={90}
          deleteSpeed={80}
          delaySpeed={2000}
        />{" "}
        <span>
          <CountUp
            start={0}
            end={repositoriesData.length}
            enableScrollSpy
            duration={9}
          />
          +
        </span>
      </h2>
      <div className="grid sm:grid-cols-2 gap-3 mt-4">
        {repositories.map((repository, i) => (
          <Repository key={i} repository={repository}></Repository>
        ))}
      </div>
      <div className="mt-4">
        <button
          onClick={() => {
            setShowAll(!showAll);
            showAll && window.scrollTo(0, 0);
          }}
          className=" text-white rounded-sm px-2 py-1 cursor-pointer border-2 border-black hover:border-black bg-black hover:bg-white hover:text-black duration-600 transform hover:-translate-x-0"
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
      <hr className="border-2 border-gray-500 mt-4" />
    </div>
  );
};

export default Repositories;
