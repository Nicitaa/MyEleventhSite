import {useEffect, useState} from "react";
import {useLazySearchReposQuery, useSearchUsersQuery} from "../store/github/github.api";
import {useDebounce} from "../hooks/debounce";
import {RepoCard} from "../components/RepoCard";

export function Home () {
  const [search,setSearch] = useState('')
  const debounce = useDebounce(search)
  const {isLoading,isError,data} = useSearchUsersQuery(debounce,{
    skip:debounce.length<3,
    refetchOnFocus:true
  })
  const [dropdown,setDropdown] = useState(false)
  useEffect(() => {
    setDropdown(debounce.length>3)
  },[debounce])


  const clickHandler = (username:string) => {
    setDropdown(false)
    fetchRepos(username)
  }

  const [fetchRepos,{isLoading:areReposLoading,data:repos}] = useLazySearchReposQuery()

return (
<div className='flex justify-center mx-auto pt-10'>
  {isError && <p className='text-center text-red-600'>Something went wrong...</p>}
  <div className='relative w-[560px]'>
    <input className='border rounded w-full h-[42px] px-4 py-2 mb-2' type="text"
           value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search for users...'/>
    {dropdown && <ul className='list-none absolute top-[42px] w-full overflow-y-scroll max-h-[200px] shadow-md'>
      {data?.map(user =>
      <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors'
      key={user.id}
      onClick={() => clickHandler(user.login)}
      >{user.login}</li>)}
    </ul>}
    <ul className='list-none'>
      {areReposLoading && <p className='text-center'>Repos are loading...</p>}
      {repos?.map(repo => (
        <RepoCard repo={repo} key={repo.id}/>
      ))}
    </ul>
  </div>

</div>
)
}