import { getCollection } from "astro:content";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

type WithPublishedDate = {
  data: {
    publishedDate: Date;
  };
};

type ArticlePublishedDate = {
  publishedDate: Date;
};

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export const sortPosts = <T extends WithPublishedDate>(posts: T[]): T[] => {
  return [...posts].sort(
    (a, b) => b.data.publishedDate.valueOf() - a.data.publishedDate.valueOf(),
  );
};

export const sortArticles = <T extends ArticlePublishedDate>(
  articles: T[],
): T[] => {
  return [...articles].sort(
    (a, b) => b.publishedDate.valueOf() - a.publishedDate.valueOf(),
  );
};

export const getAllArticles = async () => {
  const doCheckArticles = (await getCollection("doCheckArticle")).map(
    (article) => ({
      id: article.id,
      draft: article.data.draft,
      title: article.data.title,
      description: article.data.description,
      publishedDate: article.data.publishedDate,
      source: article.data.categories[1],
      url: `/articles/${article.id}`,
    }),
  );
  const ibmArticles = (await getCollection("ibmArticle")).map((article) => ({
    id: article.id,
    draft: article.data.draft,
    title: article.data.title,
    description: article.data.description,
    publishedDate: article.data.publishedDate,
    source: article.data.source.name,
    url: article.data.source.url,
  }));

  return [...doCheckArticles, ...ibmArticles];
};
