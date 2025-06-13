'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SearchBox({ path = '' }: { path: string }) {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(() => search.trim());
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    if (debouncedSearch) {
      router.push(`/${path}/?search=${debouncedSearch}`);
    } else {
      router.push(`/${path}`);
    }
  }, [debouncedSearch]);

  return (
    <>
      <input
        type="text"
        style={{
          border: '1px solid #ccc',
          borderRadius: '6px',
          fontSize: '14px',
          padding: '8px 12px',
          outline: 'none',
        }}
        placeholder="検索"
        onChange={(e) => setSearch(() => e.target.value)}
      />
    </>
  );
}
