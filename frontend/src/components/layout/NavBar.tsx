import { Link } from "react-router-dom";

function NavBar(){
    return(
        <>
            <Link to={"/about-us"}>About Us</Link>
            <Link to={"/user-managment"}>User Managment</Link>
        </>
    );
};

export { NavBar };