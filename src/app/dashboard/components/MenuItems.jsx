"use client"
import React from 'react';
import {usePathname} from "next/navigation";
import MenuItem from "@/app/dashboard/components/MenuItem";

function MenuItems() {

    const pathname=usePathname()

    console.log("Current path namrr",pathname)

    return (
        <div className={"menu-items-wrapper flex flex-col py-4 grow"}>
            <MenuItem href={"/"}>Home</MenuItem>
            <MenuItem href={"/dashboard"}>Dashboard</MenuItem>
            <MenuItem href={"/dashboard/teams"}>Teams</MenuItem>
            <MenuItem href={"/dashboard/employees"}>Employees</MenuItem>
            <MenuItem href={"/dashboard/settings"}>Settings</MenuItem>
            {/*<MenuItem href={"/login"}>Login</MenuItem>*/}
            {/*<MenuItem href={"/signup"}>SignUp</MenuItem>*/}
            {/*<MenuItem href={"/settings"}>Settings</MenuItem>*/}
        </div>
    );
}

export default MenuItems;