"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getImages } from "../actions";

export type ImageModel = {
  id: number;
  url: string;
  width: number;
  height: number;
};

export const useGetImages = (initialData: ImageModel[]) => {
  return useInfiniteQuery<ImageModel[]>({
    queryKey: ["images"],
    queryFn: ({ pageParam }) => getImages({ pageParam }),
    initialData: { pages: [initialData], pageParams: [1] },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length + 1 : undefined;
    },
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};
