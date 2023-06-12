export const fetchHygraohQuery = async (query: string, revalidate?: number) => {
  const response = await fetch(process.env.HYGRAPY_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.HYGRAPY_TOKEN}`,
    },
    next: {
      revalidate,
    },
    body: JSON.stringify({
      query,
    }),
  });

  const { data } = await response.json();

  return data;
};
