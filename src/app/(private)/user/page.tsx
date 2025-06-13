import CreateThreaButton from '@/components/threads/CreateThreadButton';
import PrivateThreads from '@/components/threads/PrivateThreads';

export default async function PrivateThreadsPage({
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
      <PrivateThreads query={query} />
    </div>
  );
}
