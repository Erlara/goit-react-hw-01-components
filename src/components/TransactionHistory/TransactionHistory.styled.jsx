import styled from "styled-components";

export const Table = styled.table`
   box-shadow: 0 2px 5px rgb(0 0 0 / 20%), 0 4px 6px rgb(0 0 0 / 20%); 
`;

export const Header = styled.thead`
  background-color: #58c5c5;
  color: white;
`;

export const HeaderLine = styled.tr`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.333;
  height: 50px;
`;

export const HeaderColumn = styled.th`
  width: 160px;
`;

export const Tbody = styled.tbody`
  :nth-of-type(2n) {
    background-color: white;
  }
  :nth-of-type(2n + 1) {
    background-color: #e7e5e5;
  }
`;

export const TColumn = styled.td`
  text-align: center;
`;
export const TLine = styled.tr`
  height: 40px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.333;
  transition: background-color 150ms ease-in;
  :hover {
    cursor: pointer;
    background-color: #58c5c5;
  }
`;