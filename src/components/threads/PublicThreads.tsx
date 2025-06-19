'use client';
import { Threads } from '@/type/thread';
import ThreadCard from './ThreadCard';
import { useReducer } from 'react';

const reducer = (
  state: { filter: string },
  { type }: { type: string }
): { filter: string } => {
  return { filter: type };
};

export default function PublicThreads({ threads }: { threads: Threads }) {
  const [rstate, dispatch] = useReducer(reducer, { filter: 'all' });
  const users = Array.from(new Set(threads.map((thread) => thread.user.name)));

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
          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <select
              style={{
                border: '1px solid black',
                borderRadius: '6px',
                padding: '8px',
                margin: '0 2rem 1rem 0',
              }}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                dispatch({ type: e.target.value })
              }
            >
              <option value="all">作成者を選択</option>
              {users.map((user) => {
                return (
                  <option id={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          {threads
            .filter((thread) => {
              if (rstate.filter === 'all') return true;
              return thread.user.name === rstate.filter;
            })
            .map((thread) => {
              const commentNum = thread.comments.length || 0;
              return (
                <>
                  <ThreadCard
                    thread={thread}
                    commentNum={commentNum}
                    path="/threads/"
                  />
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}
