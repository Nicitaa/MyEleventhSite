import {useAppSelector} from "../hooks/redux";

export function Favorites () {

  const {favorites} = useAppSelector(state => state.github)

  if(favorites.length === 0) return <p className='text-center'>Nothing to show.</p>
return (
<div className='flex justify-center mx-auto pt-10'>
  <ul className='list-none'>
    {favorites.map(f=>(
      <li key={f}>
        <a href={f}>{f}</a>
      </li>
    ))}
</ul>
</div>
)
}