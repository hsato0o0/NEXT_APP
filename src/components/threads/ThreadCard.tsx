import Link from 'next/link';

export default function ThreadCard({
  thread,
  commentNum,
  path,
}: {
  thread: {
    id: string;
    title: string;
    name: string;
    user: object;
    content: string;
    createdAt: Date;
  };
  commentNum: number;
  path: string;
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
          href={`${path}` + thread.id}
          style={{
            color: 'red',
            textDecoration: 'underline',
          }}
        >
          {thread.title}
        </Link>
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <div style={{ marginRight: '1rem', fontSize: '9px' }}>
            コメント数：{commentNum}
          </div>
          <div style={{ marginRight: '1rem', fontSize: '9px' }}>
            作成日：{thread.createdAt.toLocaleDateString()}
          </div>
          {/* <div style={{ fontSize: '9px' }}>作成者：{thread.user?.name}</div> */}
        </div>
      </div>
    </>
  );
}
