import BlogDetails from "@/components/BlogDetails";
import apiServiceCall from "@/services/service";

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const blog = await apiServiceCall({
    url: `/api/blogs/${id}?populate=*`,
    method: "GET",
  });

  return (
    <>
      <BlogDetails
        title={blog?.data?.title}
        description={blog?.data?.description}
        createdAt={blog?.data?.createdAt}
        image={`${process.env.NEXT_PUBLIC_API_URL}${blog?.data?.image?.url}`}
        cover_description={blog?.data?.cover_description}
      />
    </>
  );
};

export default Page;
