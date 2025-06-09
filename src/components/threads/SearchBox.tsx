export default function SearchBox() {
  return (
    <>
      <form action="">
        <input
          type="text"
          style={{
            border: '1px solid #ccc',
            borderRadius: '6px',
            fontSize: '14px',
            padding: '8px 12px',
            outline: 'none',
          }}
          placeholder="検索"
        />
      </form>
    </>
  );
}
