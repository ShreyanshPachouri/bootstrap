'use client'
import { Button } from "../../../../../packages/ui/src/Button";
import { Card } from "../../../../../packages/ui/src/Card";
import { Center } from "../../../../../packages/ui/src/Center";
import { Input } from "../../../../../packages/ui/src/Input";
import { Title } from "../../../../../packages/ui/src/Title";
import { useState } from "react";
import { signIn } from "next-auth/react";
import SubSignHeading from "../../../components/SignSubHeading";

export default function SignUp() {
    const [num, setNum] = useState('');
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('')
    const [confirmPass, setConfirmPass] = useState('');


    return <div className="h-full pt-20 sm:pt-0">
        <Center>
            <Card>
                <div className="w-75 md:w-120!">
                    <Title title="Sign Up"/>
                    <SubSignHeading/>
                    <div className="flex flex-col md:flex-row! justify-around w-full gap-0 md:gap-5!">
                        <div className="flex flex-col w-full">
                            <Input name="Name" fieldType="text" onChange={setName} />
                            <Input name="Number" fieldType="text" onChange={setNum} />
                            <Input name="Email" fieldType="text" onChange={setEmail} />
                        </div>
                        <div className="flex flex-col w-full">
                            <Input name="Password" fieldType="password" onChange={setPass} />
                            <Input name="Confirm Password" fieldType="password" onChange={setConfirmPass} />
                        </div>
                    </div>
                    
                    <div className=" flex justify-center p-5">
                        <Button onClick={async () => {
                            if (pass == confirmPass) {
                                await signIn("credentials", {
                                    redirect: true,
                                    callbackUrl: '/dashboard',
                                    name: name,
                                    password: pass,
                                    phone: num,
                                    email
                                })
                            }

                            alert("Password Does Not Match")
                        }}>
                            Submit
                        </Button>
                    </div>

                </div>
            </Card>
        </Center>
    </div>
}