'use client'

import { Button } from "../../../../../packages/ui/src/Button";
import { Card } from "../../../../../packages/ui/src/Card";
import { Center } from "../../../../../packages/ui/src/Center"
import { Input } from "../../../../../packages/ui/src/Input";
import { Title } from "../../../../../packages/ui/src/Title";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SubSignHeading from "../../../components/SignSubHeading";

export default function SignIn() {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    return <div className="h-full ">
        <Center>
            <Card>
                <div className="w-70 md:w-80!">
                    <Title title="Sign In"/>
                    <SubSignHeading />
                    <Input fieldType="text" name="Number" onChange={setPhone}/>
                    <Input fieldType="password" name="Password" onChange={setPassword}/>
                    <div className="flex justify-center pt-4">
                        <Button onClick={async () => {
                            const resolve = await signIn("credentials", {
                                redirect: false,
                                phone,
                                password,
                                callbackUrl: '/dashboard'
                            });

                            if (resolve?.error == "UserNotFound") {
                                alert("No User Found");
                            } else if (resolve?.error == "MissingCredentials") {
                                alert("Invalid Credentials");
                            } else if (!resolve?.error) {
                                router.push('/dashboard')
                            } else {
                                alert('Error')
                            }

                            }}>

                            Submit
                        </Button>
                    </div>
                </div>
            </Card>
        </Center>
    </div>
}