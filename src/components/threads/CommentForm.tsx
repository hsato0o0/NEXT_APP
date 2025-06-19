'use client';
import { useActionState } from 'react';
import postComment from '../../lib/actions/postComment';

export default function CommentForm({
  id,
  path,
}: {
  id: string;
  path: string;
}) {
  const [state, formAction] = useActionState(postComment, {
    success: false,
    errors: {},
  });

  return (
    <>
      <div style={{ margin: '1.5rem 0' }}>
        <h2 style={{ marginBottom: '1rem', fontSize: '18px' }}>コメント投稿</h2>

        <form action={formAction}>
          <div style={{ marginBottom: '0.5rem' }}>
            <label htmlFor="name">名前：</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              style={{
                border: '1px solid black',
                display: 'block',
              }}
            />
          </div>
          <div>
            <label htmlFor="comment">内容：</label>
            <textarea
              id="comment"
              name="comment"
              required
              style={{
                border: '1px solid black',
                display: 'block',
                width: '400px',
                height: '150px',
              }}
            />
          </div>
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="path" value={path} />
          <button
            style={{
              border: '1px solid black',
              padding: '4px 6px',
              margin: '1rem 0',
            }}
          >
            投稿
          </button>
        </form>
      </div>
    </>
  );
}
