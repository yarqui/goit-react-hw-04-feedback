import styled from 'styled-components';

export const OptionButton = styled.button`
  margin-right: 10px;
  padding: 5px;
  width: 60px;

  border: 0px;
  border-radius: 5px;

  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    cursor: pointer;
    background: #cccbcb;
  }
`;
