import styled from "styled-components";

export const Container = styled.div`
background-color: white;
border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  width: 280px;
  overflow: hidden;
  
`;

export const Description = styled.div`
   padding-top: 35px;
   padding-bottom: 35px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;


`;

export const Image = styled.img`
    width: 150px;
    border-radius: 50%;
    background-color: gray;
    
`;

export const Name = styled.p`
    margin-top: 25px;
    font-size: 20px;
  line-height: 1.333;
  font-weight: 700;
  letter-spacing: 0.5;
`;

export const Tag = styled.p`
    margin-top: 10px;
     color: gray;
    
`;

export const Location = styled.p`
    margin-top: 10px;
     color: gray;
    
`;

export const Stats = styled.ul`
    display: flex;
     align-items: center;
  justify-content: space-around;
  background-color: #f8f7f7;
`;

export const StatsItem = styled.li`
    display: flex;
flex-direction: column;
padding-top: 15px;
padding-bottom: 15px;
align-items: center;
border: 1px solid rgba(0, 0, 0, 0.2);
width: 100%;
font-size: 16px;
  line-height: 1.333;
  font-weight: 700;
  letter-spacing: 0.5;
`;

export const Label = styled.span`
  margin-bottom: 5px;
  font-size: 14px;
  line-height: 1.333;
  font-weight: 400;
  color: gray;  
`;