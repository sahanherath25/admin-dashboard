import React from 'react';
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import Link from "next/link"

function MenuFooter(props) {
 return (
  <footer className="footer flex items-center justify-around gap-2  ">
      <Avatar>
          <AvatarFallback className={"bg-pink-300 dark:bg-pink-800"}>SH</AvatarFallback>
      </Avatar>
      <Link href={"/"} className={"underline"}>Logout</Link>
  </footer>
 );}

export default MenuFooter;