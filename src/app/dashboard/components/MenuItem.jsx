import React from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";

function MenuItem({children,href}) {
    const pathname=usePathname()


    const isActive=pathname===href;
    console.log("Current Path is ",pathname)

    return(
        <Link href={href} className={` p-1 hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground hover:text-foreground  ${isActive &&' bg-primary hover:bg-primary dark:hover:bg-white hover:text-foreground   text-foreground '}`}>{children}</Link>
    )

        ;
}

export default MenuItem;