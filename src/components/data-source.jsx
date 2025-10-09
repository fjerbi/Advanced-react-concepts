import React, { useEffect, useState } from "react";

export const DataSource = ({ getData = () => {}, resourceName, children }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getData();
      setResource(data);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // if getData is stable

  return (
    <>
      {/* mapping through children to pass user prop to each child*/}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }
        return child;
      })}
    </>
  );
};
