import { styled } from "styled-components";

const ModalBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
`;

const ModalContent = styled.div`
  margin: 15% auto;
  padding: 20px;
  background-color: white;
  width: 50%;
`;

export const ControlledModal = ({ shouldDisplay, onClose, children }) => {
  return (
    <>
      {shouldDisplay && (
        <ModalBackground onClick={onClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose}>hide Modal</button>
            {children}
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};
