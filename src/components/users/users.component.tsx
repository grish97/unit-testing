import {useEffect, useState} from "react";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(users => {
        setUsers(users.map((user: any) => `${user.firstName} ${user.lastName}`))
      })
      .catch((e) => {
        console.log(e);
        setError("Something went wrong");
      })
  }, []);

  return (
    <div>
      <h1>Users List</h1>

      <div className="users-list">
        {error && <p>error</p>}

        {!error && users.length > 0 && (
          <ul>
            {users.map((userName, key) => (
              <li key={key}>{userName}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
