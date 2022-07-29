import React, { useEffect, useContext } from "react";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import GithubContext from "../context/gihhub/GithubContext";
import { useParams, Link } from "react-router-dom";

function User(props) {
  const { getUser, userLogin, isLoading } = useContext(GithubContext);
  const { login } = useParams();

  useEffect(() => {
    getUser(login);
  }, []);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = userLogin;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back To Search
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card-image-full">
              <figure>
                <img src={avatar_url} alt="profile image" />
              </figure>
              <div className="card-body justify-start ">
                <h2 className="card-title mb-0"> {login}</h2>
                <p>{name}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <div className="text-3xl card-title">
                <h1>
                  {name}
                  <div className="ml-2 mr-1 badge badge-success">{type}</div>
                  {hireable && (
                    <div className="mx-1 badge badge-info">Hireable</div>
                  )}
                </h1>
              </div>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  {" "}
                  Visit GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
