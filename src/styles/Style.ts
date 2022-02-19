import styled from "styled-components";

export const Li = styled.li`
  padding: 25px;
  border: 1px solid #000;
  border-radius: 3px;
  margin: 10px 0;
  cursor: pointer;
  background-color: #83a;
  color: #fefefe;
  &:hover {
    background-color: #83e;
  }
`;

export const albumPhotos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  max-width: 900px;
  margin: 0 auto;
  padding: 30px;
  & > div {
    border: 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 15px;
    cursor: pointer;
    &:hover {
      filter: brightness(0.8);
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Button = styled.button`
  background: #83a;
  color: #fefefe;
  padding: 10px;
  border: none;
  border-radius: 3px;
  margin: 3px;
  cursor: pointer;
  &:hover,
  &:focus {
    background: #83e;
  }
`;
