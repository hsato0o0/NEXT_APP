import PublicThreads from '@/components/threads/PublicThreads';
import { getThreads, searchThread } from '@/lib/thread';

export default async function ThreadsPage({
  searchParams,
}: {
  searchParams: Promise<{ search: string }>;
}) {
  const query = (await searchParams).search || '';
  const threads = query ? await searchThread(query) : await getThreads();

  return (
    <div className="modalField">
      <div
        style={{
          display: 'flex',
          justifyContent: 'end',
          margin: '2rem 2rem 2rem 0',
        }}
      ></div>
      <PublicThreads threads={threads} />
    </div>
  );
}
