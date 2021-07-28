import React, { useEffect } from "react";
import { BsLaptop } from "react-icons/bs";
import { IconContext } from "react-icons";

const SubNav = (props) => {
    return (
        <div className="subnav" style={props.style}>
            {props.data.map((d) => {
                return (
                    <div>
                        <IconContext.Provider
                            value={{
                                style: {
                                    fontSize: "35px",
                                },
                            }}>
                            <BsLaptop />
                        </IconContext.Provider>
                        <p key={d.icon}>{d.product}</p>
                    </div>
                );
            })}
        </div>
    );
};
export default SubNav;
