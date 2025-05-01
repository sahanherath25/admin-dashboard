"use client"
//because this component use a hook when toggle

import React, {useEffect, useState} from 'react';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {FaRegMoon} from "react-icons/fa";
import {CiLight} from "react-icons/ci";

function ThemeToggleButton({className}) {

    const [isDarkMode, setIsDarkMode] = useState(true)

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        } else {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className={className} onClick={()=>setIsDarkMode(!isDarkMode)}>{isDarkMode?<CiLight size={30}/>:<FaRegMoon size={30}/>}</TooltipTrigger>
                <TooltipContent>
                    {isDarkMode ? <p>light theme</p> : <p>dark theme</p>}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )


}

export default  ThemeToggleButton
