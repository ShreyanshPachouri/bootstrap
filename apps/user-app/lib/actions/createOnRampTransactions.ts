"use server"

import { prisma } from "@repo/db"
import { authOptions } from "../auth"
import { getServerSession } from "next-auth"

export const createOnRampTransactions = async(provider: string, amount: number) => {
    const session = await getServerSession(authOptions)

    if(!session?.user.id){
        return {
            message: "Unauthenticated request"
        }
    }

    else if(amount == 0){
        return {
            message: "No amount given"
        }
    }

    else{
        const token = String(Math.floor(Math.random() * 100000))

        try{
            const transaction = await prisma.$transaction([
                prisma.onRampTransaction.create({
                    data: {
                        userId: session.user.id,
                        status: "Processing",
                        token: token,
                        amount: amount,
                        startTime: new Date(),
                        provider: provider
                    }
                }),

                prisma.balance.updateMany({
                    where: {
                        userId: session.user.id
                    },

                    data: {
                        locked: {
                            increment: amount
                        }
                    }
                })
            ])

            return {
                message: "Done",
                transaction_id: transaction[0].id
            }
        }

        catch(error){
            console.log("Error in creating transaction", error)

            return{
                message: "Error during transaction"
            }
        }
    }
}