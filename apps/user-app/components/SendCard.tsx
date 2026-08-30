"use client"

import { Button } from "../../../packages/ui/src/Button"
import { Card } from "../../../packages/ui/src/Card" 
import { Center } from "../../../packages/ui/src/Center" 
import { Input } from "../../../packages/ui/src/Input" 
import { Title } from "../../../packages/ui/src/Title" 
import { AlertBox } from "../../../packages/ui/src/AlertBox"
import { useEffect, useState } from "react"
import createP2PTransfer from "../lib/actions/createP2PTransfer"

export const SendCard = () => {
    const [num, setNum] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(false)
        }, 10000);}, [show, message])

    return <div className="w-full">
                <Card>
                    <Title title="Send"/>
                    <Input onChange={setNum} name="Number" fieldType="text" />
                    <Input onChange={setAmount} name="Amount"/>
                    <Center>
                        <Button onClick={async () => {
                            const data = await createP2PTransfer({amount, number: num});
                            setShow(true)
                            setMessage(data?.message)
                        }}>
                            Send
                        </Button>
                    </Center>
                </Card>
                {show ? <AlertBox message={message} /> : null }
            </div>    
}