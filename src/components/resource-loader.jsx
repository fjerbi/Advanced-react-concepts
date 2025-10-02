import React,{ useEffect, useState } from "react";
import axios from "axios";

export const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceUrl);
      setResource(response.data);
    })();
  }, [resourceUrl]);


  return (
    <>
    {/* mapping through children to pass user prop to each child*/} 
    {React.Children.map(children, child => {
        if(React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }
        return child;
    })}
    </>
  )
};
