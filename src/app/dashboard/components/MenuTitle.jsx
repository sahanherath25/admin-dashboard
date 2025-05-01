import React from 'react';
import {PersonStandingIcon} from "lucide-react";

function MenuTitle(props) {
    return (

        <div className="title-wrapper border-b dark-border-b-black pb-4">
            <h4 className={"title-wrapper flex items-center text-primary"}>
                <PersonStandingIcon size={40} color={"#85193C"}/> Admin Sahan
            </h4>
        </div>

    );
}

export default MenuTitle;