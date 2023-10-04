export function handleError(error: any) {
  if (error.meta?.contains("email")) {
    return new Response("This email already exists in the database!", {
      status: 400,
    });
  }
  return new Response("Could not save user in the database!", { status: 500 });
}
