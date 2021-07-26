import React from "react";
import { IconContext } from "react-icons";
import { MdLaptopMac } from "react-icons/md";

const IPhone = () => {
    return (
        <div className="subnav iphone">
            <div className="maccontainer">
                <IconContext.Provider value={{ style: { fontSize: "50px" } }}>
                    <div>
                        <MdLaptopMac />
                        <p>iPhone</p>
                    </div>
                    <div>
                        <MdLaptopMac />
                        <p>iPhone</p>
                    </div>
                    <div>
                        <MdLaptopMac />
                        <p>iPhone</p>
                    </div>
                    <div>
                        <MdLaptopMac />
                        <p>iPhone</p>
                    </div>
                    <div>
                        <MdLaptopMac />
                        <p>iPhone</p>
                    </div>
                </IconContext.Provider>
            </div>
        </div>
    );
};

export default IPhone;
