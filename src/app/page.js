import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import {RiAdminFill} from "react-icons/ri";

export default function Home() {

    return (
        <section className={"h-screen w-full flex items-center"}>
            <div className={"flex flex-col justify-center items-center w-[90%] mx-auto "}>

                <div className="text-wrapper flex justify-between items-center py-2">
                    <RiAdminFill size={40} color={"#D91656"}/>
                    <h1 className={"ml-5"}> Welcome to the Admin Portal</h1>
                </div>

                <p>Manage and monitor your dashboard efficiently.</p>
                <div className="button-wrapper flex items-center py-8">
                    <Button asChild className={"mr-2"}>
                        <Link href={"/login"}>Login</Link>
                    </Button>
                    <span>Or</span>
                    <Button className={"ml-2"} asChild variant={"outline"}>
                        <Link href={"/signup"}>Signup</Link>
                    </Button>
                </div>
            </div>
        </section>

    )
}
