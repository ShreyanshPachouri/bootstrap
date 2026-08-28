"use server"

import { prisma } from "@repo/db"
import { authOptions } from "../auth"
import { getServerSession } from "next-auth"
import { Balance } from "@repo/db"

export default async function createP2PTransfer({amount, number}: {amount: string, number: string}){
    const session = await getServerSession(authOptions)

    const from = session?.user.id

    if(!from){
        return {
            message: "Not a valid request"
        }
    }

    const to = await prisma.user.findUnique({
        where: {
            number: number
        }
    })
    
    if(!to){
        return {
            message: "The receiver does not exist"
        }
    }

    if(to.id == from){
        return {
            message: "You cannot send money to yourself"
        }
    }

    return prisma.$transaction(async(transaction) => {
        const rows = await transaction.$queryRaw<Balance[]>`SELECT * FROM "Balance" WHERE "userId" = ${from} FOR UPDATE;`

        const fromBalance = rows[0]

        if(!fromBalance || Number(amount) > fromBalance.amount){
            return {
                message: "Insufficient balance"
            }
        }

        await transaction.balance.update({
            where: {
                userId: from
            },

            data: {
                amount: {
                    decrement: (Number(amount))
                }
            }
        })

        await transaction.balance.update({
            where: {
                userId: to.id
            },

            data: {
                amount: {
                    increment: Number(amount)
                }
            }
        })

        await transaction.p2pTransfer.create({
            data: {
                amount: Number(amount),
                timestamp: new Date(),
                fromUserId: from,
                toUserId: to.id
            }
        })

        return {
            message : "Transaction Successful"
        }
    })
}