import apiServiceCall from "@/services/service";

export async function sendContact(data: {
  fullName: string;
  email: string;
  companyName?: string;
  phoneNumber: string;
  message: string;
}) {
  return await apiServiceCall({
    url: "api/contacts",
    method: "POST",
    body: { data }, // Strapi requires { data: {...} }
  });
}
