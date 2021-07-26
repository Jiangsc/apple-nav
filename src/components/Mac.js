import React from "react";
import { IconContext } from "react-icons";
import { MdLaptopMac } from "react-icons/md";

const Mac = () => {
    return (
        <div className="subnav mac">
            <div className="maccontainer">
                <IconContext.Provider value={{ style: { fontSize: "50px" } }}>
                    <div>
                        <MdLaptopMac />
                        <p>Mac</p>
                    </div>
                    <div>
                        <MdLaptopMac />
                        <p>Mac</p>
                    </div>
                    <div>
                        <MdLaptopMac />
                        <p>Mac</p>
                    </div>
                    <div>
                        <MdLaptopMac />
                        <p>Mac</p>
                    </div>
                    <div>
                        <MdLaptopMac />
                        <p>Mac</p>
                    </div>
                </IconContext.Provider>
            </div>
        </div>
    );
};

export default Mac;
