import ThreadCard from '@/components/threads/ThreadCard';

export default function ThreadsPage() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'end',
          margin: '2rem 2rem 2rem 0',
        }}
      >
        <button
          style={{
            border: 'none',
            borderRadius: '12px',
            padding: '8px 16px',
            background: '#3B82F6',
            color: 'white',
          }}
        >
          ＋新規スレッド
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '90%', maxWidth: '1000px' }}>
          <ThreadCard />
          <ThreadCard />
        </div>
      </div>
    </>
  );
}
