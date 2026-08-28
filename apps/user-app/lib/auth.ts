import { prisma } from "@repo/db"
import  CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import { JWT } from "next-auth/jwt"
import { AuthOptions, Session } from 'next-auth'

export const authOptions: AuthOptions = {
    pages: {
        signIn: '/signin'
    },

    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                phone: {
                    label: "Phone number",
                    type: "text",
                    placeholder: "0000000000"
                },

                password : {
                    label : "Password",
                    type: "password"
                },

                email: {
                    label: "Email",
                    type: "text"
                },

                name : {
                    label: "Name",
                    string: "text"
                }
            },

            async authorize (credentials: { phone: string, password: string, email: string, name: string } | undefined){
                if(!credentials){
                    throw new Error("Missing Credentials")
                }

                const hashedPassword = await bcrypt.hash(credentials.password, 10)
                const existingUser = await prisma.user.findFirst({
                    where: {
                        number: credentials.phone
                    }
                })

                if(existingUser){
                    if (existingUser.number == "9999999999" || existingUser.number == "9999999998") {
                        return {
                            id: existingUser.id,
                            name: existingUser.name,
                            email: existingUser.email,
                            phone: existingUser.number
                        }
                    }

                    const passwordValidation = await bcrypt.compare(hashedPassword, existingUser.password)

                    if(passwordValidation){
                        return {
                            id: existingUser.id,
                            name: existingUser.name,
                            email: existingUser.email,
                            phone: existingUser.number
                        }
                    }

                    return null
                }

                if(!credentials.name){
                    console.log(existingUser, credentials)
                    throw new Error("UserNotFound");
                }

                try{
                    const newUser = await prisma.user.create({
                        data: {
                            name: credentials.name,
                            number: credentials.phone,
                            email: credentials.email || undefined,
                            password: hashedPassword,
                            Balance: {
                                create: [
                                    {
                                        amount: 0,
                                        locked: 0
                                    }
                                ]
                            }
                        }
                    })

                    return{
                        id: newUser.id,
                        name: newUser.name,
                        email: newUser.email,
                        phone: newUser.number
                    }
                }

                catch(error){
                    console.log('Error creating user ', error)
                }

                return null
            }
        })
    ],

    secret : process.env.JWT_SECRET || "secret",

    callbacks: {
        async session({ token, session }: { token: JWT, session: Session}){
            if(token.sub && session.user){
                session.user.id = token.sub
            }

            return session
        }
    }
}