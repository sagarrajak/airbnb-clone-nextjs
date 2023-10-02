import { getServerSession } from 'next-auth/next'

import { authOption } from '../../../pages/api/auth/[...nextauth]'
import prisma from '../libs/prismadb'
import { User } from '@prisma/client';

export async function getSession() {
    return await getServerSession(authOption)
}

export type HydrationSafeUser = Omit<User, 'createdAt' | 'updatedAt'> & {
    createdAt: string,
    updatedAt: string
}

export default async function getCurrentUser(): Promise<HydrationSafeUser | null> {
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
        return {
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(),
            updatedAt: currentUser.updatedAt.toISOString()
        };
    } catch (error) {
        return null
    }
}