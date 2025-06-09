import Link from 'next/link';

export default function LoginBox() {
  return (
    <Link
      href="/login"
      style={{
        display: 'inline-block',
        padding: '8px 12px',
        backgroundColor: '#FFFFFF',
        color: 'black',
        border: '1px solid black',
        borderRadius: '6px',
        textDecoration: 'none',
        fontSize: '14px',
        cursor: 'pointer',
        marginLeft: '12px',
      }}
    >
      ログイン
    </Link>
  );
}
