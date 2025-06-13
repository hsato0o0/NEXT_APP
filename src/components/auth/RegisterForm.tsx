'use client';

import createUser from '@/lib/actions/createUser';
import { useActionState } from 'react';

export default function RegisterForm() {
  const [errorMessage, formAction] = useActionState(createUser, {
    success: false,
    errors: {},
  });

  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F9FAFB',
        }}
      >
        <div
          style={{
            border: '1px solid #E5E7EB',
            padding: '2.5rem',
            borderRadius: '12px',
            minWidth: '450px',
          }}
        >
          <h2
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '2rem',
            }}
          >
            ユーザ登録
          </h2>
          <form action={formAction}>
            <div style={{ marginBottom: '1rem' }}>
              <label
                htmlFor="name"
                style={{ display: 'block', marginBottom: '0.5rem' }}
              >
                名前
              </label>
              <input
                id="name"
                type="text"
                name="name"
                style={{
                  width: '100%',
                  border: '1px solid  #D1D5DB',
                  borderRadius: '6px',
                  padding: '8px',
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
                htmlFor="email"
                style={{ display: 'block', marginBottom: '0.5rem' }}
              >
                メールアドレス
              </label>
              <input
                id="email"
                type="email"
                name="email"
                style={{
                  width: '100%',
                  border: '1px solid  #D1D5DB',
                  borderRadius: '6px',
                  padding: '8px',
                }}
              />
              {errorMessage.errors.email && (
                <p style={{ fontSize: '12px', color: 'red', margin: '0.3rem' }}>
                  {errorMessage.errors.email.join(', ')}
                </p>
              )}
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label
                htmlFor="password"
                style={{ display: 'block', marginBottom: '0.5rem' }}
              >
                パスワード
              </label>
              <input
                id="password"
                type="password"
                name="password"
                style={{
                  width: '100%',
                  border: '1px solid  #D1D5DB',
                  borderRadius: '6px',
                  padding: '8px',
                }}
              />
              {errorMessage.errors.password && (
                <p style={{ fontSize: '12px', color: 'red', margin: '0.3rem' }}>
                  {errorMessage.errors.password.join(', ')}
                </p>
              )}
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <label
                htmlFor="confirmPassword"
                style={{ display: 'block', marginBottom: '0.5rem' }}
              >
                パスワード（確認）
              </label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                style={{
                  width: '100%',
                  border: '1px solid  #D1D5DB',
                  borderRadius: '6px',
                  padding: '8px',
                }}
              />
              {errorMessage.errors.confirmPassword && (
                <p style={{ fontSize: '12px', color: 'red', margin: '0.3rem' }}>
                  {errorMessage.errors.confirmPassword.join(', ')}
                </p>
              )}
            </div>
            <button
              type="submit"
              style={{
                fontSize: '14px',
                border: '1px solid black',
                borderRadius: '6px',
                padding: '8px 12px',
                background: 'black',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              登録
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
