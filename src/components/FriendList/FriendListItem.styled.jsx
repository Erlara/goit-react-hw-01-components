import styled from "styled-components";

export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  width: 280px;
  height: 65px;
  gap: 20px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
 
  :not(:last-child) {
    margin-bottom: 10px;
  }
 
`;

export const FriendName = styled.p`
  font-size: 18px;
  line-height: 1.333;
  font-weight: 700;
  letter-spacing: 0.5;

`;


export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;