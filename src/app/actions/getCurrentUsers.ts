import { getServerSession } from 'next-auth/next'

import { authOption } from '../../../pages/api/auth/[...nextauth]'
import prisma from '../libs/prismadb'
import { User } from '@prisma/client';

export async function getSession() {
    return await getServerSession(authOption)
}

export default async function getCurrentUser(): Promise<User | null> {
    try {
        const session = await getSession();
        if (!session?.user?.email) {
            return null;
        }
        const email = session?.user?.email;
        
        const currentUser = await prisma?.user.findUnique({
            where: {
                email,
            }
        })
        if (!currentUser) {
            return null
        }
        return currentUser;
    } catch (error) {
        return null
    }
}