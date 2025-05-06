import React from 'react';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {
    BadgeAlertIcon,
    BadgeCheck, LaptopIcon, ListCheck,
    PartyPopperIcon, PieChartIcon, Star, StarIcon,
    UserCheck,
    UserIcon,
    UserRoundCheckIcon,
    UserRoundX, Users
} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import Image from "next/image";
import WorkLocationTrends from "@/app/dashboard/components/employees/WorkLocationTrends";

import {teamLeaders as data} from "@/data/teamLeaders";
import {TooltipContent, TooltipProvider, TooltipTrigger, Tooltip} from "@/components/ui/tooltip";
import {PieChart} from "recharts";
import TeamDistributionChart from "@/app/dashboard/components/teams/TeamDistributionChart";
import SupportTicketResolved from "@/app/dashboard/components/teams/SupportTicketResolved";


function TeamStats() {

    const noOfEmployees = 250;
    const employeesPresent = 190;
    const percentage = (employeesPresent / noOfEmployees) * 100


    return (
        <>
            <div className={"grid lg:grid-cols-3  gap-4 "}>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-base ">
                            Total Teams
                        </CardTitle>
                        <CardContent className="flex justify-between">
                            <div className="flex justify-between gap-2 items-center">
                                <Users size={30}/>
                                <span className={"text-5xl font-bold"}>{noOfEmployees}</span>
                            </div>
                            <div>
                                <Button asChild size={"xs"}>
                                    <Link href={"/dashboard/teams"}>View All</Link>
                                </Button>
                            </div>
                        </CardContent>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader className={"pb-2"}>
                        <CardTitle className="text-base flex justify-between items-center ">
                            <span>Team Leaders</span>
                            <StarIcon className={"text-yellow-500"}/>
                        </CardTitle>
                        <CardContent className={"flex flex-wrap gap-2"}>
                            <div className="flex justify-start gap-2 items-center">
                                {data.map((item) => {
                                    return (
                                        <TooltipProvider key={`${item.firstName}+${item.lastName}`}>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Avatar>
                                                        {
                                                            !!item.avatar && <Image src={item.avatar}
                                                                                    alt={`${item.firstName} ${item.lastName}`}/>
                                                        }
                                                        <AvatarFallback>
                                                            {item.firstName[0]}
                                                            {item.lastName[0]}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    {item.firstName} ${item.lastName}
                                                </TooltipContent>
                                            </Tooltip>

                                        </TooltipProvider>
                                    )
                                })}
                            </div>
                        </CardContent>
                    </CardHeader>
                </Card>
                {/*Pie chart card*/}
                <Card className={""}>
                    <CardHeader className={"pb-0"}>
                        <CardTitle className="text-base flex items-center justify-between gap-2 ">
                            <span>Team Distributions</span>
                            <PieChartIcon/>

                        </CardTitle>
                        <CardContent className="flex items-center gap-2">
                            <TeamDistributionChart/>
                        </CardContent>
                    </CardHeader>
                </Card>

            </div>
            {/*  Pie  Chart*/}
            <Card className={"my-4"}>
                <CardHeader>
                    <CardTitle className={"text-lg flex items-center gap-2"}>
                        <ListCheck/>
                        <span>Support Ticket Resolved</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <SupportTicketResolved/>
                </CardContent>
            </Card>

        </>
    );
}

export default TeamStats;



