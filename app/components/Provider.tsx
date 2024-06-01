"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import React, { useState } from "react";

export const ReactQueryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [queryClient] = useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: Infinity } } })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
