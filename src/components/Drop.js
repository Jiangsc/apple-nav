import React, { useState, useEffect, useRef } from "react";
import dropCss from "../css/drop.module.css";
import { BsBag } from "react-icons/bs";
import { IconContext } from "react-icons";

const Drop = () => {
    const [isDisplayDrop, setIsDisplayDrop] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }
            setIsDisplayDrop(false);
        };
        document.body.addEventListener("click", onBodyClick, { capture: true });

        return () => {
            document.body.removeEventListener("click", onBodyClick, {
                capture: true,
            });
        };
    }, []);

    const handleClick = () => {
        setIsDisplayDrop(!isDisplayDrop);
    };
    return (
        <div ref={ref}>
            <button id={dropCss.btn} onClick={handleClick}>
                <IconContext.Provider value={{ style: { fontSize: "20px", cursor: 'pointer' } }}>
                    <BsBag />
                </IconContext.Provider>
            </button>
            <div
                id={dropCss.drop}
                style={{ display: isDisplayDrop ? "block" : "none" }}>
                <li>
                    <label>Your Bag is empty</label>
                    <ul>Bag</ul>
                    <ul>Favorites</ul>
                    <ul>Orders</ul>
                    <ul>Account</ul>
                    <ul>Sign in</ul>
                </li>
            </div>
        </div>
    );
};

export default Drop;
