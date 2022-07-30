import React from "react";
import ReposItmes from "./ReposItmes";

function UserRepository({ repos }) {
  return (
    <div>
      <h2 className="rouded-lg shadow-lg my-4 pb-3 text-3xl bg-base-100 card">
        Top Repository
      </h2>
      {repos.map((repo) => (
        <ReposItmes key={repo.id} repo={repo} />
      ))}
    </div>
  );
}

export default UserRepository;
