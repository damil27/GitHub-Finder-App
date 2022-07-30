import React from "react";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

function ReposItmes({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;
  return (
    <div className="mb-2 rounded-md bg-gray-800 card hover:bg-gray-900">
      <div className="card-body inline">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={html_url}>
            <FaLink className="inline mr-4" />
            {name}
          </a>
        </h3>
        <p className="mb-3">{description}</p>
        <div className="badge mr-2 badge-info badge-lg">
          <FaEye className="mr-2" /> {watchers_count}
        </div>
        <div className="badge mr-2 badge-success badge-lg">
          <FaStar className="mr-2" /> {stargazers_count}
        </div>
        <div className="badge mr-2 badge-error badge-lg">
          <FaInfo className="mr-2" /> {open_issues}
        </div>
        <div className="badge mr-2 badge-warning badge-lg">
          <FaUtensils className="mr-2" /> {forks}
        </div>
      </div>
    </div>
  );
}

export default ReposItmes;
