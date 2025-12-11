// src/providers/ReactQueryProvider.tsx

'use client'; // **חובה!** כל המודולים של Context ו-Hooks חייבים להיות Client Components

import { useState } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// 1. הגדרת Client עם Default Options
const createQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 דקות
      gcTime: 1000 * 60 * 30, // 30 דקות
      retry: 3,
    },
  },
});

export default function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  // 2. יצירת Client בתוך State כדי לשמור על מופע יחיד לכל מחזור חיים
  const [queryClient] = useState(createQueryClient);

  return (
    <QueryClientProvider client={queryClient}>
      {children}

      {/* 3. כלי פיתוח (רק בפיתוח) */}
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
}