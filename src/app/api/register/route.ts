import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password } = body;
  const hashedPassword = await bcrypt.hash(password, 12);
  const foundUser = await prisma?.user.findFirst({
    where: {
      email,
    }
  });

  if (foundUser) {
    return NextResponse.json({
      status: false,
      message: 'User already registerd!',
      data: foundUser,
    }, {
      status: 409
    });
  }

  const user = await prisma?.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return NextResponse.json({
    status: true,
    message: 'User registerd successfully!',
    data: user,
  });
}
