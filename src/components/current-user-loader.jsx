import React,{ useEffect, useState } from "react";
import axios from "axios";

export const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");
      setUser(response.data);
    })();
  }, []);


  return (
    <>
    {/* mapping through children to pass user prop to each child*/} 
    {React.Children.map(children, child => {
        if(React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
    })}
    </>
  )
};
