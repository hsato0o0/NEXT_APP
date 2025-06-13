import createThread from '@/lib/actions/createThread';
import { useActionState } from 'react';

export default function CreateThreadModal({
  handleCloseModal,
}: {
  handleCloseModal: () => void;
}) {
  const [errorMessage, formAction] = useActionState(createThread, {
    success: false,
    errors: {},
  });

  return (
    <div
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(0,0,0,0.5)',
      }}
    >
      <div
        style={{
          borderRadius: '8px',
          background: 'white',
          minWidth: '400px',
          padding: '2rem',
        }}
      >
        <h2
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
          }}
        >
          新規スレッド
        </h2>
        <form action={formAction}>
          <div style={{ marginBottom: '1rem' }}>
            <label
              htmlFor="name"
              style={{ display: 'block', marginBottom: '0.5rem' }}
            >
              作成者
            </label>
            <input
              id="name"
              name="name"
              type="text"
              style={{
                border: '1px solid #D1D5DB',
                borderRadius: '6px',
                display: 'block',
                width: '100%',
                padding: '5px',
              }}
            />
            {errorMessage.errors.name && (
              <p style={{ fontSize: '12px', color: 'red', margin: '0.3rem' }}>
                {errorMessage.errors.name.join(', ')}
              </p>
            )}
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label
              htmlFor="title"
              style={{ display: 'block', marginBottom: '0.5rem' }}
            >
              タイトル
            </label>
            <input
              id="title"
              name="title"
              type="text"
              style={{
                border: '1px solid #D1D5DB',
                borderRadius: '6px',
                display: 'block',
                width: '100%',
                padding: '5px',
              }}
            />
            {errorMessage.errors.title && (
              <p style={{ fontSize: '12px', color: 'red', margin: '0.3rem' }}>
                {errorMessage.errors.title.join(', ')}
              </p>
            )}
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label
              htmlFor="content"
              style={{ display: 'block', marginBottom: '0.5rem' }}
            >
              投稿内容
            </label>
            <textarea
              id="content"
              name="content"
              style={{
                border: '1px solid #D1D5DB',
                borderRadius: '6px',
                display: 'block',
                width: '100%',
                padding: '5px',
                height: '100px',
              }}
            />
            {errorMessage.errors.content && (
              <p style={{ fontSize: '12px', color: 'red', margin: '0.3rem' }}>
                {errorMessage.errors.content.join(', ')}
              </p>
            )}
          </div>
          <div
            style={{
              marginTop: '2rem',
              display: 'flex',
              justifyContent: 'end',
              fontSize: '14px',
            }}
          >
            <button
              onClick={handleCloseModal}
              style={{
                border: '1px solid #c0c0c0',
                borderRadius: '8px',
                padding: '8px 12px',
                marginRight: '0.5rem',
              }}
            >
              キャンセル
            </button>
            <button
              style={{
                border: '1px solid #3B82F6',
                borderRadius: '8px',
                padding: '8px 12px',
                background: '#3B82F6',
                color: 'white',
              }}
            >
              作成
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
