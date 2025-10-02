export const UserInfo = ({ user }) => {
  const { name, age, country, books } = user || {};

  return user ? (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      <p>Books:</p>
      <ul>
        {books.map((book) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </div>
  ) : (
    <h1>Loading ..</h1>
  );
};
