import React from "react";
import { IconContext } from "react-icons";
import { MdLaptopMac } from "react-icons/md";

const TV = () => {
    return (
        <div className="subnav tv">
        <div className="maccontainer">
            <IconContext.Provider value={{ style: { fontSize: "50px" } }}>
                <div>
                    <MdLaptopMac />
                    <p>TV</p>
                </div>
                <div>
                    <MdLaptopMac />
                    <p>TV</p>
                </div>
                <div>
                    <MdLaptopMac />
                    <p>TV</p>
                </div>
                <div>
                    <MdLaptopMac />
                    <p>TV</p>
                </div>
                <div>
                    <MdLaptopMac />
                    <p>TV</p>
                </div>
            </IconContext.Provider>
        </div>
    </div>
    );
};

export default TV;
