import apiServiceCall from "@/services/service";


export async function fetchClientPageData(){
    return await apiServiceCall({
        url:"/api/clients-page?populate[heroSection][populate]=*&populate[intro_section][populate]=*&populate[client_section][populate]=*&populate[clientItems][populate]=*",
        method:"GET"
    })
}


//http://localhost:1337/api/clients-page?populate[heroSection][populate]=*&populate[intro_section][populate]=*&populate[client_section][populate]=*&populate[clientItems][populate]=*