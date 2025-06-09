import CommentCard from '@/components/threads/CommentCard';
import CommentForm from '@/components/threads/CommentForm';
import getComments from '@/lib/thread';
import { notFound } from 'next/navigation';

type Params = {
  params: Promise<{
    id: string;
  }>;
};
type Comment = {
  name: string;
  comment: string;
  createdAt: Date;
};

export default async function ThreadPage({ params }: Params) {
  const { id } = await params;
  const comments = await getComments(id);

  if (!comments) notFound();

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F9FAFB',
          padding: '3rem 0',
        }}
      >
        <div
          style={{
            border: '1px solid #F9FAFB',
            borderRadius: '6px',
            width: '90%',
            maxWidth: '1000px',
            background: 'white',
            padding: '2rem',
          }}
        >
          <h2
            style={{
              fontSize: '28px',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            テストテストテスト
          </h2>
          <h3 style={{ margin: '2rem 0' }}>
            スレッドの具体的な内容が表示される
          </h3>
          <div
            style={{
              borderTop: '1px solid gray',
              borderBottom: '1px solid gray',
              height: '450px',
              overflow: 'scroll',
            }}
          >
            {comments.map((comment: Comment, index: string) => {
              return <CommentCard comment={comment} index={index} />;
            })}
          </div>
          <CommentForm id={id} />
        </div>
      </div>
    </>
  );
}
