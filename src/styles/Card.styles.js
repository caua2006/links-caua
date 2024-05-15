import styled from "styled-components";

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 40px;
gap: 16px;
background: #1f1f1f;
border-radius: 8px;

`

export const CardImg = styled.img`
border-radius: 100%;
width: 3.5rem/* 56px */;
 height: 3.5rem/* 56px */;

`

export const Cardh2 = styled.h2`
    font-size: 24px;
    color: #fff;
`
export const Cardh3 = styled.h3`
    font-size: 14px;
    color: hsl(75, 94%, 57%);
`
export const CardP = styled.p`
    font-size: 14px;
    color: hsl(0, 0%, 60%);
`
export const CardButton = styled.button`
    font-size: 14px;
    background: hsl(0, 0%, 20%);
    width: 100%;
    padding-block: 8px;
    border-radius: 8px;
    color: white;
    
    :hover {
    background:hsl(75, 94%, 57%) ;
  }
`



