import { useEffect } from "react";
function UserResults() {
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GIHTUB_URL}/users`);

    const data = await response.json();
    console.log(data);
  };
  return <div>UserResults</div>;
}

export default UserResults;
