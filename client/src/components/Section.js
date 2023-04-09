import React from "react";

const Section = (props)=>{
    return (
        <div className="section w-100 section py-5">
            <h2 className="w-100 text-center">WELCOME!</h2>
            <div className="d-flex flex-row w-100 justify-content-center">
              {props.children}
            </div>
        </div>
    )
}

export default Section;