import apiServiceCall from "@/services/service";

export async function fetchSiteSettingsData() {
  return await apiServiceCall({
    url: "/api/website-setting?populate[navbar][populate]=*&populate[homePageHeroSection][populate][coverImage]=true&populate[footer][populate]=*",
    method: "GET",
  });
}
