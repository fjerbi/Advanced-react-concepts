export const BookInfo = ({ book }) => {
  const { name, price, title, pages } = book || {};

  return book ? (
    <div>
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>Title: {title}</p>
      <p>Pages: {pages}</p>
    </div>
  ) : (
    <h1>Loading ..</h1>
  );
};
