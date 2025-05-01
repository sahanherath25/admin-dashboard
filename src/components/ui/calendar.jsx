"use client"

import * as React from "react"
import {ChevronLeft, ChevronRight} from "lucide-react"
import {DayPicker, useDayPicker,useNavigation} from "react-day-picker"

import {cn} from "@/lib/utils"
import {buttonVariants} from "@/components/ui/button"
import {format} from "date-fns";
import {Select, SelectContent, SelectItem, SelectTrigger} from "@/components/ui/select";

function Calendar({
                      className,
                      classNames,
                      showOutsideDays = true,
                      ...props
                  }) {
    return (
        <DayPicker
            showOutsideDays={showOutsideDays}
            className={cn("p-3", className)}
            classNames={{
                months: "flex flex-col sm:flex-row gap-2",
                month: "flex flex-col gap-4",
                caption: "flex justify-center pt-1 relative items-center w-full",
                caption_label: "text-sm font-medium ",
                nav: "flex items-center gap-1",
                nav_button: cn(
                    buttonVariants({variant: "outline"}),
                    "size-7 bg-transparent p-0 opacity-50 hover:opacity-100"
                ),
                nav_button_previous: "absolute left-1",
                nav_button_next: "absolute right-1",
                table: "w-full border-collapse space-x-1",
                head_row: "flex",
                head_cell:
                    "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
                row: "flex w-full mt-2",
                cell: cn(
                    "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md",
                    props.mode === "range"
                        ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
                        : "[&:has([aria-selected])]:rounded-md"
                ),
                day: cn(
                    buttonVariants({variant: "ghost"}),
                    "size-8 p-0 font-normal aria-selected:opacity-100"
                ),
                day_range_start:
                    "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",
                day_range_end:
                    "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
                day_selected:
                    "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                day_today: "bg-accent text-accent-foreground",
                day_outside:
                    "day-outside text-muted-foreground aria-selected:text-muted-foreground",
                day_disabled: "text-muted-foreground opacity-50",
                day_range_middle:
                    "aria-selected:bg-accent aria-selected:text-accent-foreground",
                day_hidden: "invisible",
                caption_dropdowns: "flex gap-1",
                ...classNames,
            }}
            components={{
                CaptionLabel: () => null,
                IconLeft: ({className, ...props}) => (
                    <ChevronLeft className={cn("size-4", className)} {...props} />
                ),
                IconRight: ({className, ...props}) => (
                    <ChevronRight className={cn("size-4", className)} {...props} />
                ),
                Dropdown: (dropdownProps) => {
                    console.log("DropDown Props ", dropdownProps)


                    const {fromDate, fromMonth, fromYear, toDate, toMonth, toYear} = useDayPicker()

                    // TODO we need to calculate earliest and latest year


                    let selectedValues = []

                    const {currentMonth,goToMonth}=useNavigation()

                    if (dropdownProps.name === "months") {
                        selectedValues = Array.from({length: 12}, (_, index) => {
                            return {
                                value: index.toString(),
                                label: format(new Date(new Date().getFullYear(), index, 1), "MMM")
                            }
                        })
                    } else if (dropdownProps.name === "years") {

                        const earliestYear = fromYear || fromMonth?.getFullYear() || fromDate?.getFullYear()
                        const latestYear = toYear || toMonth?.getFullYear() || toDate?.getFullYear()

                        if(earliestYear&& latestYear){
                            //    latest=2025 earliest =2000
                            //     We need to show 25 years back from 2025 in the Select
                            const yearsToDisplay=(latestYear-earliestYear)+1;
                            selectedValues=Array.from({length:yearsToDisplay},(_,index)=>{
                                return {
                                    value:(earliestYear+index).toString(),
                                    label:(earliestYear+index).toString(),
                                }
                            })
                        }

                    }

                    const caption=format(currentMonth,dropdownProps.name==="months"?"MMM":"yyyy")

                    // console.log("SELECTED VALUES ", selectedValues)

                    return (
                        <Select onValueChange={(newValue)=>{

                            console.log("SELECTED VALUE IS ",newValue)

                            if(dropdownProps.name==="months"){
                                //     Construct new date based on currnet month
                                const newDate=new Date(currentMonth)
                                newDate.setMonth(parseInt(newValue))
                                console.log("CURRNET MONTH ",currentMonth)

                                goToMonth(newDate)
                            } else if(dropdownProps.name==="years"){
                                //     Construct new date based on currnet month

                                console.log("CURRNET MONTH ",currentMonth)
                                const newDate=new Date(currentMonth)
                                newDate.setFullYear(parseInt(newValue))
                                goToMonth(newDate)
                            }

                        }} value={dropdownProps.value?.toString()}>

                            <SelectTrigger>
                                {caption}
                            </SelectTrigger>
                            <SelectContent>
                                {selectedValues.map((selectValue) => {
                                    return (
                                        <SelectItem
                                            key={selectValue.value}
                                            value={selectValue.value}>
                                            {selectValue.label}
                                        </SelectItem>
                                    )
                                })}
                            </SelectContent>
                        </Select>
                    )


                }
            }}
            {...props} />
    );
}

export {Calendar}
