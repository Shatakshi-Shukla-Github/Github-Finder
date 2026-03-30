import axios from "axios";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const github=axios.create({
  baseURL:GITHUB_URL,
})
export const searchUsers = async (text) => {
    const params=new URLSearchParams({
      q:text
    })
    // Axios automatically gives the JSON data so we dont have to convert it to JSON data by doing response.json
    const response=await github.get(`/search/users?${params}`)
    return response.data.items
  };

//Get User and Repos:-
export const getUserAndRepos=async(login)=>{
  const [user,repos]=await Promise.all([
    (await github.get(`/users/${login}`)),
    github.get(`users/${login}/repos`),
  ])
  return {user:user.data,repos:repos.data}
}