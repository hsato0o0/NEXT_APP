import CreateThreaButton from '@/components/threads/CreateThreadButton';
import PublicThreads from '@/components/threads/PublicThreads';

export default async function ThreadsPage({
  searchParams,
}: {
  searchParams: Promise<{ search: string }>;
}) {
  const query = (await searchParams).search || '';

  return (
    <div className="modalField">
      <div
        style={{
          display: 'flex',
          justifyContent: 'end',
          margin: '2rem 2rem 2rem 0',
        }}
      >
        <CreateThreaButton />
      </div>
      <PublicThreads query={query} />
    </div>
  );
}
