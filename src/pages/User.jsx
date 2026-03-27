import { useContext, useEffect } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";
import Spinner from "../components/layout/assets/Spinner";
function User() {
  const params = useParams();
  const { getUser, user, loading } = useContext(GithubContext);
  useEffect(() => {
    getUser(params.login);
  }, [params.login]);
  if (loading) {
    return <Spinner />;
  } else {
    return <div>{user?.login}</div>;
  }
}
export default User;
