import apiServiceCall from "@/services/service";

export async function fetchHeroBlogHeroSectionData(){
    return await apiServiceCall({
        url:"/api/blog-page?populate=*",
        method:"GET"
    })
}

export async function fetchBlogData(){
    return await apiServiceCall({
        url:"/api/blogs?populate=*",
        method:"GET"
    })
}