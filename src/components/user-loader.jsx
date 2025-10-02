import React,{ useEffect, useState } from "react";
import axios from "axios";

export const UserLoader = ({ userId, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/users/${userId}`);
      setUser(response.data);
    })();
  }, [userId]);


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
