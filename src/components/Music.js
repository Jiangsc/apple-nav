import React from "react";
import { IconContext } from "react-icons";
import { MdLaptopMac } from "react-icons/md";

const Music = () => {
    return (
        <div className="subnav music">
            <div className="maccontainer">
                <IconContext.Provider value={{ style: { fontSize: "50px" } }}>
                    <div>
                        <MdLaptopMac />
                        <p>Music</p>
                    </div>
                    <div>
                        <MdLaptopMac />
                        <p>Music</p>
                    </div>
                    <div>
                        <MdLaptopMac />
                        <p>Music</p>
                    </div>
                    <div>
                        <MdLaptopMac />
                        <p>Music</p>
                    </div>
                    <div>
                        <MdLaptopMac />
                        <p>Music</p>
                    </div>
                </IconContext.Provider>
            </div>
        </div>
    );
};

export default Music;
