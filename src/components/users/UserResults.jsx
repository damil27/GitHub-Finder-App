import React, { useEffect, useState } from "react";
import UserItems from "./UserItems";

function UserResults(props) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`);
    const data = await response.json();
    setUsers(data);
    setIsLoading(false);
  };
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
