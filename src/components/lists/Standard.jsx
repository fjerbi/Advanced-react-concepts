export const StandardList = ({ items, sourceName, ItemComponent }) => {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} item={item} {...{ [sourceName]: item }} />
      ))}
    </>
  );
};
