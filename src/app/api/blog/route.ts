import { prisma } from "@/database/client";

export async function POST(req: Request) {
  const blog = await req.json();

  const uploadedBlog = await prisma.post.create({
    data: {
      ...blog,
    },
  });

  if (!uploadedBlog) {
    return new Response("There was an error uploading the post!", {
      status: 400,
    });
  }

  return new Response(JSON.stringify(uploadedBlog));
}
