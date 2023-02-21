import styled from "styled-components";

export const Container = styled.section`
background-color: white;
border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  width: 400px;
  overflow: hidden;
  padding-top: 20px;
`;

export const Title = styled.h2`
display: block;
  margin-bottom: 20px;
  text-align: center;
  font-size: 22px;
  line-height: 2;
  font-weight: 500;
  letter-spacing: 0.5;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
    display: flex;
    background-color: pink; 
`;

export const StatItem = styled.li`
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding-top: 15px;
    padding-bottom: 15px; 
    gap: 8px;
    color: white;
`;

export const StatPercent = styled.span`
    font-size: 20px;
`;


 
