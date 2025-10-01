export const NumberedList = ({ items, sourceName, ItemComponent }) => {
  return (
    <>
      {items.map((item, i) => (
        <>
          {i + 1}
          <ItemComponent key={i} item={item} {...{ [sourceName]: item }} />
        </>
      ))}
    </>
  );
};
