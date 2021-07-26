import React from "react";
import { IconContext } from "react-icons";
import { MdLaptopMac } from "react-icons/md";

const IPad = () => {
    return (
        <div className="subnav ipad">
            <div className="maccontainer">
                <IconContext.Provider value={{ style: { fontSize: "50px" } }}>
                    <div>
                        <MdLaptopMac />
                        <p>iPad</p>
                    </div>
                    <div>
                        <MdLaptopMac />
                        <p>iPad</p>
                    </div>
                    <div>
                        <MdLaptopMac />
                        <p>iPad</p>
                    </div>
                    <div>
                        <MdLaptopMac />
                        <p>iPad</p>
                    </div>
                    <div>
                        <MdLaptopMac />
                        <p>iPad</p>
                    </div>
                </IconContext.Provider>
            </div>
        </div>
    );
};

export default IPad;
