import { homeQuery } from "./queries";
import { client } from "./sanity";

export async function getHome() {
  try {
    return await client.fetch(homeQuery);
  } catch (error) {
    console.error(error);
    return null;
  }
}

import { siteSettingsQuery } from "./queries";
import { defaultSiteSettings, type SiteSettingsType } from "../../types/sanity";

export async function getSiteSettings(): Promise<SiteSettingsType> {
  try {
    const data = await client.fetch<SiteSettingsType | null>(siteSettingsQuery);

    if (!data) {
      console.warn("siteSettings document not found");
      return defaultSiteSettings;
    }

    return data;
  } catch (error) {
    console.error("Error fetching siteSettings:", error);
    return defaultSiteSettings;
  }
}
