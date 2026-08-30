"use client"

import { Card } from "../../../packages/ui/src/Card" 
import { Title } from "../../../packages/ui/src/Title" 
import { Input } from "../../../packages/ui/src/Input" 
import { Select } from "../../../packages/ui/src/Select" 
import { Button } from "../../../packages/ui/src/Button" 
import { Center } from "../../../packages/ui/src/Center" 
import { useTransfer } from "@repo/store"
import { createOnRampTransactions } from "../lib/actions/createOnRampTransactions"
import { useEffect, useState } from "react"
import { AlertBox } from "../../../packages/ui/src/AlertBox"
import { createPseudoBankApproval } from "../lib/actions/createPseudoBankApproval"

export const AddMoneyCard = () => {
    const options = useTransfer((s) => s.options);
    const [message, setMessage] = useState('');
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(false)
        }, 10000);}, [show, message])
        
    

    // state update functions
    const updateProvider = useTransfer((s) => s.updateProvider);
    const updateAmount = useTransfer((s) => s.updateAmount);
    
    // states for user input
    const amount = useTransfer((s) => s.amount);
    const selectedProvider = useTransfer((s) => s.selectedProvider);

    console.log(amount, selectedProvider)

    return <div>
        <Card>
            <Title title="Add Money"/>
            <Input onChangeNum={updateAmount} name="Amount" />
            <Select onChange={updateProvider} title="Bank" options={options} />
            <Center>
                <Button onClick={async () => {
                    const data = await createOnRampTransactions(selectedProvider.name, amount)
                    setShow(true)
                    setMessage(data?.message)
                    // window.location.href = selectedProvider.url
                    if (data.transaction_id) await createPseudoBankApproval(data.transaction_id)  
                }}>
                    Submit  
                </Button>
            </Center>
        </Card>
        {show ? <AlertBox message={message} /> : null }
    </div>
} 