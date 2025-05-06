import React from 'react';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {
    BadgeAlertIcon,
    BadgeCheck, LaptopIcon,
    PartyPopperIcon,
    UserCheck,
    UserIcon,
    UserRoundCheckIcon,
    UserRoundX
} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import Image from "next/image";
import WorkLocationTrends from "@/app/dashboard/components/employees/WorkLocationTrends";



function EmployeeStats() {

    const noOfEmployees=250;
    const employeesPresent=190;
    const percentage=(employeesPresent/noOfEmployees)*100

    return (
        <>
            <div className={"grid lg:grid-cols-3  gap-4 "}>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-base ">
                            Total Employees
                        </CardTitle>
                        <CardContent className="flex justify-between">
                            <div className="flex justify-between gap-2 items-center">
                                <UserIcon size={30}/>
                                <span className={"text-5xl font-bold"}>25000</span>
                            </div>
                            <div>
                                <Button asChild size={"xs"}>
                                    <Link href={"/dashboard/employees"}>View All</Link>
                                </Button>
                            </div>
                        </CardContent>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader className={"pb-2"}>
                        <CardTitle className="text-base ">
                            Employees Present
                        </CardTitle>
                        <CardContent className={""}>
                            <div className="flex justify-start gap-2 items-center">
                                {percentage >75?  <UserCheck size={30}/> : <UserRoundX/>}
                                <span className={"text-5xl font-bold"}>{percentage}</span>
                            </div>
                        </CardContent>
                        <CardFooter>
                        <span className={`flex items-center ${percentage>75?'text-green-500':"text-red-600"}  gap-1`}>
                            {percentage>75 ?
                                <> <BadgeCheck/>80% of employees are Present </> :
                                <> <BadgeAlertIcon/>   80% of employees are Present</>
                            }

                          </span>
                        </CardFooter>
                    </CardHeader>
                </Card>
                <Card className={"border-red-500"}>
                    <CardHeader className={"pb-2"}>
                        <CardTitle className="text-base ">
                            Employee Of the month
                        </CardTitle>
                        <CardContent className="flex items-center gap-2">
                            <Avatar>
                                <Image width={30} height={30} src={"/images/cm.jpg"} alt={"avatar"}/>
                                <AvatarFallback>CH</AvatarFallback>
                            </Avatar>
                            <span className={"text-2xl"}>Sahan Herath</span>

                        </CardContent>
                        <CardFooter className="flex items-center gap-2 text-xs text-muted-foreground mt-auto">
                            <PartyPopperIcon className={"text-pink-500"}/>
                            <span>Congratulation</span>
                        </CardFooter>
                    </CardHeader>
                </Card>

            </div>

        {/*    Chart*/}
            <Card className={"my-4"}>
                <CardHeader>
                    <CardTitle className={"text-lg flex items-center gap-2"}>
                        <LaptopIcon/>
                        <span>Employee Work Location trend</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <WorkLocationTrends/>
                </CardContent>
            </Card>

        </>
    );
}

export default EmployeeStats;


