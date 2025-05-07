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

const formSchema = z.object({
    email: z.string().email(),
    password: z.string()
})


function LoginPage() {

    const form = useForm({
        resolver: zodResolver(formSchema)
    })
    const onSubmit = (formData) => {

        console.log("Form Submitted ", formData)

    }

    const onError = (errors) => {

        console.log("Error ", errors)

    }

    return (
        <section className={"   flex  items-center  border-red-600  h-screen w-full "}>
            <div className=" flex justify-center items-center content wrapper   w-full  ">

                <Card className={" mx-auto flex flex-col w-full max-w-sm"}>
                    <SiSimplelogin size={50} className={"self-center"} color={"#73EC8B"}/>
                    <CardHeader>
                        <CardTitle>Login</CardTitle>
                        <CardDescription>Login to your oncloudnine account</CardDescription>
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
                                            <FormDescription>
                                                This is the email address of you provided
                                            </FormDescription>
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
                                                <Input placeholder="password" {...field} value={field.value || ""}/>
                                            </FormControl>
                                            <FormDescription>
                                                This is the password provided
                                            </FormDescription>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />


                                <Button type="submit">
                                    <Link href={"/dashboard"}>
                                        Submit
                                    </Link>
                                </Button>


                            </form>
                        </Form>
                    </CardContent>
                    <CardFooter className={"justify-between"}>
                        <small>Dont have an account?</small>
                        <Button>
                            <Link href={"/signup"}>SignUp</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>

        </section>
    );
}

export default LoginPage;

