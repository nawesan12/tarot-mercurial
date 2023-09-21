import { MDXRemote } from "next-mdx-remote/rsc";

const getBlogData = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
    cache: "no-store",
  });
  const data = await res.json();

  return data;
};

type PageParams = {
  params: {
    slug: string;
  };
};

export default async function UniqueBlogPage({ params }: PageParams) {
  const blog = await getBlogData(params.slug);

  return <MDXRemote source={blog.content} />;
}
