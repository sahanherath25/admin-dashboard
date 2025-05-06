"use client"

import React from 'react';
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";


import {sampleData as data} from "@/data/line-data"

function SupportTicketResolved(props) {

    return (
        <ResponsiveContainer height={350} width={"100%"}>

            <LineChart data={data}>

                <Tooltip
                    wrapperClassName={"!text-sm dark:!bg-black rounded-md dark:!border-border"}
                    labelClassName={"font-bold"}
                />

                {/*Marking X and Y Axis*/}
                <XAxis fontSize={12} dataKey="name" stroke={"#888"} />
                <YAxis fontSize={12} />

                {/*Adding a Grid */}
                <CartesianGrid strokeDasharray={"3"}/>

                <Line type={"monotone"} dataKey={"delta"} stroke={"#84cc16"}/>
                <Line type={"monotone"} dataKey={"alpha"} stroke={"#3b82f6"}/>
                <Line type={"monotone"} dataKey={"canary"} stroke={"#f97316"}/>

                {/*Adding  Legends*/}
                <Legend formatter={(value)=>{
                    return <span>{value.toUpperCase()}</span>
                }}/>

            </LineChart>

        </ResponsiveContainer>
    );
}

export default SupportTicketResolved;


