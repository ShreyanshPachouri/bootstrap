"use server";

import { prisma } from "@repo/db";

export const createPseudoBankApproval = async (transaction_id : string) => {
    const prob = Math.floor(Math.random() * 100)

    const paymentInfo = await prisma.onRampTransaction.findUnique({
        where: {
            id: transaction_id
        }, 
        select: {
            token: true,
            userId: true,
            amount: true
        }
    })

    setTimeout(async () => {
        if (paymentInfo) {
            if (prob <= 65 ) {
                try {
                    await prisma.$transaction([
                        prisma.onRampTransaction.updateMany({
                            where: {
                                token : paymentInfo.token
                            },

                            data: {
                                status: "Success"
                            }
                        }),

                        prisma.balance.updateMany({
                            where: {
                                userId: paymentInfo.userId
                            },

                            data: {
                                amount: {
                                    increment: paymentInfo.amount
                                },

                                locked: {
                                    decrement: paymentInfo.amount
                                }
                            }
                        })
                    ]);
    
                    return {
                        message: "Captured"
                    }
                } 
                
                catch (e) {
                    console.error(e);
                    return ({
                        message: "Error while processing webhook"
                    })
                }
    
            } 
            
            else {
    
                try {
                    await prisma.$transaction([
                        prisma.onRampTransaction.updateMany({
                                where: {
                                    token : paymentInfo.token
                                },
                                data: {
                                    status: "Failure"
                                }
                            }),
                        prisma.balance.updateMany({
                            where: {
                                userId: paymentInfo.userId
                            },
                            data: {
                                locked: {
                                    decrement: paymentInfo.amount
                                }
                            }
                        })
                        ]);
    
                    return ({
                        message: "Captured"
                    })
                } 
                
                catch (e) {
                    console.error(e);
                    return ({
                        message: "Error while processing webhook"
                    })
                }
            }
        }
    }, 10 * 1000)
}