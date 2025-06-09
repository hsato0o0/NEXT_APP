type Comment = {
  name: string;
  comment: string;
  createdAt: Date;
};

export default function CommentCard({
  comment,
  index,
}: {
  comment: Comment;
  index: string;
}) {
  return (
    <>
      <div style={{ marginTop: '1rem' }}>
        <h3>
          {index + 1}　{comment.name}　{comment.createdAt.toLocaleString()}
        </h3>
        <p style={{ margin: '0 1rem 1rem 1rem' }}>{comment.comment}</p>
      </div>
    </>
  );
}
