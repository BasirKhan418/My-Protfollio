import { HashnodePost } from "../../lib/getHashnodePosts";
import Link from "next/link";
import Image from "next/image";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

export const HashnodeFeed = ({ posts }: { posts: HashnodePost[] }) => {
  const hashnodeProfileUrl =
    process.env.NEXT_PUBLIC_HASHNODE_URL || "https://hashnode.com";

  if (!posts.length) {
    return (
      <div className="mt-14 rounded-2xl border border-white/70 bg-white/70 backdrop-blur-sm p-5 md:p-6">
        <Heading as="h3" className="text-base font-bold">
          Hashnode Writing
        </Heading>
        <Paragraph className="text-sm mt-2">
          Add your Hashnode publication host in
          <span className="font-semibold"> HASHNODE_PUBLICATION_HOST </span>
          to automatically show your latest external posts here.
        </Paragraph>
      </div>
    );
  }

  const [featured, ...rest] = posts;

  return (
    <div className="mt-14">
      <div className="flex items-center justify-between gap-4 mb-4">
        <Heading as="h2" className="font-black text-lg">
        Latest on Hashnode
        </Heading>
        <span className="text-[11px] px-2 py-1 rounded-full border border-teal-200 bg-teal-50 text-teal-800">
          Synced from Hashnode
        </span>
      </div>

      <a
        href={featured.url}
        target="_blank"
        rel="noreferrer"
        className="rounded-2xl border border-white/70 bg-white/90 backdrop-blur-sm p-4 md:p-5 hover:shadow-md hover:-translate-y-1 transition overflow-hidden block"
      >
        {featured.coverImage && (
          <Image
            src={featured.coverImage}
            alt={featured.title}
            width={1200}
            height={630}
            className="w-full h-56 md:h-72 object-cover rounded-xl mb-4"
            priority
          />
        )}
        <p className="text-xs text-neutral-500 mb-2">
          {new Date(featured.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <Heading as="h3" className="text-xl font-black leading-tight">
          {featured.title}
        </Heading>
        <Paragraph className="text-sm mt-2">{featured.brief}</Paragraph>
        <div className="mt-3 flex flex-wrap gap-2">
          {featured.tags.slice(0, 4).map((tag) => (
            <span
              key={`${featured.url}-${tag}`}
              className="text-[11px] px-2 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </a>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {rest.map((post) => (
          <a
            key={post.url}
            href={post.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/70 bg-white/80 backdrop-blur-sm p-4 hover:shadow-md hover:-translate-y-1 transition overflow-hidden"
          >
            {post.coverImage && (
              <Image
                src={post.coverImage}
                alt={post.title}
                width={1200}
                height={630}
                className="w-full h-44 object-cover rounded-xl mb-3"
              />
            )}
            <Heading as="h3" className="text-base font-bold leading-snug">
              {post.title}
            </Heading>
            <p className="text-xs mt-1 text-neutral-500">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
            <Paragraph className="text-sm mt-2">{post.brief}</Paragraph>
            <div className="mt-3 flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={`${post.url}-${tag}`}
                  className="text-[11px] px-2 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
      <div className="mt-4">
        <Link
          href={hashnodeProfileUrl}
          target="_blank"
          className="text-sm font-semibold text-teal-800 hover:text-teal-700 underline underline-offset-4"
        >
          Explore more on Hashnode
        </Link>
      </div>
    </div>
  );
};
