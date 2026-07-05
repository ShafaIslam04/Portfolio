import api from "./axios";

export const sendMessage = async (data) => {
  console.log("Sending:", data);

  const response = await api.post("/contact", data);

  console.log("Response:", response);

  return response.data;
};