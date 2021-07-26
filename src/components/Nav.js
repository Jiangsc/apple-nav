import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Drop from "./Drop";
import { FaApple } from "react-icons/fa";
import { IconContext } from "react-icons";

let TopNav = () => {
    return (
        <header>
            <nav>
                <Link to="/">
                    <IconContext.Provider
                        value={{ style: { fontSize: "20px" } }}>
                        <FaApple />
                    </IconContext.Provider>
                </Link>
                <Link to="/mac">Mac</Link>
                <Link to="/ipad">iPad</Link>
                <Link to="/iphone">iPhone</Link>
                <Link to="/watch">Watch</Link>
                <Link to="/tv">TV</Link>
                <Link to="/music">Music</Link>
                <Link to="/">Support</Link>
                <SearchBar />
                <Drop />
            </nav>
        </header>
    );
};

export default TopNav;
