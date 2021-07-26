import React from "react";
import { useState, useEffect, useRef } from "react";
import searchCss from "../css/search.module.css";
import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons";

const SearchBar = () => {
    const [isDisplay, setIsDisplay] = useState(true);
    const [display, setDisplay] = useState("none");
    const [displayButton, setDisplayButton] = useState("block");
    const ref = useRef();

    let setDisplayToNone = (e) => {
        setDisplay("block");
        setDisplayButton("none");
        ref.current.focus();
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        document.getElementById(searchCss.searchDrop).style.backgroundColor =
            "white";
    };

    let setDisplayToBlock = () => {
        setDisplay("none");
        setDisplayButton("block");
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0)";
    };

    useEffect(() => {
        ref.current.focus();
    }, [isDisplay]);

    const handleClick = (e) => {
        setIsDisplay(!isDisplay);
        isDisplay ? setDisplayToNone(e) : setDisplayToBlock();
    };

    const handleBlur = (e) => {
        console.log(e);
        setIsDisplay(!isDisplay);
        isDisplay ? setDisplayToNone(e) : setDisplayToBlock();
    };

    return (
        <div>
            <button
                onClick={handleClick}
                id={searchCss.but}
                style={{ display: displayButton, cursor: "pointer" }}>
                <IconContext.Provider value={{ style: { fontSize: "17px" } }}>
                    <BsSearch />
                </IconContext.Provider>
            </button>
            <div
                onBlur={handleBlur}
                id={searchCss.di}
                style={{ display: display }}>
                <input
                    ref={ref}
                    id={searchCss.in}
                    placeholder="Search apple.com"
                />
                <div id={searchCss.searchDrop}>
                    <li>
                        <label>QUICK LINKS</label>

                        <ul>Visiting an Apple Store FAQ</ul>
                        <ul>Shop Apple Store Online</ul>
                        <ul>Accessories</ul>
                        <ul>AirPods</ul>
                        <ul>AirTag</ul>
                    </li>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
