import React, { useEffect } from "react";

type AdProps = {
  ad: string;
  slotId: string;
  size: [number, number] | ["fluid"];
};

export const Ad = ({ ad, slotId, size }: AdProps) => {
  useEffect(() => {
    window.googletag = window.googletag || { cmd: [] };

    window.googletag.cmd.push(() => {
      window.googletag.pubads().enableSingleRequest();
      window.googletag.enableServices();
    });

    window.googletag.cmd.push(() => {
      window.googletag
        .defineSlot(ad, size, slotId)
        .addService(window.googletag.pubads());
      window.googletag.display(slotId);
    });

    return () => {
      window.googletag.cmd.push(() => {
        window.googletag.destroySlots([slotId]);
      });
    };
  }, [ad, size, slotId]);

  return <div id={`${slotId}`}></div>;
};
