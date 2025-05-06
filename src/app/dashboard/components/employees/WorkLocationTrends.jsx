"use client"

import React from 'react';
import {data as myData} from "@/data/data"
import {Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

const data = myData;

function WorkLocationTrends(props) {
    return (

        <ResponsiveContainer height={350} width={"100%"}>

            <BarChart data={data} className={"[&_.recharts-tooltip-cursor]:fill-zinc-200  dark:[&_.recharts-tooltip-cursor]:fill-zinc-800"}>

                <XAxis dataKey="name" stroke={"#888888"} fontSize={12}/>
                <YAxis  stroke={"#888888"} fontSize={12}/>

                <Tooltip
                    wrapperClassName={"!text-sm dark:!bg-black rounded-md dark:!border-border"}
                    labelClassName={"font-bold"}
                    formatter={(value,name)=>{
                        // value=== Data Item in Array
                        if(name==="wfh"){
                            // need to return array
                            return [value,"work from home"]
                        }
                        else if(name==="office"){
                            // need to return array
                            return [value,"work from office"]
                        }

                    }}
                />

                <Legend  iconType={"circle"} formatter={(value)=>{

                    if(value==="wfh"){
                       return <div className={"text-sm"}>Work From Home</div>
                    }
                    else if(value==="office"){
                       return <div className={"text-sm"}>WorkFrom Office</div>
                    }
                }}/>

                <Bar  dataKey={"office"} stackId={1} fill={"#85193C"} />
                <Bar dataKey={"wfh"} stackId={1} fill={"#ffdd57"} radius={[4,4,4,4]}/>

            </BarChart>

        </ResponsiveContainer>

    );
}

export default WorkLocationTrends;


