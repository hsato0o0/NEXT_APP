'use client';

import createUser from '@/lib/actions/createUser';
import { useActionState, useState } from 'react';
import { z } from 'zod';

export default function RegisterForm() {
  const [errorMessage, formAction] = useActionState(createUser, {
    success: false,
    errors: {},
  });

  const [clientError, setClietnError] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    try {
      if (name === 'name') {
        z.object({
          name: z
            .string({ required_error: '名前は必須です' })
            .min(1, '名前は必須です'),
        }).parse({ name: value });
      } else if (name === 'email') {
        z.object({
          email: z
            .string({ required_error: 'メールアドレスは必須です' })
            .min(1, 'メールアドレスは必須です')
            .email('不正なメールアドレスです'),
        }).parse({ email: value });
      } else if (name === 'password') {
        z.object({
          password: z
            .string({ required_error: 'パスワードは必須です' })
            .min(1, 'パスワードは必須です')
            .min(8, 'パスワードは最低8文字です')
            .max(32, 'パスワードは最大32文字以内にしてください'),
        }).parse({ password: value });
      } else if (name === 'confirmPassword') {
        z.object({
          password: z
            .string({ required_error: 'パスワードは必須です' })
            .min(1, 'パスワードは必須です')
            .min(8, 'パスワードは最低8文字です')
            .max(32, 'パスワードは最大32文字以内にしてください'),
          confirmPassword: z
            .string({ required_error: '確認用パスワードは必須です' })
            .min(1, '確認用パスワードは必須です'),
        })
          .refine((data) => data.password === data.confirmPassword, {
            message: 'パスワードが一致しません',
          })
          .parse({ password: clientError.password, confirmPassword: value });

        setClietnError((prev) => ({ ...prev, [name]: '' }));
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        setClietnError((prev) => ({
          ...prev,
          [name]: JSON.parse(error.message)[0].message,
        }));
      }
    }
  };

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
                onBlur={handleBlur}
                style={{
                  width: '100%',
                  border: '1px solid  #D1D5DB',
                  borderRadius: '6px',
                  padding: '8px',
                }}
              />
              {errorMessage.errors.name ? (
                <p style={{ fontSize: '12px', color: 'red', margin: '0.3rem' }}>
                  {errorMessage.errors.name.join(', ')}
                </p>
              ) : (
                <p style={{ fontSize: '12px', color: 'red', margin: '0.3rem' }}>
                  {clientError.name}
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
                onBlur={handleBlur}
                style={{
                  width: '100%',
                  border: '1px solid  #D1D5DB',
                  borderRadius: '6px',
                  padding: '8px',
                }}
              />
              {errorMessage.errors.email ? (
                <p style={{ fontSize: '12px', color: 'red', margin: '0.3rem' }}>
                  {errorMessage.errors.email.join(', ')}
                </p>
              ) : (
                <p style={{ fontSize: '12px', color: 'red', margin: '0.3rem' }}>
                  {clientError.email}
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
                onBlur={handleBlur}
                style={{
                  width: '100%',
                  border: '1px solid  #D1D5DB',
                  borderRadius: '6px',
                  padding: '8px',
                }}
              />
              {errorMessage.errors.password ? (
                <p style={{ fontSize: '12px', color: 'red', margin: '0.3rem' }}>
                  {errorMessage.errors.password.join(', ')}
                </p>
              ) : (
                <p style={{ fontSize: '12px', color: 'red', margin: '0.3rem' }}>
                  {clientError.password}
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
                onBlur={handleBlur}
                style={{
                  width: '100%',
                  border: '1px solid  #D1D5DB',
                  borderRadius: '6px',
                  padding: '8px',
                }}
              />
              {errorMessage.errors.confirmPassword ? (
                <p style={{ fontSize: '12px', color: 'red', margin: '0.3rem' }}>
                  {errorMessage.errors.confirmPassword.join(', ')}
                </p>
              ) : (
                <p style={{ fontSize: '12px', color: 'red', margin: '0.3rem' }}>
                  {clientError.confirmPassword}
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
