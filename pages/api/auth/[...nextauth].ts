import NextAuth, { InitOptions } from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from 'next-auth/adapters'
import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

const options: InitOptions = {
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        })
    ],
    adapter: Adapters.Prisma.Adapter({ prisma })
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)