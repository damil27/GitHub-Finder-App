import React, { useEffect, useContext } from "react";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import GithubContext from "../context/gihhub/GithubContext";
import { useParams, Link } from "react-router-dom";
import UserRepository from "../components/repository/UserRepository";
import { getUser, getRepos } from "../context/gihhub/GithubActions";

function User(props) {
  const { userLogin, isLoading, dispatch, repos } = useContext(GithubContext);
  const { login } = useParams();

  useEffect(() => {
    const getUserData = async () => {
      const userData = await getUser(login);
      dispatch({
        type: "USER_DATA",
        payload: userData,
      });

      const userRepos = await getRepos(login);
      dispatch({
        type: "REPO",
        payload: userRepos,
      });
    };
    getUserData();
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
            <div className="w-full rounded-lg shadow-md bg-base-700 inline ">
              <div>
                {location && (
                  <div className="stat">
                    <div className="stat-titl text-sm"> Location</div>
                    <div className="stat-md text-white text-sm stat-value">
                      {location}
                    </div>
                  </div>
                )}
              </div>
              <div>
                {blog && (
                  <div className="stat">
                    <div className="stat-titl text-md"> Website </div>
                    <div className="stat-md text-white text-sm stat-value">
                      <a
                        href={`https://${blog}`}
                        target="_black"
                        rel="noreferrer"
                      >
                        {blog}
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <div>
                {twitter_username && (
                  <div className="stat">
                    <div className="stat-titl text-md"> Twitter </div>
                    <div className="stat-md text-white text-sm stat-value">
                      <a
                        href={`https://twitter.com/${twitter_username}`}
                        target="_black"
                        rel="noreferrer"
                      >
                        {twitter_username}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl " />
            </div>
            <div className="stat-title pr-5">Followers</div>
            <div className="stat-value text-3xl pr-5">{followers}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUserFriends className="text-3xl " />
            </div>
            <div className="stat-title pr-5">Following</div>
            <div className="stat-value text-3xl pr-5">{following}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaCodepen className="text-3xl " />
            </div>
            <div className="stat-title pr-5">Public Repos</div>
            <div className="stat-value text-3xl pr-5">{public_repos}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaStore className="text-3xl" />
            </div>
            <div className="stat-title pr-5">Public Gist</div>
            <div className="stat-value text-3xl  pr-5">{public_gists}</div>
          </div>
        </div>
        <UserRepository repos={repos} />
      </div>
    </>
  );
}

export default User;
