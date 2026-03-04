import { ArticleItem } from "../ArticleItem";
import type { CollectionEntry } from "astro:content";
import { ViewMoreButton } from "../ViewMoreButton";

interface Props {
  articles: CollectionEntry<"article">[];
  viewMoreButton?: boolean;
}

const Articles = ({ articles, viewMoreButton = false }: Props) => {
  return (
    <section className="flex flex-col space-y-4">
      <h2
        data-heading="education"
        id="education"
        className="scroll-m-18 text-lg font-semibold"
      >
        Articles
      </h2>
      <ul className="flex flex-col space-y-4">
        {articles.map((article) => (
          <li key={article.id}>
            <ArticleItem article={article} />
          </li>
        ))}
        {viewMoreButton && (
          <ViewMoreButton href="/articles">See More</ViewMoreButton>
        )}
      </ul>
    </section>
  );
};

export { Articles };
