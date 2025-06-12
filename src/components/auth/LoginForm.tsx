'use client';
import authenticate from '@/lib/actions/authenticate';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect, useLayoutEffect } from 'react';

export default function LoginForm() {
  const [errorMessage, formAction] = useActionState(authenticate, '');
  const router = useRouter();

  useLayoutEffect(() => {
    router.push('/user');
  }, [errorMessage]);

  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F9FAFB',
        }}
      >
        <div
          style={{
            border: '1px solid #E5E7EB',
            padding: '2.5rem',
            borderRadius: '12px',
            minWidth: '400px',
          }}
        >
          <h2
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '2rem',
            }}
          >
            ログイン
          </h2>
          <form action={formAction}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label
                htmlFor="email"
                style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                メールアドレス
              </label>
              <input
                type="text"
                id="email"
                name="email"
                required
                style={{
                  border: '1px solid  #D1D5DB',
                  borderRadius: '6px',
                  width: '100%',
                  padding: '8px',
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label
                htmlFor="password"
                style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                パスワード
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                style={{
                  border: '1px solid  #D1D5DB',
                  borderRadius: '6px',
                  width: '100%',
                  padding: '8px',
                }}
              />
            </div>
            {errorMessage}
            <button
              type="submit"
              style={{
                border: '1px solid black',
                padding: '8px 12px',
                borderRadius: '6px',
                background: 'black',
                color: 'white',
                fontSize: '14px',
                cursor: 'pointer',
              }}
            >
              {' '}
              ログイン
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
