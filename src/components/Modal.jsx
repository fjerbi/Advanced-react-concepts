import React, { useState } from "react";
import { styled } from "styled-components";

const ModalBackground = styled.div`
position: absolute;
left:0;
top:0;
overflow: auto;
background-color: rgba(0,0,0,0.4);
width: 100%;    
height: 100%;
`;

const ModalContent = styled.div`
margin: 15% auto;
padding: 20px;
background-color: white;
width: 50%;
`;

export const Modal = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>Open Modal</button>
      {show && (
        <ModalBackground onClick={() => setShow(false)}>
          <ModalContent onClick={e =>e.stopPropagation()}>
            <button onClick={() => setShow(false)}>hide Modal</button>
            {children}
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};
