import { emailRegex, passwordRegex } from "./regex";

export function validateUser(user: any) {
  if (!user.email.match(emailRegex)) {
    return "Invalid email!";
  }
  if (!user.password.match(passwordRegex)) {
    return "Invalid password!";
  }
  if (Object.values(user).includes(undefined)) {
    return "Faltan datos!";
  }
  return null;
}
