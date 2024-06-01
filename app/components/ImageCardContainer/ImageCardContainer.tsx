"use client";

import { Fragment, useEffect, useState } from "react";
import { ImageModel, useGetImages } from "./useGetImages";
import { ImageCard } from "../ImageCard";
import React from "react";
import { useOnScreenObserver } from "../../hooks/useInView";
import { Ad } from "../Ad";

type ImageCardContainerProps = {
  images: ImageModel[];
};

export const ImageCardContainer = ({
  images: cards,
}: ImageCardContainerProps) => {
  const [resume, setResume] = useState(false);
  const { ref, isIntersecting } = useOnScreenObserver();
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useGetImages(cards);

  const autoFetch =
    (isIntersecting && data.pages.length !== 5) || (isIntersecting && resume);

  // fetch next page
  useEffect(() => {
    if (autoFetch) {
      fetchNextPage();
    }
  }, [fetchNextPage, autoFetch]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.pages.map((page, i) => (
          <Fragment key={i}>
            {page?.map((imageCard, index) =>
              index !== 3 ? (
                <div
                  key={imageCard.id}
                  className="position: relative h-52 w-52"
                >
                  <ImageCard {...imageCard} />
                </div>
              ) : (
                <div key={`group_${i}_${index}_add`} className="h-52 w-52">
                  <Ad
                    ad={"/6355419/Travel/Europe/France/Paris"}
                    slotId={`gpt_slot_${i}_${index}`}
                    size={[300, 250]}
                  />
                </div>
              )
            )}
          </Fragment>
        ))}
      </div>

      {/* auto scroll helper element */}
      <div ref={ref} />

      {!isFetchingNextPage && data.pageParams.length === 5 && (
        <div className="flex justify-center">
          <button
            onClick={() => setResume(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Continue
          </button>
        </div>
      )}

      {isFetchingNextPage && hasNextPage && (
        <p className="text-center animate-pulse">Loading...</p>
      )}
    </div>
  );
};
