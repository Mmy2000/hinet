import apiServiceCall from "@/services/service";

export async function fetchAboutUsData() {
  return await apiServiceCall({
    url: "/api/about-us-page?populate[heroSection][populate]=*&populate[whoAreWeSection][populate][image]=true&populate[ceoSection][populate][ceo_image]=true&populate[whyUsIntroSection][populate]&populate[whyUsItemsSection][populate][image]=true",
    method: "GET",
  });
}

export async function fetchceoSectionBackground() {
    return await apiServiceCall({
        url: "/api/about-us-page?populate[ceoSection][populate]=*",
        method: "GET",
    });
}

// http://localhost:1337/api/about-us-page?populate[heroSection][populate]=*&populate[whoAreWeSection][populate][image]=true&populate[ceoSection][populate][ceo_image]=true&populate[ceoSection][populate][section_background]&populate[whyUsIntroSection][populate]&populate[whyUsItemsSection][populate][image]=true

