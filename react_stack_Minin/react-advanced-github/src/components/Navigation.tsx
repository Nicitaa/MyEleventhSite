import { Link } from "react-router-dom";

export function Navigation () {
return (
<nav className="flex justify-between h-[50px] px-4 shadow-md bg-gray-500 items-center">
<h3 className="font-bold">Github search</h3>

<span>
    <Link className="mr-2" to="/">Home</Link>
    <Link to="/favourites">Favourites</Link>
</span>
</nav>
)
}