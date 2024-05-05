import React from 'react';
import styled from '@emotion/styled';
import { TbLetterX } from "react-icons/tb";
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 2.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #fff;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
display:flex;
justify-content: space-around;
`;

const DeleteButton = styled.button`
  background-color: #f44336;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 1rem;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;

const CancelButton = styled.button`
  background-color: #fff;
  color: #38bdf8;
  border: 1px solid #38bdf8;
  padding: 10px 20px;
  border-radius: 1rem;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #e8f0fe;
  }
`;

const PopUp = () => {
  return (
    <>
      <Modal>
        <ModalContent>
          <h3 className="mb-5 text-lg font-normal text-gray-500">Are you sure you want to delete this product?</h3>
          <ButtonContainer>
            <DeleteButton>Yes, I'm sure</DeleteButton>
            <CancelButton>No, cancel</CancelButton>
          </ButtonContainer>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PopUp;