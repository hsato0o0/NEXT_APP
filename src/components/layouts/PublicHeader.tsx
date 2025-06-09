import SearchBox from '../threads/SearchBox';
import LoginBox from '../auth/LoginBox';
import RegisterBox from '../auth/RegisterBox';

export default function PublicHeader() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: '0',
        borderBottom: '1px solid #E5E7EB',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
        padding: '1rem 2rem',
        height: '64px',
        background: 'white',
      }}
    >
      <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>掲示板</div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <SearchBox />
        <LoginBox />
        <RegisterBox />
      </div>
    </div>
  );
}
