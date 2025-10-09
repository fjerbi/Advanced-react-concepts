// components/comment-list.jsx

export const CommentsList = ({ comments }) => {
  if (!comments) return <p>Loading comments...</p>;
  if (comments.length === 0) return <p>No comments yet.</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Comments</h2>
      <ul style={styles.list}>
        {comments.map((comment) => (
          <li key={comment.id} style={styles.comment}>
            <p style={styles.author}>
              <strong>{comment.author || "Anonymous"}</strong>
            </p>
            <p style={styles.body}>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    border: "1px solid #e2e2e2",
    borderRadius: "8px",
    padding: "1rem",
    background: "#fafafa",
    marginTop: "1.5rem",
  },
  heading: {
    fontSize: "1.25rem",
    fontWeight: "600",
    marginBottom: "1rem",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  comment: {
    borderBottom: "1px solid #ddd",
    paddingBottom: "0.75rem",
    marginBottom: "0.75rem",
  },
  author: {
    marginBottom: "0.25rem",
  },
  body: {
    margin: 0,
    color: "#333",
    lineHeight: 1.5,
  },
};
