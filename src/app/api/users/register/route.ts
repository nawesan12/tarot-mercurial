import { prisma } from "@/database/client";
import { sign } from "jsonwebtoken";
import { encrypt } from "@/util/crypto";
import { validateUser } from "@/util/validations";
import { handleError } from "@/util/errors";

export async function POST(req: Request) {
  const user = await req.json();

  const validationError = validateUser(user);

  if (validationError) return new Response(validationError, { status: 400 });

  const userToSave = {
    ...user,
    birthdate: new Date(user.birthdate),
    age: user.age ?? calculateUserAge(user.age),
    password: await encrypt(10, user.password),
  };

  try {
    const savedUser = await prisma.user.create({ data: userToSave });

    const token = sign(savedUser, process.env.TOKEN_SECRET as string, {
      expiresIn: "1d",
      noTimestamp: true,
    });

    const userResponse = JSON.stringify({ ...userToSave, token });

    return new Response(userResponse, { status: 201 });
  } catch (error: any) {
    handleError(error);
  }
}
