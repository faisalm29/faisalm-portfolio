import { FundraisingCampaignItem } from "../FundraisingCampaignItem";
import type { CollectionEntry } from "astro:content";
import { ViewMoreButton } from "../ViewMoreButton";

interface Props {
  fundraisingCampaigns: CollectionEntry<"fundraisingCampaign">[];
  viewMoreButton?: boolean;
}

const FundraisingCampaigns = ({
  fundraisingCampaigns,
  viewMoreButton = false,
}: Props) => {
  return (
    <section className="flex flex-col space-y-4">
      <h2 className="text-lg font-semibold">Fundraising Campaigns</h2>
      <ul className="flex flex-col space-y-4">
        {fundraisingCampaigns.map((fundraisingCampaign) => (
          <FundraisingCampaignItem
            key={fundraisingCampaign.id}
            fundraisingCampaign={fundraisingCampaign}
          />
        ))}
        {viewMoreButton && (
          <ViewMoreButton href="/fundraising-campaigns">
            See More
          </ViewMoreButton>
        )}
      </ul>
    </section>
  );
};

export { FundraisingCampaigns };
