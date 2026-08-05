import React, { useState } from 'react';

type BlogPost = {
  slug?: string;
  id?: string;
  data: {
    title: string;
    publishDate: Date;
    description: string;
    lang?: 'en' | 'fa';
  };
};

export const RecentPosts = ({ posts }: { posts: BlogPost[] }) => {
  const [filter, setFilter] = useState<'all' | 'en' | 'fa'>('all');

  if (!posts || posts.length === 0) return null;

  const filteredPosts = posts.filter(post => {
    if (filter === 'all') return true;
    const postLang = post.data.lang || 'en';
    return postLang === filter;
  });

  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
        <h1 className="bg-linear-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-3xl font-bold tracking-tight md:text-4xl">
          Posts
        </h1>
        <div className="flex gap-2 p-1 bg-muted/50 rounded-lg w-fit">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${filter === 'all' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('en')}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${filter === 'en' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            English
          </button>
          <button
            onClick={() => setFilter('fa')}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${filter === 'fa' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            فارسی
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {filteredPosts.map((post) => {
          const identifier = post.slug || post.id;
          return (
            <a
              key={identifier}
              href={`/blog/${identifier}`}
              className="group flex flex-col gap-2 p-4 -mx-4 rounded-lg transition-colors hover:bg-muted/50"
              dir={post.data.lang === 'fa' ? 'rtl' : 'ltr'}
            >
              <div className="flex justify-between items-baseline gap-4">
                <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                  {post.data.title}
                </h3>
                <time className="text-sm text-muted-foreground whitespace-nowrap">
                  {new Date(post.data.publishDate).toLocaleDateString(post.data.lang === 'fa' ? 'fa-IR' : undefined, {
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
