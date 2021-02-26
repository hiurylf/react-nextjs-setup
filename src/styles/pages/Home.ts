import styled from 'styled-components';

export const Container = styled.div`
   min-height: 100vh;
   padding: 0 0.5rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   h1 {
      padding: 5px 20px;
   }
`;

export const Footer = styled.div`
   width: 100%;
   height: 100px;
   display: flex;
   justify-content: center;
   align-items: center;

   a {
      color: #0070f3;
      text-decoration: none;

      &:hover {
         color: #4d9dff;
      }
   }
`;
