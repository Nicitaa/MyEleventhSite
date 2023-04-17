import {IRepo} from "../models/models";
import {useState} from "react";
import {useActions} from "../hooks/actions";
import {useAppSelector} from "../hooks/redux";


export function RepoCard({repo}:{repo:IRepo}) {

  const {addFavorite,removeFavorite} = useActions()

  const {favorites} = useAppSelector(state => state.github)

  const [isFav,setIsFav] = useState(favorites.includes(repo.html_url))
  const addToFavorites = (event:React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    addFavorite(repo.html_url)
    setIsFav(true)
  }
  const removeFromFavorites = (event:React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    removeFavorite(repo.html_url)
    setIsFav(false)
  }

  return (
  <li className='list-none border rounded py-3 px-5 mb-2 hover:bg-gray-100 hover:shadow-md transition-all'>
    <a href={repo.html_url} target='_blank'>
    <h3 className='text-lg font-bold'>{repo.full_name}</h3>
    <p className='text-sm gap-x-4'>
      Forks:<span className='font-bold mr-2'>{repo.forks}</span>
      Watchers:<span className='font-bold'>{repo.watchers_count}</span>
    </p>
    <p className='text-small font-thin text-gray-600'>{repo?.description}</p>
      {!isFav && <button className='px-4 py-2 mr-2 bg-green-400 rounded'
      onClick={addToFavorites}>Add</button>}
      {isFav && <button className='px-4 py-2 bg-red-400 rounded'
      onClick={removeFromFavorites}>Remove</button>}
    </a>
  </li>
  )
}