import React from 'react';

type BlogPost = {
  slug?: string;
  id?: string;
  data: {
    title: string;
    publishDate: Date;
    description: string;
  };
};

export const RecentPosts = ({ posts }: { posts: BlogPost[] }) => {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="w-full">
      <h1 className="bg-linear-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-3xl font-bold tracking-tight md:text-4xl mb-12">
        Posts
      </h1>
      <div className="flex flex-col gap-6">
        {posts.map((post) => {
          const identifier = post.slug || post.id;
          return (
            <a
              key={identifier}
              href={`/blog/${identifier}`}
              className="group flex flex-col gap-2 p-4 -mx-4 rounded-lg transition-colors hover:bg-muted/50"
            >
              <div className="flex justify-between items-baseline gap-4">
                <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                  {post.data.title}
                </h3>
                <time className="text-sm text-muted-foreground whitespace-nowrap">
                  {new Date(post.data.publishDate).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <p className="text-muted-foreground text-sm line-clamp-2">
                {post.data.description}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
};
