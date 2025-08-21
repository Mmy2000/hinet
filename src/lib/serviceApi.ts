import apiServiceCall from "@/services/service";

export async function fetchServicePage() {
  return await apiServiceCall({
    url: "/api/service-page?populate[services][populate][image]=true&populate[services][populate][icon]=true&populate[services][populate][points][populate][icon]=true",
    method: "GET",
  });
}