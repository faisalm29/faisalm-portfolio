import { ArticleItem } from "../ArticleItem";
import type { CollectionEntry } from "astro:content";

interface Props {
  articles: CollectionEntry<"article">[];
}

const Articles = ({ articles }: Props) => {
  return (
    <ul>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </ul>
  );
};

export { Articles };
