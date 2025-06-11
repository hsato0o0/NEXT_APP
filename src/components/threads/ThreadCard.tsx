import Link from 'next/link';

export default function ThreadCard({
  thread,
  commentNum,
}: {
  thread: {
    id: string;
    title: string;
    name: string;
    content: string;
    createdAt: Date;
  };
  commentNum: number;
}) {
  return (
    <>
      <div
        style={{
          border: '1px solid black',
          borderRadius: '6px',
          margin: '0.5rem 2rem',
          padding: '1rem 1rem 0.5rem 1rem',
          fontSize: '0.75rem',
        }}
      >
        <Link
          href={'/threads/' + thread.id}
          style={{
            color: 'red',
            textDecoration: 'underline',
          }}
        >
          {thread.title}
        </Link>
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <div style={{ marginRight: '2rem' }}>コメント数：{commentNum}</div>
          <div>作成日：{thread.createdAt.toLocaleDateString()}</div>
        </div>
      </div>
    </>
  );
}
