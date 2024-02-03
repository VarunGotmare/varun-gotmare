import React from "react";
import styled from "styled-components";


export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  height: 100vh;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;   

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    `;

const Retard= () =>{
    return <HeroContainer>
        <Img src=""></Img>
    </HeroContainer>;
}
export default Retard;