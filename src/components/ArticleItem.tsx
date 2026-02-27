import { Item, ItemContent, ItemTitle, ItemDescription } from "./ui/item";
import { formatDate } from "@/lib/utils";
import type { CollectionEntry } from "astro:content";

interface Props {
  article: CollectionEntry<"article">;
}

const ArticleItem = ({ article }: Props) => {
  const { title, description, publishedDate } = article.data;
  return (
    <Item asChild>
      <a href={`/articles/${article.id}`}>
        <ItemContent>
          <ItemTitle>{title}</ItemTitle>
          <ItemDescription>{description}</ItemDescription>
        </ItemContent>
        <ItemContent className="flex-none items-center">
          <ItemDescription>{formatDate(publishedDate)}</ItemDescription>
        </ItemContent>
      </a>
    </Item>
  );
};

export { ArticleItem };
