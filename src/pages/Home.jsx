import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";
function Home() {
  console.log(process.env);
  return (
    <>
      <UserSearch />
      <UserResults />
    </>
  );
}

export default Home;
