import { ArticleItem } from "../ArticleItem";
import { ViewMoreButton } from "../ViewMoreButton";
import type { ArticlesProps } from "./types";

interface Props {
  articles: ArticlesProps[];
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
          <ViewMoreButton href="/articles">View more</ViewMoreButton>
        )}
      </ul>
    </section>
  );
};

export { Articles };
