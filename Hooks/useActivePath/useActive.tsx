import { useRouter } from 'next/router';

export const useActivePath = (path: string): boolean => {
  const router = useRouter();

  return router.pathname === path;
};