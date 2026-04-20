import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav className="flex text-sm">
            <Link to={"/about-us"}>About Us</Link>
            <Link to={"/user-managment"}>User Managment</Link>
        </nav>
    );
};

export { NavBar };