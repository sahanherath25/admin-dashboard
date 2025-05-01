"use client";
import React from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import * as z from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {SiSimplelogin} from "react-icons/si";
import {FaRegUserCircle} from "react-icons/fa";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Calendar} from "@/components/ui/calendar";
import {Calendar1Icon} from "lucide-react";
import {format} from "date-fns";
import {PasswordInput} from "@/components/ui/password-input";
import {Checkbox} from "@/components/ui/checkbox";

const formSchema = z.object({
    email: z.string().email(),
    accountType: z.enum(["company", "personal"]),
    companyName: z.string().optional(),
    noOfEmployees: z.coerce.number(),
    date: z.date().refine((date) => {

        // TODO true means display validation error
        //     Current Date
        const currentDate = new Date();

        const eighteenYearsAgo = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());

        return date <= eighteenYearsAgo

    }, "you must be at least 18 Years old"),
    password: z.string().min(8,"Password at least contain 8 characters long").refine((password)=>{
        return /[!@#$%^&*(),.?":{}|<>]/.test(password) && /[A-Z]/.test(password)
    },"Password must contain at least one special character"),
    confirmPassword: z.string(),
    acceptTerms:z.boolean({required_error:"You must accept the terms and Conditions"})

}).superRefine((data, context) => {

    if (data.accountType === "company" && !data.companyName) {

        context.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["companyName"],
            message: "Company Name is Reuqred"
        })
    }

    if (data.accountType === "company" && !data.noOfEmployees && data.noOfEmployees < 1) {
        context.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["noOfEmployees"],
            message: "Please Specify No of Employees"
        })
    }
    if (data.password !== data.confirmPassword ) {
        context.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["confirmPassword"],
            message: "Password is not matching"
        })
    }
})

const dobFromDate=new Date();
dobFromDate.setFullYear(dobFromDate.getFullYear()-100)




function SignUpPage() {

    const form = useForm({
        resolver: zodResolver(formSchema)
    })

    const onSubmit = (formData) => {
        console.log("Form Submitted ", formData)

    }
    const onError = (errors) => {
        console.log("Error ", errors)
    }

    // creating a watcher for select field
    const accountType = form.watch("accountType")

    console.log("ACCOUTN TYPE ", accountType)

    return (
        <section className={"   flex  items-center  border-red-600  h-screen w-full "}>
            <div className=" flex justify-center items-center content wrapper   w-full  ">

                <Card className={" mx-auto flex flex-col w-full max-w-sm"}>
                    <FaRegUserCircle size={50} className={"self-center"} color={"#73EC8B"}/>
                    <CardHeader>
                        <CardTitle>SignUp</CardTitle>
                        <CardDescription>Signup to your oncloudnine account</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form} >
                            <form className={"flex flex-col"} onSubmit={form.handleSubmit(onSubmit, onError)}>
                                {/*Email Field*/}
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="email" {...field} value={field.value || ""}/>
                                            </FormControl>
                                            {/*<FormDescription>*/}
                                            {/*    This is the email address of you provided*/}
                                            {/*</FormDescription>*/}
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                {/*Password Field*/}
                                {/*<FormField*/}
                                {/*    control={form.control}*/}
                                {/*    name="password"*/}
                                {/*    render={({field}) => (*/}
                                {/*        <FormItem>*/}
                                {/*            <FormLabel>Password</FormLabel>*/}
                                {/*            <FormControl>*/}
                                {/*                <Input placeholder="password" {...field} value={field.value || ""}/>*/}
                                {/*            </FormControl>*/}
                                {/*            <FormDescription>*/}
                                {/*                This is the password provided*/}
                                {/*            </FormDescription>*/}
                                {/*            <FormMessage/>*/}
                                {/*        </FormItem>*/}
                                {/*    )}*/}
                                {/*/>*/}

                                <FormField
                                    control={form.control}
                                    name="accountType"
                                    render={({field}) => (
                                        <FormItem className={"my-4"}>
                                            <FormLabel>Account Type</FormLabel>

                                            <Select onValueChange={field.onChange}>
                                                <FormControl>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Select a Account"/>
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="personal">Personal</SelectItem>
                                                    <SelectItem value="company">Company</SelectItem>
                                                </SelectContent>
                                            </Select>

                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />


                                {accountType === "company" &&
                                    <>
                                        <FormField
                                            control={form.control}
                                            name="companyName"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Company Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Company Name" {...field}
                                                               value={field.value || ""}/>
                                                    </FormControl>
                                                    {/*<FormDescription>*/}
                                                    {/*    This is the password provided*/}
                                                    {/*</FormDescription>*/}
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="noOfEmployees"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>No Of Employees</FormLabel>
                                                    <FormControl>
                                                        <Input type={"number"} min={0}
                                                               placeholder="No of Employees" {...field}
                                                               value={field.value || ""}/>
                                                    </FormControl>
                                                    {/*<FormDescription>*/}
                                                    {/*    This is the password provided*/}
                                                    {/*</FormDescription>*/}
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                    </>
                                }

                                {/*Date Field*/}

                                <FormField
                                    control={form.control}
                                    name="date"
                                    render={({field}) => (
                                        <FormItem className={"flex flex-col pt-2 mb-4"}>
                                            <FormLabel>Date Of Birth</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button variant={"outline"}
                                                                className={"normal-case flex justify-between"}>
                                                            {!!field.value ? format(field.value,"PPP") : <span>Pick a Date</span>}
                                                            <Calendar1Icon/>
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>

                                                <PopoverContent align={"start"} className={"w-auto p-0"}>
                                                    <Calendar
                                                        mode={"single"}
                                                        defaultDate={new Date()}
                                                        defaultMonth={field.value}
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        fixedWeeks
                                                        weekStartsOn={1}
                                                        fromDate={dobFromDate}
                                                        toDate={new Date()}
                                                        captionLayout={"dropdown-buttons"}
                                                        // disabled={(date)=>{
                                                        //     return date.getDay()===0 || date.getDay()===6
                                                        // }}

                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />

                                {/*Password Field*/}
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <PasswordInput
                                                    type={"password"}
                                                    placeholder="Password" {...field}
                                                    value={field.value || ""}
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />

                                {/* Confirm Password Field*/}
                                <FormField

                                    control={form.control}
                                    name="confirmPassword"
                                    render={({field}) => (
                                        <FormItem className={"my-4"}>
                                            <FormLabel>Confirm Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type={"password"}
                                                    placeholder="Confirm Password" {...field}
                                                       value={field.value || ""}/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />


                                {/*Checkbox for Terms and Conditions*/}
                                <FormField
                                    control={form.control}
                                    name="acceptTerms"
                                    render={({field}) => (
                                        <FormItem className={"my-4"}>
                                            <div className="flex gap-2 items-center">

                                                <FormControl>
                                                    <Checkbox checked={field.value} onCheckedChange={field.onChange}/>
                                                </FormControl>
                                                <FormLabel>I Accept the terms and condition</FormLabel>
                                            </div>
                                            <FormDescription>
                                                By signing up you agree to our <Link href={"/"} className={"text-primary hover:underline"}>Terms</Link> and conditions
                                            </FormDescription>

                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />


                                <Button type="submit">Submit</Button>
                            </form>
                        </Form>
                    </CardContent>
                    <CardFooter className={"justify-between"}>
                        <small>Already have an account?</small>
                        <Button>
                            <Link href={"/login"}>Login</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>

        </section>
    );
}

export default SignUpPage;