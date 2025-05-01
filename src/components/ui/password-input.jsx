
"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import {Input} from "./input";
import {EyeIcon, EyeOff} from "lucide-react";
import {useState} from "react";

function PasswordInput({
                   className,
                   type,
                   ...props
               },ref) {

    const [showPassword, setShowPassword] = useState(false)


    return (
        <div className={"relative"}>
            {/*    TODO need to render shadcn input not default html input*/}
            <Input type={showPassword?"text":"password"} {...props} ref={ref} className={cn("pr-10 ", className)}/>
            <span className={"absolute top-[7] right-[4] cursor-pointer select-none"}>
            {showPassword ?  <EyeIcon onClick={()=>setShowPassword(false)}/>:<EyeOff onClick={()=>setShowPassword(true)}/>}
            </span>

        </div>
    );
}

export {PasswordInput}
