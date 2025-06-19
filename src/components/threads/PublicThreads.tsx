import { getThreads, searchThread } from '@/lib/thread';
import ThreadCard from './ThreadCard';

export default async function PublicThreads({ query }: { query: string }) {
  const threads = query ? await searchThread(query) : await getThreads();
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '90%', maxWidth: '1000px' }}>
          {threads.map((thread) => {
            const commentNum = thread.comments.length || 0;
            console.log(thread);
            return (
              <ThreadCard
                thread={thread}
                commentNum={commentNum}
                path="/threads/"
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
