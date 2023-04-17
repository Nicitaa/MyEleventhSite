import { Link } from "react-router-dom";

export function Navbar () {
return (
<div className="h-[50px] px-4 bg-gray-500 items-center flex justify-between">
    <h3>Github Seacrch</h3>
    <span>
        <Link className="mr-2" to='/'>Home</Link>
        <Link to='/favorites'>Favorites</Link>
    </span>
</div>
)
}