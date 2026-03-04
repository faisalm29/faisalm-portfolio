import { Item, ItemContent, ItemTitle, ItemDescription } from "./ui/item";
import { formatDate } from "@/lib/utils";
import type { CollectionEntry } from "astro:content";

interface Props {
  fundraisingCampaign: CollectionEntry<"fundraisingCampaign">;
}

const FundraisingCampaignItem = ({ fundraisingCampaign }: Props) => {
  const { title, description, publishedDate, totalDonation } =
    fundraisingCampaign.data;
  return (
    <Item asChild>
      <a href={`/fundraising-campaigns/${fundraisingCampaign.id}`}>
        <ItemContent>
          <ItemTitle>{title}</ItemTitle>
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
