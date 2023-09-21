import { prisma } from "@/database/client";

type RouteParams = {
  params: {
    slug: string;
  };
};

export async function GET(_: Request, { params }: RouteParams) {
  const blog = await prisma.post.findUnique({
    where: {
      slug: params.slug,
    },
  });

  if (!blog) return new Response("Post not found!", { status: 404 });

  return new Response(JSON.stringify(blog));
}
