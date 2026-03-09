import { FundraisingCampaignItem } from "../FundraisingCampaignItem";
import type { CollectionEntry } from "astro:content";
import { ViewMoreButton } from "../ViewMoreButton";
import CustomLink from "../CustomLink.astro";

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
      <p>
        I managed to raise{" "}
        <span className="text-foreground font-semibold">Rp2,670,347,756</span>{" "}
        in total from 99 fundraising campaigns that I wrote over 9 months. Click{" "}
        <CustomLink href="https://1drv.ms/x/c/769432b423d54538/EVue8HsM8yFBku2KDG9svq8BbllN77J7FMJfG4UqlVZWPA?e=m2wbnq">
          here
        </CustomLink>{" "}
        to view the full list of my fundraising campaigns and their details.
      </p>
      <ul className="flex flex-col space-y-4">
        {fundraisingCampaigns.map((fundraisingCampaign) => (
          <FundraisingCampaignItem
            key={fundraisingCampaign.id}
            fundraisingCampaign={fundraisingCampaign}
          />
        ))}
        {viewMoreButton && (
          <ViewMoreButton href="/fundraising-campaigns">
            View more
          </ViewMoreButton>
        )}
      </ul>
    </section>
  );
};

export { FundraisingCampaigns };
