import { useEffect, useState } from "react";

export const DataSourceWithRender = ({ getData = () => {}, render }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getData();
      setResource(data);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // if getData is stable

  return render(resource);
};
