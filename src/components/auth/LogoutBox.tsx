import { signOut } from '@/auth';
import logout from '@/lib/actions/logout';

export default async function LogoutBox() {
  return (
    <form action={logout}>
      <button
        style={{
          border: '1px solid #ccc',
          borderRadius: '6px',
          fontSize: '14px',
          padding: '8px 12px',
          outline: 'none',
          marginLeft: '1rem',
        }}
      >
        ログアウト
      </button>
    </form>
  );
}
