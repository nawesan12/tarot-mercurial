import { genSalt, hash } from "bcrypt";

export async function encrypt(salt: number, data: string) {
  const saltGend = await genSalt(salt as number);
  const hashed = await hash(data as string, saltGend as string);
  return hashed;
}
