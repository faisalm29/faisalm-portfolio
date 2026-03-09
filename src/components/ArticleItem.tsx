import { Item, ItemContent, ItemTitle, ItemDescription } from "./ui/item";
import { formatDate } from "@/lib/utils";
import type { CollectionEntry } from "astro:content";
import type { ArticlesProps } from "./sections/types";
import { ArrowUpRight } from "lucide-react";

interface Props {
  article: ArticlesProps;
}

const ArticleItem = ({ article }: Props) => {
  const { title, description, publishedDate, source, url } = article;

  if (url.startsWith("https")) {
    return (
      <Item asChild>
        <a href={url} target="_blank">
          <ItemContent>
            <ItemTitle>
              <h2>
                {title} <ArrowUpRight className="inline" size={16} />
              </h2>
            </ItemTitle>
            <ItemDescription>
              <p>{source}</p>
            </ItemDescription>
          </ItemContent>
          <ItemContent className="flex-none items-center">
            <ItemDescription>{formatDate(publishedDate)}</ItemDescription>
          </ItemContent>
        </a>
      </Item>
    );
  }

  return (
    <Item asChild>
      <a href={url}>
        <ItemContent>
          <ItemTitle>
            <h2>{title}</h2>
          </ItemTitle>
          <ItemDescription>
            <p>{source}</p>
          </ItemDescription>
        </ItemContent>
        <ItemContent className="flex-none items-center">
          <ItemDescription>{formatDate(publishedDate)}</ItemDescription>
        </ItemContent>
      </a>
    </Item>
  );
};

export { ArticleItem };
