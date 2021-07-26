import React from "react";
import { IconContext } from "react-icons";
import { MdLaptopMac } from "react-icons/md";

const Watch = () => {
    return (
        <div className="subnav watch">
            <div className="maccontainer">
                <IconContext.Provider value={{ style: { fontSize: "50px" } }}>
                    <div>
                        <MdLaptopMac />
                        <p>Watch</p>
                    </div>
                    <div>
                        <MdLaptopMac />
                        <p>Watch</p>
                    </div>
                    <div>
                        <MdLaptopMac />
                        <p>Watch</p>
                    </div>
                    <div>
                        <MdLaptopMac />
                        <p>Watch</p>
                    </div>
                    <div>
                        <MdLaptopMac />
                        <p>Watch</p>
                    </div>
                </IconContext.Provider>
            </div>
        </div>
    );
};

export default Watch;
