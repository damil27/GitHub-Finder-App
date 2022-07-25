import React, { useEffect, useContext } from "react";
import GithubContext from "../../context/gihhub/GithubContext";
import UserItems from "./UserItems";

function UserResults(props) {
  const { users, isLoading, fetchUsers } = useContext(GithubContext);
  useEffect(() => {
    fetchUsers();
  }, []);

  if (!isLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItems key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <h1> Loading...</h1>;
  }
}

export default UserResults;
