import styled from 'styled-components';

export const Container = styled.div`
   min-height: 100vh;
   padding: 0 0.5rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

export const Footer = styled.footer`
   width: 100%;
   height: 100px;
   display: flex;
   justify-content: center;
   align-items: center;

   a {
      color: #0070f3;
      text-decoration: none;
   }
`;
