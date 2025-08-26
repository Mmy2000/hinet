import apiServiceCall from "@/services/service";


export async function fetchProjectsPageData(){
    return await apiServiceCall({
        url:"/api/project-page?populate[heroSection][populate]=*",
        method:"GET"
    })
}

export async function fetchProjectsData(){
    return await apiServiceCall({
        url:"/api/projects?populate=*",
        method:"GET"
    })
}