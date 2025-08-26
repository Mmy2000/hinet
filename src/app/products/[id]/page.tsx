import ProjectDetails from '@/components/ProjectDetails';
import apiServiceCall from '@/services/service';
import React from 'react'

const page = async ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const product = await apiServiceCall({
      url: `/api/projects/${id}?populate=*`,
      method: "GET",
    });    
    
  return(
    <>
    <ProjectDetails project={product?.data}/>
    </>
  )
};

export default page