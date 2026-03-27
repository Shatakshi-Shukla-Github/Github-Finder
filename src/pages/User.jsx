import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { useContext, useEffect } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Spinner from "../components/layout/assets/Spinner";
function User() {
  const params = useParams();
  const { getUser, user, loading } = useContext(GithubContext);
  useEffect(() => {
    getUser(params.login);
  }, [params.login]);
  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="w-full mx-auto lg:w-10/12">
          <div className="mb-4">
            <Link to="/" className="btn btn-ghost">
              Back To Search
            </Link>
          </div>
        </div>
      </>
    );
  }
}
export default User;
