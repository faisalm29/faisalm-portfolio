import { Item, ItemContent, ItemTitle, ItemDescription } from "./ui/item";
import { formatDate } from "@/lib/utils";
import type { CollectionEntry } from "astro:content";
import { ArrowUpRight } from "lucide-react";

interface Props {
  fundraisingCampaign: CollectionEntry<"fundraisingCampaign">;
}

const FundraisingCampaignItem = ({ fundraisingCampaign }: Props) => {
  const { title, publishedDate, totalDonation, url } = fundraisingCampaign.data;
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
            Funds raised:{" "}
            <span className="text-foreground">Rp{totalDonation}</span>
          </ItemDescription>
        </ItemContent>
        <ItemContent className="flex-none items-center">
          <ItemDescription>{formatDate(publishedDate)}</ItemDescription>
        </ItemContent>
      </a>
    </Item>
  );
};

export { FundraisingCampaignItem };
