"use server";

export const getImages = async ({
  pageParam = 1,
  pageSize = Number(process.env.NEXT_PUBLIC_PAGE_SIZE),
}: {
  pageParam: unknown;
  pageSize?: number;
}) => {
  const res = await fetch(
    `${process.env.API_URL}?page=${pageParam}&limit=${pageSize}`,
    {
      headers: {
        "x-api-key": process.env.API_KEY || "",
      },
    }
  );
  return res.json();
};
