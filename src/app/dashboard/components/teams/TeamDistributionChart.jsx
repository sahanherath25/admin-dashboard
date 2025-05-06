"use client"
import React from 'react';
import {PieChart, ResponsiveContainer, Pie, Cell, Tooltip} from "recharts";

// Import Data
import {data} from "@/data/data-pie"

function TeamDistributionChart(props) {
 return (
  <ResponsiveContainer width={"100%"} height={150}>
      <PieChart>

          <Tooltip  wrapperClassName={"dark:[&_.recharts-tooltip-item]:!text-white  [&_.recharts-tooltip-item]:!text-black  !text-sm dark:!bg-black rounded-md dark:!border-border"}
                    labelClassName={"font-bold"}/>

          <Pie data={data} dataKey={"value"} nameKey={"name"}>
              {data.map((dataItem,index)=>{
                return    <Cell key={index} fill={dataItem.color} />
              })}
          </Pie>
      </PieChart>

  </ResponsiveContainer>
 )
}



export default TeamDistributionChart;

