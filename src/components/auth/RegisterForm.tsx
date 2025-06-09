export default function RegisterForm() {
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
          <form action="">
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
                required
                style={{
                  width: '100%',
                  border: '1px solid  #D1D5DB',
                  borderRadius: '6px',
                  padding: '8px',
                }}
              />
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
                required
                style={{
                  width: '100%',
                  border: '1px solid  #D1D5DB',
                  borderRadius: '6px',
                  padding: '8px',
                }}
              />
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
                required
                style={{
                  width: '100%',
                  border: '1px solid  #D1D5DB',
                  borderRadius: '6px',
                  padding: '8px',
                }}
              />
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
                required
                style={{
                  width: '100%',
                  border: '1px solid  #D1D5DB',
                  borderRadius: '6px',
                  padding: '8px',
                }}
              />
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
