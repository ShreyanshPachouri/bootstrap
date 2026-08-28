import 'dotenv/config'
import { prisma } from "@repo/db";
import express from "express";

const app = express();

app.use(express.json())

app.post("/hdfcWebhook", async (req, res) => {

    const prob = Math.floor(Math.random() * 100) 

    // add zod validation
    const paymentInfo: {
        token : string,
        userId: string,
        amount: number
    } = {
        token : req.body.token,
        userId : req.body.user_identifier,
        amount : req.body.amount
    };
    // update balance in db, add txn 
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
                    data : {
                        amount: {
                            increment: paymentInfo.amount
                        }
                    }
                })
            ]);

            res.json({
                message: "Captured"
            }) 
        } catch (e) {
            console.error(e);
            res.status(411).json({
                message: "Error while processing webhook"
            })
        }
    } else {
        try {
            await prisma.onRampTransaction.updateMany({
                    where: {
                        token : paymentInfo.token
                    },
                    data: {
                        status: "Failure"
                    }
                });

            res.json({
                message: "Captured"
            }) 
        } catch (e) {
            console.error(e);
            res.status(411).json({
                message: "Error while processing webhook"
            })
        }
    }
})

app.listen(3003, () => { console.log(`listening at http://localhost:3003`)});